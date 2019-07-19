# rutils
A library of javascript functions that implement set and sequence-based operations in a style similar to R. The library provides analogs of `seq`, `union`,`unique`, `intersect`, `setdiff`, and `identical`. It also includes a `cartesian` method for which there is no analog in base R. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

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

### cumsum

Cumsum takes an array of numbers and returns an array of the cumulative sum
```js
import {cumsum} from 'src/index.js';

let x=cumsum([1,2,3]); //[1,3,6]
```

### cartesian
cartesian can take any number of arrays as arguments, and will return an array with the cartesian product of the arguments
```js
import {cartesian} from 'src/index.js';

let x=[1,2]
let y=['a','b'];
let result=cartesian(x,y);
```

### intersect

### setdiff
### union
### unique
### identical


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

Every exported function in `src\js` has its own file, and each file has a corresponding `[name]`Tests.js in the `tests` directory, with the exception of the sequence related source files which are all tested together in `tests/seqTests.js`:

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