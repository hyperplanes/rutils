import {seq_num_primitive} from './seq_num_primitive.js';
import {DateMethods} from './DateMethods.js';
import {calculate_date_by} from './calculate_date_by.js';
import {seq_date_primitive} from './seq_date_primitive.js';

export const seq_date=({from,to,by,length_out})=>{
	if(!by){
		//this can be done numerically:
		by=(Number(to)-Number(from))/(length_out-1);
		return seq_num_primitive(Number(from),by,length_out).map(x=>new Date(x));
	}else{
		let {by_unit,by_multiplier}=calculate_date_by(by);
		if(!from){
			return seq_date_primitive(to,by_unit,-1*by_multiplier,length_out).reverse();
		}else if(!to){
			return seq_date_primitive(from,by_unit,by_multiplier,length_out);
		}else{
			let {get,set}=DateMethods[by_unit];
			let shouldReverse=by_multiplier<0;
			let start=shouldReverse?to:from;
			let end=shouldReverse?from:to;
			let by_n=shouldReverse?-1*by_multiplier:by_multiplier;
			if(start>end){
				throw "wrong sign in by argument";
			}


			let current=new Date(start);
			let output=[];
			while(current<=end){
				output.push(current);
				current=new Date(current);

				current[set](current[get]()+by_n);
			}
			return shouldReverse?output.reverse():output;
		}
	}
}