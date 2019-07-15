import {standardize_date_units} from './standardize_date_units.js';
export const calculate_date_by=by=>{
	let byparts=by.split(' ');
	let by_multiplier=byparts.length>1?parseInt(byparts[0]):1;
	let by_unit=standardize_date_units(byparts[(byparts.length>1?1:0)]);
	if(by_unit==='weeks'){
		by_unit='days';
		by_multiplier=by_multiplier*7;
	}
	return ({
		by_unit:by_unit,
		by_multiplier:by_multiplier
	});
}