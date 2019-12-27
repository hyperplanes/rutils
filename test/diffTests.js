import {diff} from "../src/js/diff.js";
QUnit.test( "first differences, defaults", function( assert ) {
	let A=[1,-2,5,1,-2,5];
	let result=diff(A);
	assert.deepEqual(result,[-3,7,-4,-3,7]);
});
QUnit.test( "first differences, specify differences", function( assert ) {
	let A=[1,-2,5,1,-2,5];
	let result=diff(A,{differences:1});
	assert.deepEqual(result,[-3,7,-4,-3,7]);
});
QUnit.test( "first differences, specify lags", function( assert ) {
	let A=[1,-2,5,1,-2,5];
	let result=diff(A,{lag:1});
	assert.deepEqual(result,[-3,7,-4,-3,7]);
});
QUnit.test( "first differences, specify lags and differences", function( assert ) {
	let A=[1,-2,5,1,-2,5];
	let result=diff(A,{lag:1,differences:1});
	assert.deepEqual(result,[-3,7,-4,-3,7]);
});
QUnit.test( "second differences, specify differences", function( assert ) {
	let A=[1,-2,5,1,-2,5];
	let result=diff(A,{differences:2});
	assert.deepEqual(result,[10,-11,1,10]);
});

QUnit.test( "first differences, datetimes, defaults", function( assert ) {
	let A=[new Date(2019,1,1,1,1,0),new Date(2019,1,1,1,2,0)];
	let result=diff(A);
	assert.deepEqual(result,[60000]);
});