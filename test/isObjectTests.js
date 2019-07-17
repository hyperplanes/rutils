import {isDateOrPrimitive} from "../src/js/isDateOrPrimitive.js";
import {isObject} from "../src/js/isObject.js";   
QUnit.test( "null and null", function( assert ) {
	let A=null;
	let B=null;
	assert.equal(A===B,true);
});
QUnit.test( "undefined and null", function( assert ) {
	let A;
	let B=null;
	assert.equal(A===B,false);
});
QUnit.test( "undefined and undefined", function( assert ) {
	let A;
	let B;
	assert.equal(A===B,true);
});
QUnit.test( "isObject literal", function( assert ) {
	let A={
			x:1,
			y:'z'
		};
	let result=isObject(A);
	assert.ok(result);
});
QUnit.test( "isObject null", function( assert ) {
	let A=null;
	let result=isObject(A);
	assert.equal(result,false);
});
QUnit.test( "isObject undefined", function( assert ) {
	let A;
	let result=isObject(A);
	assert.equal(result,false);
});
QUnit.test( "isObject array", function( assert ) {
	let A=[1,2];
	let result=isObject(A);
	assert.equal(result,true);
});
QUnit.test( "isObject number", function( assert ) {
	let A=1;
	let result=isObject(A);
	assert.equal(result,false);
});
QUnit.test( "isObject string", function( assert ) {
	let A='foobar';
	let result=isObject(A);
	assert.equal(result,false);
});
QUnit.test( "isDateOrPrimitive date", function( assert ) {
	let A=new Date();
	let result=isDateOrPrimitive(A);
	assert.equal(result,true);
});
QUnit.test( "isDateOrPrimitive string", function( assert ) {
	let A=new Date();
	let result=isDateOrPrimitive(A);
	assert.equal(result,true);
});