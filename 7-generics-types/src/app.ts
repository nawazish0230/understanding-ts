// generic type are used when there is complex type of data need to be shown

// 1. generic type (Array<string>)
const names: Array<string> = ["john"]; //string[]
names[0].split("")

// 2. generic type (Promise<string>)
const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise resolved")
  }, 1000)
})

promise.then((data) => {
  data.split("")
})

// 3. create a generic function (problem with normal object)
function merge1(obj1: Object, obj2: Object) {
  return Object.assign(obj1, obj2)
}

const mergedObj1 = merge1({ name: 'nawaz' }, { age: 10 }) as { name: string, age: number }
mergedObj1.name  // unable to access name,as merge func. returns only object not specific
// one solution is to do type casting, bt that is not the optimal solution

// 3. create a generic function and adding constraint
function merge2<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2)
}

// const mergedObj2 = merge2<{ name: string, hobbies: string[] }, { age: number }>({ name: 'nawaz', hobbies: ['playing'] }, { age: 10 })
const mergedObj2 = merge2({ name: 'nawaz', hobbies: ['playing'] }, { age: 10 })
console.log('mergedObj2', mergedObj2)

// 4. another generic function
interface Lengthy {
  length: number
}
function countAndDescribe<T extends Lengthy>(element: T) {
  let descriptionValue = 'Got no value'
  if (element.length === 1) descriptionValue = "Got 1 element"
  if (element.length > 1) descriptionValue = "Got " + element.length + " elements"
  return [element, descriptionValue]
}
console.log('countAndDescribe', countAndDescribe("hey there"))


// 5. the keyof constraint

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value ' + obj[key]
}
console.log('extractAndConvert', extractAndConvert({ name: "nawazish" }, 'name'))
// we can put here age, as we are passing name
// we could only pass key which exists in object key


// 6. generics classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>()
textStorage.addItem('md')
textStorage.addItem('nawaz')
textStorage.removeItem('md')
console.log('generics classes', textStorage.getItems())

const numberStorage = new DataStorage<number>()

// this way we can create really flexible class by assigning type on the fly

// but will have issue on type object

// const objStorage = new DataStorage<object>()
// objStorage.addItem({ name: 'md' })
// objStorage.addItem({ name: 'nawaz' })
// objStorage.removeItem({ name: 'md' })
// console.log('generics classes obj', objStorage.getItems())

// as we have removed { name: 'md' } bt still getting {name: 'md'}, because
// object are reference type and it unable to find the proper index and it always remove 
// last item

// its not working fine with reference type its only working fine primitive type

// to make it working, as we are passing the same obj and it have same index as well
// const nameObj = { name: 'md' }
// objStorage.addItem(nameObj)
// objStorage.addItem({ name: 'nawaz' })
// objStorage.removeItem(nameObj)
// console.log('generics classes obj working code', objStorage.getItems())


// 7. generic utlity

interface CourseGoal {
  title: string,
  description: string;
  completion: string
}

function createGoalCourse(
  title: string,
  description: string,
  completion: string,
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.completion = completion
  return courseGoal as CourseGoal
}

const readonlyNames: Readonly<string[]> = ["john", "doe"]
// readonlyNames.push("abc") can't do that as it is readonly


// 8. difference between union type and generic type

class DataStorage2{
  private data: string | number | boolean[] = [];

  addItem(item: string | number | boolean) {
    //@ts-ignore
    this.data.push(item) //
  }
}
// both are not same here we are saying it can be any one , bt we can do push boolean

// so main difference is generic type assures the type of data at the first and then it 
// follows same data type in whole code, bt this not apply when we use union type
// in other words genereric type stick to the type at first and follows same during the execution