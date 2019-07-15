import {seq2} from './seq2.js';
export const seq=args=>{
	if (typeof args === 'number') {
		return seq2(1, args, 1);
	}
	var from = args['from'];
	var to = args['to'];
	var by = args['by'];
	var length_out = args['length_out'];
	var along_with = args['along_with'];
	return seq2(from, to, by, length_out, along_with);
}