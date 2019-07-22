import {cumsum} from "../src/js/cumsum.js";
QUnit.test( "cumsum", function( assert ) {
	let A=[1,-2,5];
	let result=cumsum(A);
	assert.deepEqual(result,[1,-1,4]);
});
QUnit.test( "cumsum empty array", function( assert ) {
	let A=[];
	let result=cumsum(A);
	assert.deepEqual(result,[]);
});