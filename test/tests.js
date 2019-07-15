import {cartesian} from "../src/js/cartesian.js";
import {setdiff,union,unique,intersect} from "../src/js/setoperations.js";
import {cumsum} from "../src/js/cumsum.js";
const A=[1,2,3,4,5];
const B=[1,3,5,7,9];
const C=[1,1,2,2,3,3];
const cartesianExpected=[
[1,1],
[1,2],
[1,3],
[1,4],
[1,5],
[3,1],
[3,2],
[3,3],
[3,4],
[3,5],
[5,1],
[5,2],
[5,3],
[5,4],
[5,5],
[7,1],
[7,2],
[7,3],
[7,4],
[7,5],
[9,1],
[9,2],
[9,3],
[9,4],
[9,5]
];

const AminusB=[2,4];
const AunionB=[1,2,3,4,5,7,9];
const uniqueC=[1,2,3];
const cumsumA=[1,3,6,10,15];
const AintersectC=[1,2,3];
QUnit.test( "cumsum", function( assert ) {
	let result=cumsum(A);
	assert.deepEqual(result,cumsumA);
});
QUnit.test( "unique", function( assert ) {
	let result=unique(C);
	assert.deepEqual(result,uniqueC);
});
QUnit.test( "union", function( assert ) {
	let result=union(A,B);
	assert.deepEqual(result,AunionB);
});
QUnit.test( "setdiff", function( assert ) {
	let result=setdiff(A,B);
	assert.deepEqual(result,AminusB);
});
QUnit.test( "intersect", function( assert ) {
	let result=intersect(A,C);
	assert.deepEqual(result,AintersectC);
});

QUnit.test( "cartesian", function( assert ) {
	let result=cartesian(B,A);
	assert.deepEqual(result,cartesianExpected);
});