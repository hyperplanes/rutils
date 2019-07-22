import {identical} from "../src/js/identical.js";
QUnit.test( "two NaN", function( assert ) {
	let A=NaN;
	let B=NaN;
	assert.equal(identical(A,B),true);
});
QUnit.test( "two equal integers", function( assert ) {
	let A=-1;
	let B=-1;
	assert.equal(identical(A,B),true);
});
QUnit.test( "two unequal integers", function( assert ) {
	let A=-1;
	let B=0;
	assert.equal(identical(A,B),false);
});
QUnit.test( "two equal strings", function( assert ) {
	let A='foobar';
	let B='foobar';
	assert.equal(identical(A,B),true);
});
QUnit.test( "two unequal strings", function( assert ) {
	let A='foo';
	let B='bar';
	assert.equal(identical(A,B),false);
});

QUnit.test( "string and integer", function( assert ) {
	let A=42;
	let B='42';
	assert.equal(identical(A,B),false);
});
QUnit.test( "two equal bools", function( assert ) {
	let A=true;
	let B=true;
	assert.equal(identical(A,B),true);
});
QUnit.test( "two false bools", function( assert ) {
	let A=false;
	let B=false;
	assert.equal(identical(A,B),true);
});
QUnit.test( "two unequal bools", function( assert ) {
	let A=true;
	let B=false;
	assert.equal(identical(A,B),false);
});
QUnit.test( "bool and string", function( assert ) {
	let A=false;
	let B='false';
	assert.equal(identical(A,B),false);
});
QUnit.test( "bool and int", function( assert ) {
	let A=false;
	let B=0;
	assert.equal(identical(A,B),false);
});
QUnit.test( "two nulls", function( assert ) {
	let A=null;
	let B=null;
	assert.equal(identical(A,B),true);
});
QUnit.test( "two undefined", function( assert ) {
	let A;
	let B;
	assert.equal(identical(A,B),true);
});
QUnit.test( "int and undefined", function( assert ) {
	let A=1;
	let B;
	assert.equal(identical(A,B),false);
});
QUnit.test( "two equal dates", function( assert ) {
	let A=new Date(2019,1,1);
	let B=new Date(2019,1,1);;
	assert.equal(identical(A,B),true);
});
QUnit.test( "two unequal dates", function( assert ) {
	let A=new Date(2019,1,2);
	let B=new Date(2019,1,1);;
	assert.equal(identical(A,B),false);
});
QUnit.test( "two dates which are the same object", function( assert ) {
	let A=new Date(2019,1,2);
	let B=A;
	assert.equal(identical(A,B),true);
});

QUnit.test( "two equal arrays", function( assert ) {
	let A=[1,2,3];
	let B=[1,2,3];
	assert.equal(identical(A,B),true);
});
QUnit.test( "two unequal arrays", function( assert ) {
	let A=[1,2,3];
	let B=[1,42,3];
	assert.equal(identical(A,B),false);
});

QUnit.test( "two arrays in different orders", function( assert ) {
	let A=[1,2,3];
	let B=[1,3,2];
	assert.equal(identical(A,B),false);
});
QUnit.test( "two arrays of different lengths", function( assert ) {
	let A=[1,2,3];
	let B=[1,2,3,42];
	assert.equal(identical(A,B),false);
});
QUnit.test( "two equal sparse arrays", function( assert ) {
	let A=[1,,3];
	let B=[1,,3];
	assert.equal(identical(A,B),true);
});
QUnit.test( "two unequal sparse arrays", function( assert ) {
	let A=[1,,3];
	let B=[1,2,3];
	assert.equal(identical(A,B),false);
});

QUnit.test( "arrays of nulls", function( assert ) {
	let A=[null,null];
	let B=[null,null];
	assert.equal(identical(A,B),true);
});
QUnit.test( "arrays of nulls versus undefined", function( assert ) {
	let A=[null,null];
	let B=[null,undefined];
	assert.equal(identical(A,B),false);
});

QUnit.test( "arrays of strings", function( assert ) {
	let A=['a','b'];
	let B='ab';
	assert.equal(identical(A,B),false);
});
QUnit.test( "array versus array-like object", function( assert ) {
	let A=['a','b'];
	let B={
		0:'a',
		1:'b',
		length:2
	};
	assert.equal(identical(A,B),false);
});
QUnit.test( "array versus array-like object2", function( assert ) {
	let A=['a','b'];
	let B={};
	[].push.call(B,'a');
	[].push.call(B,'b');
	assert.equal(identical(A,B),false);
});
QUnit.test( "two objects that are the same but created differently", function( assert ) {
	let A={
		0:'a',
		1:'b',
		length:2
	};
	let B={};
	[].push.call(B,'a');
	[].push.call(B,'b');
	assert.equal(identical(A,B),true);
});
QUnit.test( "two objects that are the same", function( assert ) {
	let A={
		0:'a',
		1:'b',
		length:2
	};
	let B={
		0:'a',
		1:'b',
		length:2
	};
	assert.equal(identical(A,B),true);
});
QUnit.test( "two objects that are different", function( assert ) {
	let A={
		0:'c',
		1:'b',
		length:2
	};
	let B={
		0:'a',
		1:'b',
		length:2
	};
	assert.equal(identical(A,B),false);
});
QUnit.test( "circular reference that can be solved", function( assert ) {
	let A={
		0:'a',
		1:'b',
		length:2
	};
	let B={
		0:'a',
		1:'b',
		length:2,
		2:A
	};
	assert.equal(identical(A,B),false);
});
QUnit.test( "circular reference that can be solved", function( assert ) {
	let A={
		0:'a',
		1:'b',
		length:2
	};
	let B={
		0:'a',
		1:A,
		length:2
	};
	assert.equal(identical(A,B),false);
});

QUnit.test( "circular reference that can be solved 2", function( assert ) {
	let A={
		0:'a',
		1:'b',
		length:2
	};
	let B={
		0:'a',
		1:'b',
		length:2,
		2:A
	};
	assert.equal(identical(A,B),false);
});

QUnit.test( "circular reference that can be solved 3", function( assert ) {
	let A={
		0:'a',
		1:'b',
		length:2
	};
	let B={
		0:'a',
		1:'b',
		length:2
	};
	[].push.call(A,A);
	[].push.call(B,A);
	assert.equal(identical(A,B),true);
});

QUnit.test( "circular reference that causes infinite loop", function( assert ) {
	let A={
		0:'a',
		1:'b'
	};
	let B={
		0:'a',
		1:'b'
	};
	[].push.call(A,B);
	[].push.call(B,A);
	let r='no errors yet';
	try{
		identical(A,B);
	}catch(e){
		r=e;
	}
	assert.equal(r,"Error: circular reference detected");
});


QUnit.test( "objects with arrays equal", function( assert ) {
	let A={
		0:'a',
		1:'b',
		2:['a','b']
	};
	let B={
		0:'a',
		1:'b',
		2:['a','b']
	};
	assert.equal(identical(A,B),true);
});

QUnit.test( "objects with arrays unequal", function( assert ) {
	let A={
		0:'a',
		1:'b',
		2:['a','b']
	};
	let B={
		0:'a',
		1:'b',
		2:['a','b','c']
	};
	assert.equal(identical(A,B),false);
});


QUnit.test( "objects with nested arrays equal", function( assert ) {
	let A={
		0:'a',
		1:'b',
		2:['a','b',['a','b',['a','b']]]
	};
	let B={
		0:'a',
		1:'b',
		2:['a','b',['a','b',['a','b']]]
	};
	assert.equal(identical(A,B),true);
});
QUnit.test( "objects with nested arrays unequal", function( assert ) {
	let A={
		0:'a',
		1:'b',
		2:['a','b',['a','b',['a','c']]]
	};
	let B={
		0:'a',
		1:'b',
		2:['a','b',['a','b',['a','b']]]
	};
	assert.equal(identical(A,B),false);
});

QUnit.test( "objects with nested arrays and date equal", function( assert ) {
	let A={
		0:'a',
		1:'b',
		2:['a','b',['a','b',['a','b',new Date(2010,1,1)]]]
	};
	let B={
		0:'a',
		1:'b',
		2:['a','b',['a','b',['a','b',new Date(2010,1,1)]]]
	};
	assert.equal(identical(A,B),true);
});