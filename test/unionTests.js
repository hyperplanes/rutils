import {union} from "../src/js/union.js";
QUnit.test( "union", function( assert ) {
	let object1={
		foo:'bar'
	};
	let object2={
		foo:'bar'
	};
	let symbol1=Symbol('foo');//symbols should always be considered unique by definition
	let symbol2=Symbol('foo');
	let A=[NaN,NaN,'foo','foo',1,'foo',1,BigInt(9007199254740991),BigInt(9007199254740991),2.2,2.2,-3,-3,null,null,undefined,undefined,,symbol1,symbol2,true,true,new Date(2010,1,1),new Date(2010,1,1),new Date(2010,1,1),object1,object1,object2,object2];
	let B=[NaN,NaN,'bar','bar',2,'bar',1,BigInt(9007199254740991),BigInt(9007199254740991),2.2,2.2,-3,-3,null,null,undefined,undefined,,symbol1,symbol2,true,true,new Date(2010,1,1),new Date(2010,1,1),new Date(2010,1,1),object1,object1,object2,object2];
	//union concatenates the argument arrays first, then applies unique
	let C=[NaN,'foo',1,BigInt(9007199254740991),2.2,-3,symbol1,symbol2,true,new Date(2010,1,1),object1,'bar',2];
	assert.deepEqual(union(A,B),C);
});
QUnit.test( "union non-array arguments", function( assert ) {
	let object1={
		foo:'bar'
	};
	let object2={
		foo:'bar'
	};
	let symbol1=Symbol('foo');//symbols should always be considered unique by definition
	assert.deepEqual(union(object1,symbol1,object2,1,1),[object1,symbol1,1]);
});