import {setdiff} from "../src/js/setdiff.js";
QUnit.test( "setdiff subtract empty array", function( assert ) {

	let A=[2,2,3,4];
	let B=[];
	//union concatenates the argument arrays first, then applies unique
	let C=[2,3,4];
	assert.deepEqual(setdiff(A,B),C);
});
QUnit.test( "setdiff", function( assert ) {
	let object1={
		foo:'bar'
	};
	let object2={
		foo:'bar'
	};
	let symbol1=Symbol('foo');//symbols should always be considered unique by definition
	let symbol2=Symbol('foo');
	let A=[NaN,NaN,'foo','foo',1,'foo',1,BigInt(9007199254740991),BigInt(9007199254740991),2.2,2.2,-3,-3,null,null,undefined,undefined,,symbol1,symbol2,true,true,new Date(2010,1,1),new Date(2010,1,1),new Date(2010,1,1),object1,object1,object2,object2];
	let B=[NaN,NaN,'bar','bar',2,'bar',1,BigInt(9007199254740991),BigInt(9007199254740991),2.2,2.2,-3,-3,null,null,undefined,undefined,,symbol1,symbol2,true,true,new Date(2010,1,1),new Date(2010,1,1),new Date(2010,1,1),object1,object1,object2,object2,42];
	//union concatenates the argument arrays first, then applies unique
	let C=['foo'];
	assert.deepEqual(setdiff(A,B),C);
});
QUnit.test( "setdiff no NaNs", function( assert ) {
	let object1={
		foo:'bar'
	};
	let object2={
		foo:'bar'
	};
	let symbol1=Symbol('foo');//symbols should always be considered unique by definition
	let symbol2=Symbol('foo');
	let A=['foo','foo',1,'foo',1,BigInt(9007199254740991),BigInt(9007199254740991),2.2,2.2,-3,-3,null,null,undefined,undefined,,symbol1,symbol2,true,true,new Date(2010,1,1),new Date(2010,1,1),new Date(2010,1,1),object1,object1,object2,object2];
	let B=['bar','bar',2,'bar',1,BigInt(9007199254740991),BigInt(9007199254740991),2.2,2.2,-3,-3,null,null,undefined,undefined,,symbol1,symbol2,true,true,new Date(2010,1,1),new Date(2010,1,1),new Date(2010,1,1),object1,object1,object2,object2,42];
	//union concatenates the argument arrays first, then applies unique
	let C=['foo'];
	assert.deepEqual(setdiff(A,B),C);
});
QUnit.test( "setdiff; A is empty", function( assert ) {
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
	assert.deepEqual(setdiff(A,B),C);
});
QUnit.test( "setdiff; B is empty", function( assert ) {
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
	let C=[NaN,'foo',1,BigInt(9007199254740991),2.2,-3,symbol1,symbol2,true,new Date(2010,1,1),object1];
	assert.deepEqual(setdiff(A,B),C);
});