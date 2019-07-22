import {intersect} from "../src/js/intersect.js";
QUnit.test( "intersect basic", function( assert ) {
	let A=[1,2,3,4];
	let B=[2,3];
	let expected=[2,3];
	assert.deepEqual(intersect(A,B),expected);
});
QUnit.test( "intersect basic with dates", function( assert ) {
	let A=[1,2,new Date(2019,1,1),4];
	let B=[2,new Date(2019,1,1)];
	let expected=[2,new Date(2019,1,1)];
	assert.deepEqual(intersect(A,B),expected);
});
QUnit.test( "intersect", function( assert ) {
	let object1={
		foo:'bar'
	};
	let object2={
		foo:'bar'
	};
	let symbol1=Symbol('foo');//symbols should always be considered unique by definition
	let symbol2=Symbol('foo');
	let A=[NaN,NaN,'foo','foo',1,'foo',1,BigInt(9007199254740991),BigInt(9007199254740991),2.2,2.2,-3,-3,null,null,undefined,undefined,,symbol1,symbol2,true,true,new Date(2010,1,1),new Date(2010,1,1),new Date(2010,1,1),object1,object1,object2,object2,56,90,88,6,20];
	let B=[NaN,NaN,'bar','bar',2,'bar',1,BigInt(9007199254740991),BigInt(9007199254740991),2.2,2.2,-3,-3,null,null,undefined,undefined,,symbol1,symbol2,true,true,new Date(2010,1,1),new Date(2010,1,1),new Date(2010,1,1),object1,object1,object2,object2,42];
	//union concatenates the argument arrays first, then applies unique
	let C=[NaN,1,BigInt(9007199254740991),2.2,-3,symbol1,symbol2,true,new Date(2010,1,1),object1];
	assert.deepEqual(intersect(A,B),C);
});
QUnit.test( "intersect no NaNs", function( assert ) {
	let object1={
		foo:'bar'
	};
	let object2={
		foo:'bar'
	};
	let symbol1=Symbol('foo');//symbols should always be considered unique by definition
	let symbol2=Symbol('foo');
	let A=['foo','foo',1,'foo',1,BigInt(9007199254740991),BigInt(9007199254740991),2.2,2.2,-3,-3,null,null,undefined,undefined,,symbol1,symbol2,true,true,new Date(2010,1,1),new Date(2010,1,1),new Date(2010,1,1),object1,object1,object2,object2,56,90,88,6,20];
	let B=['bar','bar',2,'bar',1,BigInt(9007199254740991),BigInt(9007199254740991),2.2,2.2,-3,-3,null,null,undefined,undefined,,symbol1,symbol2,true,true,new Date(2010,1,1),new Date(2010,1,1),new Date(2010,1,1),object1,object1,object2,object2,42];
	//union concatenates the argument arrays first, then applies unique
	let C=[1,BigInt(9007199254740991),2.2,-3,symbol1,symbol2,true,new Date(2010,1,1),object1];
	assert.deepEqual(intersect(A,B),C);
});
QUnit.test( "intersect; A is empty", function( assert ) {
	let object1={
		foo:'bar'
	};
	let object2={
		foo:'bar'
	};
	let symbol1=Symbol('foo');//symbols should always be considered unique by definition
	let symbol2=Symbol('foo');
	let A=[];
	let B=['bar','bar',2,'bar',1,BigInt(9007199254740991),BigInt(9007199254740991),2.2,2.2,-3,-3,null,null,undefined,undefined,,symbol1,symbol2,true,true,new Date(2010,1,1),new Date(2010,1,1),new Date(2010,1,1),object1,object1,object2,object2,42];
	//union concatenates the argument arrays first, then applies unique
	let C=[];
	assert.deepEqual(intersect(A,B),C);
});
QUnit.test( "intersect; B is empty", function( assert ) {
	let object1={
		foo:'bar'
	};
	let object2={
		foo:'bar'
	};
	let symbol1=Symbol('foo');//symbols should always be considered unique by definition
	let symbol2=Symbol('foo');
	let A=[NaN,NaN,'foo','foo',1,'foo',1,BigInt(9007199254740991),BigInt(9007199254740991),2.2,2.2,-3,-3,null,null,undefined,undefined,,symbol1,symbol2,true,true,new Date(2010,1,1),new Date(2010,1,1),new Date(2010,1,1),object1,object1,object2,object2];
	let B=[];
	assert.deepEqual(intersect(A,B),B);
});