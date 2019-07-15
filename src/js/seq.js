import {seq_num} from './seq_num.js';
import {seq_date} from './seq_date.js';

export const seq=(args)=>{
	if(typeof args==='number'){
		return seq_num({from:1,by:1,length_out:args});
	}
	if(args.along_with){
		args.length_out=args.along_with.length;
	}
	return args.from instanceof Date || args.to instanceof Date?seq_date(args):seq_num(args);
}