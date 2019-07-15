import {seq_num_primitive} from '../src/js/seq_num_primitive.js';
import {seq_num} from '../src/js/seq_num.js';
import {seq} from '../src/js/seq.js';
import {seq_date} from '../src/js/seq_date.js';
import {standardize_date_units} from '../src/js/standardize_date_units.js';
import {calculate_date_by} from '../src/js/calculate_date_by.js';
import {DateMethods} from '../src/js/DateMethods.js';
import {seq_date_primitive} from '../src/js/seq_date_primitive.js';

QUnit.test( "seq date", function( assert ) {
	let result=seq_date({from:new Date(2010,1,1),by:"3 months",length_out:3});
	let expected=[
	new Date(2010,1,1),
	new Date(2010,4,1),
	new Date(2010,7,1)
	];
	assert.deepEqual(result,expected);
});
QUnit.test( "seq date along_with", function( assert ) {
	let result=seq({from:new Date(2010,1,1),by:"3 months",along_with:[1,2,3]});
	let expected=[
	new Date(2010,1,1),
	new Date(2010,4,1),
	new Date(2010,7,1)
	];
	assert.deepEqual(result,expected);
});
QUnit.test( "seq", function( assert ) {
	let result=seq({from:1,by:3,length_out:3});
	let expected=[1,4,7];
	assert.deepEqual(result,expected);
});
QUnit.test( "seq along_with", function( assert ) {
	let result=seq({from:1,by:3,along_with:[1,2,3]});
	let expected=[1,4,7];
	assert.deepEqual(result,expected);
});
QUnit.test( "seq single integer", function( assert ) {
	let result=seq(3);
	let expected=[1,2,3];
	assert.deepEqual(result,expected);
});
QUnit.test( "seq_date, missing to", function( assert ) {
	let result=seq_date({from:new Date(2010,1,1),by:"3 months",length_out:3});
	let expected=[
	new Date(2010,1,1),
	new Date(2010,4,1),
	new Date(2010,7,1)
	];
	assert.deepEqual(result,expected);
});
QUnit.test( "seq_date, missing from", function( assert ) {
	let result=seq_date({to:new Date(2010,7,1),by:"3 months",length_out:3});
	let expected=[
	new Date(2010,1,1),
	new Date(2010,4,1),
	new Date(2010,7,1)
	];
	assert.deepEqual(result,expected);
});
QUnit.test( "seq_date, missing length_out", function( assert ) {
	let result=seq_date({from:new Date(2010,1,1),to:new Date(2010,7,1),by:"3 months"});
	let expected=[
	new Date(2010,1,1),
	new Date(2010,4,1),
	new Date(2010,7,1)
	];
	assert.deepEqual(result,expected);
});

//subtraction
QUnit.test( "seq_date, missing to,negative by", function( assert ) {
	let result=seq_date({from:new Date(2010,1,1),by:"-3 months",length_out:3});
	let expected=[
	new Date(2010,1,1),
	new Date(2009,10,1),
	new Date(2009,7,1)
	];
	assert.deepEqual(result,expected);
});
QUnit.test( "seq_date, missing from,negative by", function( assert ) {
	let result=seq_date({to:new Date(2010,7,1),by:"-3 months",length_out:3});
	let expected=[
	new Date(2011,1,1),
	new Date(2010,10,1),
	new Date(2010,7,1)
	];
	assert.deepEqual(result,expected);
});

QUnit.test( "seq_date, wrong sign in By", function( assert ) {
	try{
		let result=seq_date({from:new Date(2010,1,1),to:new Date(2010,7,1),by:"-3 months"});
	}catch(e){
		assert.equal(e,"wrong sign in by argument");
	}
});
QUnit.test( "seq_date, missing length_out reverse,negative by", function( assert ) {
	let result=seq_date({to:new Date(2010,1,1),from:new Date(2010,7,1),by:"-3 months"});
	let expected=[
	new Date(2010,7,1),
	new Date(2010,4,1),
	new Date(2010,1,1)
	];
	assert.deepEqual(result,expected);
});
//end subtraction


QUnit.test( "DateMethods", function( assert ) {
	let dt=new Date();
	let options=['years','months','days','hours','mins','secs'];
	options.forEach(option=>{
		let methods=DateMethods[option];
		assert.ok(typeof dt[methods.get]==='function');
		assert.ok(typeof dt[methods.set]==='function');
	});
});

QUnit.test( "standardize_date_units", function( assert ) {
	let result=standardize_date_units("week");
	assert.equal(result,"weeks");
});
QUnit.test( "calculate_date_by", function( assert ) {
	let by="3 week";
	let result=calculate_date_by(by);
	let { by_unit, by_multiplier }=result;
	assert.equal(by_unit,'days');
	assert.equal(by_multiplier,21);
});

QUnit.test( "calculate_date_by not numeric", function( assert ) {
	let result=calculate_date_by("week");
	assert.deepEqual(result,{
		by_unit:'days',
		by_multiplier:7
	});
});


QUnit.test( "seq_date missing by", function( assert ) {
	let result=seq_date({from:new Date(2010,1,1),to:new Date(2010,1,1,1),length_out:7});
	assert.deepEqual(result,[
		new Date(2010,1,1),
		new Date(2010,1,1,0,10),
		new Date(2010,1,1,0,20),
		new Date(2010,1,1,0,30),
		new Date(2010,1,1,0,40),
		new Date(2010,1,1,0,50),
		new Date(2010,1,1,1),
		]);
});
QUnit.test( "seq_num missing to", function( assert ) {
	let result=seq_num({from:-3.5,by:3,length_out:4});
	assert.deepEqual(result,[-3.5,-0.5,2.5,5.5]);
});
QUnit.test( "seq_num missing from", function( assert ) {
	let result=seq_num({to:5.5,by:3,length_out:4});
	assert.deepEqual(result,[-3.5,-0.5,2.5,5.5]);
});
QUnit.test( "seq_num missing by", function( assert ) {
	let result=seq_num({from:-3.5,to:5.5,length_out:4});
	assert.deepEqual(result,[-3.5,-0.5,2.5,5.5]);
});
QUnit.test( "seq_num missing length_out", function( assert ) {
	let result=seq_num({from:-3.5,to:5.5,by:3});
	assert.deepEqual(result,[-3.5,-0.5,2.5,5.5]);
});
QUnit.test( "seq_num missing length_out wrong sign in by", function( assert ) {
	try{
		let result=seq_num({from:-3.5,to:5.5,by:-3});
	}catch(e){
		assert.deepEqual(e,"wrong sign in by argument");
	}
});
QUnit.test( "numeric seq missing to", function( assert ) {
	let result=seq({from:-3.5,by:3,length_out:4});
	assert.deepEqual(result,[-3.5,-0.5,2.5,5.5]);
});
QUnit.test( "numeric seq missing from", function( assert ) {
	let result=seq({to:5.5,by:3,length_out:4});
	assert.deepEqual(result,[-3.5,-0.5,2.5,5.5]);
});
QUnit.test( "numeric seq missing by", function( assert ) {
	let result=seq({from:-3.5,to:5.5,length_out:4});
	assert.deepEqual(result,[-3.5,-0.5,2.5,5.5]);
});
QUnit.test( "numeric seq missing length_out", function( assert ) {
	let result=seq({from:-3.5,to:5.5,by:3});
	assert.deepEqual(result,[-3.5,-0.5,2.5,5.5]);
});
QUnit.test( "numeric seq, along_with instead of length_out", function( assert ) {
	let result=seq({from:-3.5,by:3,along_with:[1,2,3,4]});
	assert.deepEqual(result,[-3.5,-0.5,2.5,5.5]);
});

QUnit.test( "seq_num_primitive", function( assert ) {
	let result=seq_num_primitive(-3.5,3,4);
	assert.deepEqual(result,[-3.5,-0.5,2.5,5.5]);
});
QUnit.test( "backwards seq_num_primitive", function( assert ) {
	let result=seq_num_primitive(3,-3,4);
	assert.deepEqual(result,[3,0,-3,-6]);
});

QUnit.test( "seq_date_primitive years", function( assert ) {
	let result=seq_date_primitive(new Date(2010,1,1),"years",1,5);
	assert.deepEqual(result,[
		new Date(2010,1,1),
		new Date(2011,1,1),
		new Date(2012,1,1),
		new Date(2013,1,1),
		new Date(2014,1,1)
		]);
});
QUnit.test( "seq_date_primitive months", function( assert ) {
	let result=seq_date_primitive(new Date(2010,1,1),"months",2,5);
	assert.deepEqual(result,[
		new Date(2010,1,1),
		new Date(2010,3,1),
		new Date(2010,5,1),
		new Date(2010,7,1),
		new Date(2010,9,1)
		]);
});
QUnit.test( "seq_date_primitive days", function( assert ) {
	let result=seq_date_primitive(new Date(2010,1,1),"days",1,5);
	assert.deepEqual(result,[
		new Date(2010,1,1),
		new Date(2010,1,2),
		new Date(2010,1,3),
		new Date(2010,1,4),
		new Date(2010,1,5)
		]);
});
QUnit.test( "seq_date_primitive hours", function( assert ) {
	let result=seq_date_primitive(new Date(2010,1,1),"hours",3,5);
	assert.deepEqual(result,[
		new Date(2010,1,1,0),
		new Date(2010,1,1,3),
		new Date(2010,1,1,6),
		new Date(2010,1,1,9),
		new Date(2010,1,1,12)
		]);
});
QUnit.test( "seq_date_primitive minutes", function( assert ) {
	let result=seq_date_primitive(new Date(2010,1,1),"mins",3,5);
	assert.deepEqual(result,[
		new Date(2010,1,1,0,0),
		new Date(2010,1,1,0,3),
		new Date(2010,1,1,0,6),
		new Date(2010,1,1,0,9),
		new Date(2010,1,1,0,12)
		]);
});
QUnit.test( "seq_date_primitive seconds", function( assert ) {
	let result=seq_date_primitive(new Date(2010,1,1),"secs",3,5);
	assert.deepEqual(result,[
		new Date(2010,1,1,0,0,0),
		new Date(2010,1,1,0,0,3),
		new Date(2010,1,1,0,0,6),
		new Date(2010,1,1,0,0,9),
		new Date(2010,1,1,0,0,12)
		]);
});
QUnit.test( "backwards seq_date_primitive years", function( assert ) {
	let result=seq_date_primitive(new Date(2010,1,1),"years",-1,5);
	assert.deepEqual(result,[
		new Date(2010,1,1),
		new Date(2009,1,1),
		new Date(2008,1,1),
		new Date(2007,1,1),
		new Date(2006,1,1)
		]);
});
QUnit.test( "backwards seq_date_primitive months", function( assert ) {
	let result=seq_date_primitive(new Date(2010,1,1),"months",-2,5);
	assert.deepEqual(result,[
		new Date(2010,1,1),
		new Date(2009,11,1),
		new Date(2009,9,1),
		new Date(2009,7,1),
		new Date(2009,5,1)
		]);
});
QUnit.test( "backwards seq_date_primitive days", function( assert ) {
	let result=seq_date_primitive(new Date(2010,1,1),"days",-1,5);
	assert.deepEqual(result,[
		new Date(2010,1,1),
		new Date(2009,12,31),
		new Date(2009,12,30),
		new Date(2009,12,29),
		new Date(2009,12,28)
		]);
});
QUnit.test( "backwards seq_date_primitive hours", function( assert ) {
	let result=seq_date_primitive(new Date(2010,1,1),"hours",-3,5);
	assert.deepEqual(result,[
		new Date(2010,1,1,0),
		new Date(2009,12,31,21),
		new Date(2009,12,31,18),
		new Date(2009,12,31,15),
		new Date(2009,12,31,12)
		]);
});
QUnit.test( "backwards seq_date_primitive minutes", function( assert ) {
	let result=seq_date_primitive(new Date(2010,1,1),"mins",-3,5);
	assert.deepEqual(result,[
		new Date(2010,1,1,0,0),
		new Date(2009,12,31,23,57),
		new Date(2009,12,31,23,54),
		new Date(2009,12,31,23,51),
		new Date(2009,12,31,23,48)
		]);
});
QUnit.test( "backwards seq_date_primitive seconds", function( assert ) {
	let result=seq_date_primitive(new Date(2010,1,1),"secs",-3,5);
	assert.deepEqual(result,[
		new Date(2010,1,1,0,0,0),
		new Date(2009,12,31,23,59,57),
		new Date(2009,12,31,23,59,54),
		new Date(2009,12,31,23,59,51),
		new Date(2009,12,31,23,59,48)
		]);
});