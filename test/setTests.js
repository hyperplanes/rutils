import {cumsum} from "../src/js/cumsum.js";
import {cartesian} from "../src/js/cartesian.js";
import {isDateOrPrimitive} from "../src/js/isDateOrPrimitive.js";
import {isObject} from "../src/js/isObject.js";
import {intersect} from "../src/js/intersect.js";
import {shallowObjectComparer} from "../src/js/shallowObjectComparer.js";
    import {primitive_intersect} from "../src/js/primitive_intersect.js";
    import {primitive_unique} from "../src/js/primitive_unique.js";
    import {setdiff} from "../src/js/setdiff.js";
    import {union} from "../src/js/union.js";
    import {unique} from "../src/js/unique.js";

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
QUnit.test( "cartesian", function( assert ) {
	let A=[1,-2];
	let B=['a','b']
	let result=cartesian(A,B);
	assert.deepEqual(result,[
			[1,'a'],
			[1,'b'],
			[-2,'a'],
			[-2,'b']
		]);
});
QUnit.test( "cartesian objects", function( assert ) {
	let A=[
		{
			x:1,
			y:'z'
		},
		{
			x:-2,
			y:'y'
		}
	];
	let B=['a','b']
	let result=cartesian(A,B);
	assert.deepEqual(result,[
			[{
			x:1,
			y:'z'
		},'a'],
			[{
			x:1,
			y:'z'
		},'b'],
			[{
			x:-2,
			y:'y'
		},'a'],
			[{
			x:-2,
			y:'y'
		},'b']
		]);
});

