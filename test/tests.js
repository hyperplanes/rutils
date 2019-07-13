({seq,cartesian}=rutils);
const A=[1,2,3,4,5];
const B=[1,3,5,7,9];

const cartesianExpected=[
[1,1],
[1,2],
[1,3],
[1,4],
[1,5],
[3,1],
[3,2],
[3,3],
[3,4],
[3,5],
[5,1],
[5,2],
[5,3],
[5,4],
[5,5],
[7,1],
[7,2],
[7,3],
[7,4],
[7,5],
[9,1],
[9,2],
[9,3],
[9,4],
[9,5]
];
QUnit.test( "cartesian", function( assert ) {
	let result=cartesian(B,A);
	assert.deepEqual(result,cartesianExpected);
});
QUnit.test( "seq1", function( assert ) {
	let result=seq({from:1,to:5,by:1});
	assert.deepEqual(result,A);
});
QUnit.test( "seq2", function( assert ) {
	let result=seq({from:1,by:1,length_out:5});
	assert.deepEqual(result,A);
});
QUnit.test( "seq3", function( assert ) {
	let result=seq({from:5,to:1,by:-1});
	assert.deepEqual(result,[5,4,3,2,1]);
});
QUnit.test( "seq4", function( assert ) {
	let result=seq({to:1,by:-1,length_out:5});
	assert.deepEqual(result,[5,4,3,2,1]);
});


QUnit.test( "seqDateYears", function( assert ) {
	let result=seq({from:new Date('2010-01-01'),to:new Date('2015-01-01'),by:"years"});
	assert.deepEqual(result,[
		new Date('2010-01-01'),
		new Date('2011-01-01'),
		new Date('2012-01-01'),
		new Date('2013-01-01'),
		new Date('2014-01-01'),
		new Date('2015-01-01')
		]);
});
QUnit.test( "seqDateMonths", function( assert ) {
	let result=seq({from:new Date('2010-01-01'),to:new Date('2010-05-01'),by:"months"});
	console.log(result);
	assert.deepEqual(result,[
		new Date('2010-01-01'),
		new Date('2010-02-01'),
		new Date('2010-03-01'),
		new Date('2010-04-01'),
		new Date('2010-05-01')
		]);
});
QUnit.test( "seqDateDays", function( assert ) {
	let result=seq({from:new Date('2010-01-01'),to:new Date('2010-01-05'),by:"days"});
	console.log(result);
	assert.deepEqual(result,[
		new Date('2010-01-01'),
		new Date('2010-01-02'),
		new Date('2010-01-03'),
		new Date('2010-01-04'),
		new Date('2010-01-05')
		]);
});
QUnit.test( "seqDateHours", function( assert ) {
	let result=seq({from:new Date('2010-01-01'),to:new Date('2010-01-01T04:00:00'),by:"hours"});
	console.log(result);
	assert.deepEqual(result,[
		new Date('2010-01-01T00:00:00'),
		new Date('2010-02-01T01:00:00'),
		new Date('2010-03-01T02:00:00'),
		new Date('2010-04-01T03:00:00'),
		new Date('2010-05-01T04:00:00')
		]);
});
QUnit.test( "seqDateMins", function( assert ) {
	let result=seq({from:new Date('2010-01-01'),to:new Date('2010-01-01T00:04:00'),by:"mins"});
	console.log(result);
	assert.deepEqual(result,[
		new Date('2010-01-01T00:00:00'),
		new Date('2010-02-01T00:01:00'),
		new Date('2010-03-01T00:02:00'),
		new Date('2010-04-01T00:03:00'),
		new Date('2010-05-01T00:04:00')
		]);
});