import {filter_from_to} from "../src/js/filter_from_to.js";
import {seq_num} from '../src/js/seq_num.js';
const A=[1,2,3,4,5,6,7,8,9,10];
const B=[
	new Date('2010-01-01'),
	new Date('2010-01-02'),
	new Date('2010-01-03'),
	new Date('2010-01-04'),
	new Date('2010-01-05'),
	new Date('2010-01-06'),
	new Date('2010-01-07'),
	new Date('2010-01-08'),
	new Date('2010-01-09'),
	new Date('2010-01-10'),
];

QUnit.test( "filter_from_to numeric", function( assert ) {
	let result=filter_from_to(2,4,A);
	assert.deepEqual(result,[2,3,4]);
});
QUnit.test( "filter_from_to date", function( assert ) {
	let result=filter_from_to(new Date('2010-01-03'),new Date('2010-01-08'),B);
	assert.deepEqual(result,[
		new Date('2010-01-03'),
		new Date('2010-01-04'),
		new Date('2010-01-05'),
		new Date('2010-01-06'),
		new Date('2010-01-07'),
		new Date('2010-01-08')
	]);
});
QUnit.test( "filter_from_to backwards numeric", function( assert ) {
	let result=filter_from_to(4,2,A);
	assert.deepEqual(result,[2,3,4]);
});
QUnit.test( "filter_from_to backwards date", function( assert ) {
	let result=filter_from_to(new Date('2010-01-08'),new Date('2010-01-03'),B);
	assert.deepEqual(result,[
		new Date('2010-01-03'),
		new Date('2010-01-04'),
		new Date('2010-01-05'),
		new Date('2010-01-06'),
		new Date('2010-01-07'),
		new Date('2010-01-08')
	]);
});

QUnit.test( "seq_num", function( assert ) {
	let result=seq_num(-3,3,4);
	assert.deepEqual(result,[-3,0,3,6]);
});

QUnit.test( "backwards seq_num", function( assert ) {
	let result=seq_num(3,-3,4);
	assert.deepEqual(result,[3,0,-3,-6]);
});