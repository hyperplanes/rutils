import {primitive_unique} from "../src/js/primitive_unique.js";
QUnit.test( "primitive types", function( assert ) {
	let symbol1=Symbol('foo');//symbols should always be considered unique by definition
	let symbol2=Symbol('foo');
	let A=[NaN,NaN,'foo','foo',1,'foo',1,BigInt(9007199254740991),BigInt(9007199254740991),2.2,2.2,-3,-3,null,null,undefined,undefined,,symbol1,symbol2,true,true,new Date(2010,1,1),new Date(2010,1,1),new Date(2010,1,1)];
	let B=[NaN,'foo',1,BigInt(9007199254740991),2.2,-3,symbol1,symbol2,true,new Date(2010,1,1)];
	assert.deepEqual(primitive_unique(A),B);
});

QUnit.test( "object types", function( assert ) {
	let object1={
		foo:'bar'
	};
	let object2={
		foo:'bar'
	};
	let A=[object1,object1,object2,object2];
	assert.deepEqual(primitive_unique(A),[object1,object2]);
});
QUnit.test( "unique mixed objects and primitive", function( assert ) {
	let object1={
		foo:'bar'
	};
	let object2={
		foo:'bar'
	};
	let symbol1=Symbol('foo');//symbols should always be considered unique by definition
	let symbol2=Symbol('foo');
	let A=[NaN,NaN,'foo','foo',1,'foo',1,BigInt(9007199254740991),BigInt(9007199254740991),2.2,2.2,-3,-3,null,null,undefined,undefined,,symbol1,symbol2,true,true,new Date(2010,1,1),new Date(2010,1,1),new Date(2010,1,1),object1,object1,object2,object2];
	let B=[NaN,'foo',1,BigInt(9007199254740991),2.2,-3,symbol1,symbol2,true,new Date(2010,1,1),object1,object2];
	assert.deepEqual(primitive_unique(A),B);
});