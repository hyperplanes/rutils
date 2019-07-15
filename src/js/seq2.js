import {seq_Date} from './seq_Date.js';
import {seq_inner} from './seq_inner.js';

export const seq2=(from, to, by, length_out, along_with) =>{
	if (along_with instanceof Array) {
		length_out = along_with.length;
	}
	return from instanceof Date || to instanceof Date? seq_Date(from, to, by, length_out):seq_inner(from, to, by, length_out)
}