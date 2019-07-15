import {seq_num_primitive} from './seq_num_primitive.js';
import {DateMethods} from './DateMethods.js';
export const seq_date_primitive=(from, by_unit,by_multiplier, length_out) =>{
	let {get,set}=DateMethods[by_unit];
	return seq_num_primitive(0,by_multiplier,length_out).map(i=>{
		let date=new Date(from);
		date[set](date[get]()+i);
		return date;
	});
}