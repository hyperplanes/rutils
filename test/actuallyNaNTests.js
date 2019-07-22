import {actuallyNaN} from "../src/js/actuallyNaN.js";

QUnit.test( "actuallyNaN NaN", function( assert ) {
	let A=NaN;
	assert.equal(actuallyNaN(A),true);
});

QUnit.test( "actuallyNaN 1", function( assert ) {
	let A=1;
	assert.equal(actuallyNaN(A),false);
});
QUnit.test( "actuallyNaN undefined", function( assert ) {
	let A;
	assert.equal(actuallyNaN(A),false);
});
QUnit.test( "actuallyNaN null", function( assert ) {
	let A=null;
	assert.equal(actuallyNaN(A),false);
});
QUnit.test( "actuallyNaN string", function( assert ) {
	let A='foobar';
	assert.equal(actuallyNaN(A),false);
});
QUnit.test( "actuallyNaN bool", function( assert ) {
	let A=true;
	assert.equal(actuallyNaN(A),false);
});
QUnit.test( "actuallyNaN object", function( assert ) {
	let A={
		foo:'bar'
	};
	assert.equal(actuallyNaN(A),false);
});