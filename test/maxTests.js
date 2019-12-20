import {max} from "../src/js/max.js";
QUnit.test( "max numbers mixing arrays and numbers", function( assert ) {
	
	let maxA=max([1,2,3],4,[5,6]);
	assert.deepEqual(maxA,6);
});
QUnit.test( "max array of numbers", function( assert ) {
	
	let maxA=max([1,2,3]);
	assert.deepEqual(maxA,3);
});
QUnit.test( "max non-array numbers", function( assert ) {
	
	let maxA=max(1,2,3);
	assert.deepEqual(maxA,3);
});


QUnit.test( "max non-array dates", function( assert ) {
	let a=new Date(2019,1,1);
	let b=new Date(2018,1,1);
	let c=new Date(2019,2,1);
	let maxA=max(a,b,c);
	assert.ok(maxA===c);

});

QUnit.test( "max array & non-array dates", function( assert ) {
	let a=new Date(2019,1,1);
	let b=new Date(2018,1,1);
	let c=new Date(2019,2,1);
	let maxA=max([a,b],c);
	assert.ok(maxA===c);

});



// QUnit.test( "max integers", function( assert ) {
// 	let object1={
// 		foo:'bar'
// 	};
// 	let object2={
// 		foo:'bar'
// 	};
// 	let symbol1=Symbol('foo');//symbols should always be considered unique by definition
// 	let symbol2=Symbol('foo');
// 	let A=[NaN,NaN,'foo','foo',1,'foo',1,BigInt(9007199254740991),BigInt(9007199254740991),2.2,2.2,-3,-3,null,null,undefined,undefined,,symbol1,symbol2,true,true,new Date(2010,1,1),new Date(2010,1,1),new Date(2010,1,1),object1,object1,object2,object2];
// 	let B=[NaN,'foo',1,BigInt(9007199254740991),2.2,-3,symbol1,symbol2,true,new Date(2010,1,1),object1];
// 	assert.deepEqual(unique(A),B);
// });

// QUnit.test( "unique, no NaNs", function( assert ) {
// 	let object1={
// 		foo:'bar'
// 	};
// 	let object2={
// 		foo:'bar'
// 	};
// 	let symbol1=Symbol('foo');//symbols should always be considered unique by definition
// 	let symbol2=Symbol('foo');
// 	let A=['foo','foo',1,'foo',1,BigInt(9007199254740991),BigInt(9007199254740991),2.2,2.2,-3,-3,symbol1,symbol2,true,true,new Date(2010,1,1),new Date(2010,1,1),new Date(2010,1,1),object1,object1,object2,object2];
// 	let B=['foo',1,BigInt(9007199254740991),2.2,-3,symbol1,symbol2,true,new Date(2010,1,1),object1];
// 	assert.deepEqual(unique(A),B);
// });