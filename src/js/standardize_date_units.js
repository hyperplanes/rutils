import {DateMethods} from './DateMethods.js';
export const standardize_date_units=unit=>{
	const options=Object.keys(DateMethods);
	options.push('weeks');
	let reg=new RegExp(unit.toLowerCase().trim(),'gi');
	return options.filter(x=>reg.test(x))[0];
}