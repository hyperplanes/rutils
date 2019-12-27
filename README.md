# rutils
A library of javascript functions that implement set and sequence-based operations in a style similar to R. The library provides analogs of `seq`, `union`,`unique`, `intersect`, `setdiff`, and `identical`. It also includes a `cartesian` method for which there is no analog in base R. 

## Getting Started

This library is written in modern javascript modules, using webpack and babel to transpile to a more browser-compatible code bundle. If you are not developing with javascript modules using the ES6 `import` syntax, it is recommended you use the transpiled bundle instead of the original source code.

### Running transpiled code in a webpage

The transpiled release code is in `dist\rutils.bundle.js`. To include this in a web app, copy the bundle to your webserver and include it in a script tag:

```html
<script src="rutils.bundle.js"></script>
```

Then you can access the methods through the exported `rutils` object:

```js
var unique=rutils.unique;
var x=[1,1,2,2,3,3];
var unique_x=unique(x); //[1,2,3];
```

### Importing the original methods in a javascript module

The original source files are in `src` and all of the library methods are exported by `src/index.js`. You can copy these files to your project and import them in your javascript module:

```js
import {unique} from 'src/index.js';

let x=[1,1,2,2,3,3];
let unique_x=unique(x); //[1,2,3];
```
## Usage

### `seq` - generate sequences of dates or numbers

`seq` takes an object as it's argument, with the optional properties `from`,`to`,`length_out`,`by`, and `along_with`. The last one, `along_with` is just used to set `length_out` equal to the length of an existing array. At most one of `from`,`to`,`by`, and `length_out` or `along_with` can be left empty and `seq` will impute it from the other parameters. If a single integer `N` is passed to `seq` instead of an object, it will generate an array of integers starting at 1 and counting up by 1 to `N`.

Generating a sequence of even numbers starting at 2 and ending at 10:
```js
import {seq} from 'src/index.js';

let x=seq({from:2,to:10,by:2}); //[2,4,6,8,10]
```

Counting the number of quarters since Q1 2010:
```js
import {seq} from 'src/index.js';

let x=seq({from:new Date(2010,0,1), to:new Date(),by:"3 months"}).length;
```

Counting backwards:
```js
import {seq} from 'src/index.js';

let x=seq({from:10,to:2,by:-2}); //[10,8,6,4,2]
```

What was the date 100 days ago?
```js
import {seq} from 'src/index.js';

let x=seq({to:new Date(),by:"days", length_out:100})[0];
```

### `cumsum` - cumulative sum over an array

Cumsum takes an array of numbers and returns an array of the cumulative sum
```js
import {seq} from 'src/index.js';
import {cumsum} from 'src/index.js';

let x=cumsum(seq(3)); //[1,3,6]
```

### `cartesian` - cartesian product of two or more arrays
cartesian can take any number of arrays as arguments, and will return an array with the cartesian product of the arguments
```js
import {cartesian} from 'src/index.js';

let x=[1,2]
let y=['a','b'];
let result=cartesian(x,y);
// result:
// [
// 	[1,'a'],
// 	[1,'b'],
// 	[2,'a'],
// 	[2,'b']
// ];
```
`cartesian` can handle both primitive types like numbers and strings as well as objects like dates and object literals as elements. Note, however, that it will flatten arrays of arrays, which might not be the behavior you're expecting:
```js
let A=[[1,2],[3,4]];
let B=[
	['a','b'],
	['c','d']
	];
let result=cartesian(A,B);
// result:
// [
// 		[1,2,'a','b'],
// 		[1,2,'c','d'],
// 		[3,4,'a','b'],
// 		[3,4,'c','d']
// ]
```
### `identical` - deep equivalence of two objects
`identical(x,y)` returns true if the object `x` is deep-equal to the object `y`, and false otherwise. Primitive types (string, number, null, undefined, bigint, symbol, boolean) are compared by strict equality (`===`), dates are compared by `valueOf`, while all other objects are compared by comparing keys and values, using recursion for nested objects. 
```js
let x={
	prop1:1,
	prop2:{
		nested1:'foo',
		nested2:'bar',
		nestedArray:[1,2,3]
	}
}
let y={
	prop1:1,
	prop2:{
		nested1:'foo',
		nested2:'bar',
		nestedArray:[1,2,3]
	}
}
let result=identical(x,y); //true
let result2=identical(NaN,NaN); //also true
```
One exception to the above rule is that `NaN` is considered identical to itself, which differs from native javascript where `NaN` is the only value that is not considered equal to itself. This is because rutils intends to treat `NaN` as the javascript analog to R's `NA`.

### `intersect` - set of objects contained in both of two arrays
`intersect(A,B)` returns the elements of an array `A` that are identical to an element in array `B`, as determined by the `itentical` method above. Note that the returned objects are the exact objects that were in `A` and not clones of them.
```js
let x={
	foo:'bar'
};
let A=[1,2,x];
let B=[3,2,x,5];
let result=intersect(A,B);//returns [2,x];
let isSameObject=result[1]===x; //returns true, both references point to the same object
```
### `setdiff` - difference between two arrays 
`setdiff(A,B)` returns the distinct elements of array `A` that are not identical to any element in array `B`, as determined by the `identical` method above. Works the same as `intersect` in that returned objects are literally elements of `A` and not clones of them.
```js
let A=[1,2,3];
let B=[3,2,4];
let result=setdiff(A,B); //returns [2,3]
```

### `union` - set of objects in either of two arrays
`union(A,B)` returns a new array containing all of the unique elements of `A` followed by all the unique elements of `B`. If any two elements are identical, as determined by the `identical` method above, only the first instance will be returned in the resulting array.
```js
let x={
	foo:'bar'
};
let A=[1,2,x];
let B=[3,2,x,5];
let result=union(A,B);//returns [1,2,x,3,5]
```

### `unique` - get the first instance of each object in an array
`unique(A)` returns the first occurance of each object in array `A`, using the `identical` method above to compare objects.
```js
let A=[1,2,3,2,4];
let result=unique(A); //returns [1,2,3,4]
```

### `max` - get the maximum value in an array
`max(A)` returns the maximum value across its arguments. `max` differs from native javascript `Math.max` in that it accepts both arrays and objects as arguments and if the maximal value is a date, it will return the original date object and not an integer value.
```js
let result1=max([1,2,3],[6,4],5); //returns 6
let result2=max([1,2,3]); //returns 3
let result3=max(1,2,3); //returns 3

let a=new Date(2019,1,1);
let b=new Date(2019,0,1);
let c=new Date(2019,2,1);
let result4=max(a,b,c);
console.log(result4); //prints Fri Mar 01 2019 00:00:00 GMT-0500 (Eastern Standard Time)
let result5=c===result4; //returns true because max returns the original object
```

### `min` - get the minimum value in an array
`min(A)` returns the minimum value across its arguments. Works the same as `max` above.

### `diff` - get lagged differences of an array
`diff(A,{lag:n,differences:k})` returns an array of the `k`<sup>th</sup> differences in array `A` lagged by `n` places. The `lag` and `differences` parameters are optional, with default value of 1. They must be positive integers. `diff` also works on date objects but unlike R, will consistently return a result in miliseconds.

```js
let A=[1,2,3,2,4];
let result1=diff(A); //returns [1,1,-1,2]
let result2=diff(A,{differences:2}); //returns [0,-2,3]
let result3=diff(A,{lag:2}); //returns [2,0,1]
let result4=diff(A,{lag:2,differences:2}); //returns [-1]

let B=[new Date(2019,1,1),new Date(2019,0,1),new Date(2019,2,1)];
let result5=diff(B);// returns [-2678400000, 5097600000]
```


## Running the tests

This assumes you have cloned the `rutils` directory and have Node.js installed. In the command prompt run `npm install` in th rutils directory to install the required node modules. It may help to also run `npm install -g webpack webpack-cli` to globally install the command-line tools for webpack.

To build the distribution bundle, run the command

```
npm run build
```

To run the unit tests, run

```
npm start
```

to launch webpack's dev server. Then open a web browser to `http://localhost:8080/test/` (or whatever URL domain webpack tells you). The tests will only run in a browser, such as Chrome, that accepts modular script tags like this:

```
<script type="module" src="intersectTests.js"></script>
```

Note, although this uses QUnit for the unit tests, the command `qunit` won't run the tests because Node.js is not yet compatible with the official ES6 module syntax. Also note that Chrome will refuse to load modular scripts if you open the html file directly in the browser rather than using the dev server.

Every exported function has its own file in the `src\js` directory, and each file has a corresponding `test/[name]Tests.js` file in the `test` directory, with the exception of the sequence related source files which are all tested together in `tests/seqTests.js`:

```
"standardize_date_units.js"
"calculate_date_by.js"
"DateMethods.js"
"seq.js"
"seq_Date.js"
"seq_date_primitive.js"
"seq_num.js"
"seq_num_primitive.js"
```

The unit tests aim for 100 percent code coverage. The file `tests/index.html` contains script tags for all of the unit test files and therefore will run them all when opened in the browser. Additional html files in `test` will run specific subsets of the unit tests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details