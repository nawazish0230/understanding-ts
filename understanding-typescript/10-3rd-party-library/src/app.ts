import _ from 'lodash';
import "reflect-metadata"
import { plainToClass } from 'class-transformer'
import { Product } from './product.model';
import { validate } from 'class-validator';

// 1. using lodash which is not compatible with ts project
console.log('shuffle', _.shuffle([1, 2, 3]))

// 2. using the lib/code which is written in js
// when some value exists globally and we need to tell this to typescript
declare var GLOBAL: any;
console.log('GLOBAL', GLOBAL)

// 3. class-transformer is made specially for typescript bt it works with normal js project also
const p1 = new Product('A book', 100);
console.log('p1', p1.getInfo())

const products = [
  { title: 'Book', price: 10 },
  { title: 'table', price: 99 }
]

const loadedProducts = plainToClass(Product, products)
console.log('loadedProducts', loadedProducts)

// 4. use class-validator
const newProd = new Product('', -1);
validate(newProd).then(data => console.log('data', data))
console.log('newProd', newProd)