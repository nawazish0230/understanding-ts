// decorartor example
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString)
    console.log('constructor', constructor)
  }
}

// some useful decorators
function WithTemplate(template: string, hookId: string) {
  return function <T extends { new(...args: any[]): { name: string } }>(originConstructor: T) {

    // 3. returning and changing a class in a class decorator
    // returning constructor function/new class
    // by doing this, it will call only when person class is called
    // it basically replaces the class we added to decorator with a class that is totally diff.
    return class extends originConstructor {
      constructor(..._: any[]) {
        super()
        const hookEl = document.getElementById(hookId)
        if (hookEl) {
          hookEl.innerHTML = template
          hookEl.querySelector("h1")!.textContent = this.name
        }
      }
    }
  }
}

// 1. basic decorators
// it executes bottom to top
@Logger("logging person....")
@WithTemplate("<h1>My person object</h1>", "app")
class Person {
  name = 'Nawaz';

  constructor() {
    console.log('creating person....')
  }

}

const per = new Person();
console.log(per)


// 2. creating another decorator
// what property decorator will get in params is depends upon the place where it is added

function Log(target: any, propertyName: string | Symbol) {
  console.log('1. property decorator!')
  console.log(target)
  console.log(propertyName)
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  console.log('2. Accessor decorator');
  console.log(target)
  console.log(name)
  console.log(descriptor)
  return {}
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: any
) {
  console.log('3. Method decorator');
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

function Log4(
  target: any,
  name: string | Symbol,
  position: number
) {
  console.log('4. Parameter decorator');
  console.log(target)
  console.log(name)
  console.log(position)
}


class Product {
  @Log //params depends from where it is called
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val
    } else {
      throw new Error("Invalid price - enter value more than 0");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax)
  }
}

// decorators called when class is defined its not depend of creating constructors
// it helps to do some behind the scene work, like some code which should run before some code
const p1 = new Product('Book', 19)
const p2 = new Product('Book 2', 29)


// 4. creating a Autobind decorator
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMessage = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMessage.bind(this);
      return boundFn;
    }
  }
  return adjDescriptor;
}

class Printer {
  message = 'This works!';

  @Autobind
  showMessage() {
    console.log(this.message)
  }
}

const p = new Printer();

// while we use eventlisteners then this is not refering to global object
// so workaround is to bind with the printer(P) class
// but here we are creating AUTOBIND decorator
const button = document.querySelector('button')!;
// button.addEventListener('click', p.showMessage.bind(p)) // work around is to bind 
button.addEventListener('click', p.showMessage)


// 5. validation with decorators

interface ValidateConfig {
  [property: string]: {
    [validatebleProp: string]: string[]; //['required', 'positive']
  }
}

const registeredValidators: ValidateConfig = {}
function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required']
  }
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive']
  }
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true
  }

  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break
        default:
          break;
      }
    }
  }
  return isValid
}

class Course {
  @Required
  title: string;

  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("click", (event) => {
  event.preventDefault()
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  // validating-> as once can create empty title with price=0, so we need to prevent that

  // so we can add the validation here, bt everytime we need to add the logic
  // if (title.trim().length > 0){}

  const createdCourse = new Course(title, price)
  console.log('createdCourse', createdCourse)

  console.log('validate(createdCourse)', !validate(createdCourse))
  if (!validate(createdCourse)) {
    alert("Invalid input, please try again !")
  }
})