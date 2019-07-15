import {seq_num_primitive} from './seq_num_primitive.js';
export const seq_num=({from,to,by,length_out})=>{
	if((to-from)*by<0){
		throw "wrong sign in by argument";
	}
	if(!from){
		from=to-by*(length_out-1);
	}else if(!to){
		to=from+by*(length_out-1);
	}else if(!by){
		by=(to-from)/(length_out-1);
	}else if(!length_out){
		length_out=((to-from)/by)+1;
	}
	return seq_num_primitive(from,by,length_out);
}