import {cartesian} from "../src/js/cartesian.js";

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

QUnit.test( "cartesian flatened arrays", function( assert ) {
	let A=[[1,2],[3,4]];
	let B=[
		['a','b'],
		['c','d']
		];
	let result=cartesian(A,B);
	assert.deepEqual(result,[
		[1,2,'a','b'],
		[1,2,'c','d'],
		[3,4,'a','b'],
		[3,4,'c','d']
		]);
});
QUnit.test( "cartesian single element array", function( assert ) {
	let A=[0];
	let B=['a'];
	let result=cartesian(A,B);
	assert.deepEqual(result,[
		[0,'a']
		]);
});

//Should arrays be flattened or not?
// let A=[[1, 2], 3];
// let B=[['a', 'b'],['c', 'd']];
// let AxB=[
// 	[[1, 2],['a', 'b']],
// 	[[1, 2],['c', 'd']],
// 	[3,['a', 'b']],
// 	[3,['c', 'd']]
// ];
// let BxA = [
// 	[['a', 'b'], [1, 2]],
// 	[['a', 'b'], 3],
// 	[['c', 'd'], [1, 2]],
// 	[['c', 'd'], 3]
// ];
