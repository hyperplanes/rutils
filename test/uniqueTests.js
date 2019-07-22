import {unique} from "../src/js/unique.js";
//these differ from primitive_unique tests because unique considers two objects as the same if they have all the same property keys and values
//whereas primitive_unique considers two object references as the same only if they reference the same object
QUnit.test( "unique", function( assert ) {
	let object1={
		foo:'bar'
	};
	let object2={
		foo:'bar'
	};
	let symbol1=Symbol('foo');//symbols should always be considered unique by definition
	let symbol2=Symbol('foo');
	let A=[NaN,NaN,'foo','foo',1,'foo',1,BigInt(9007199254740991),BigInt(9007199254740991),2.2,2.2,-3,-3,null,null,undefined,undefined,,symbol1,symbol2,true,true,new Date(2010,1,1),new Date(2010,1,1),new Date(2010,1,1),object1,object1,object2,object2];
	let B=[NaN,'foo',1,BigInt(9007199254740991),2.2,-3,symbol1,symbol2,true,new Date(2010,1,1),object1];
	assert.deepEqual(unique(A),B);
});

QUnit.test( "unique, no NaNs", function( assert ) {
	let object1={
		foo:'bar'
	};
	let object2={
		foo:'bar'
	};
	let symbol1=Symbol('foo');//symbols should always be considered unique by definition
	let symbol2=Symbol('foo');
	let A=['foo','foo',1,'foo',1,BigInt(9007199254740991),BigInt(9007199254740991),2.2,2.2,-3,-3,symbol1,symbol2,true,true,new Date(2010,1,1),new Date(2010,1,1),new Date(2010,1,1),object1,object1,object2,object2];
	let B=['foo',1,BigInt(9007199254740991),2.2,-3,symbol1,symbol2,true,new Date(2010,1,1),object1];
	assert.deepEqual(unique(A),B);
});