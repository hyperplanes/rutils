import {filter_from_to} from './filter_from_to.js';
import {seq_num} from './seq_num.js';
export const seq_inner=(from, to, by, length_out)=> {
	var bFrom = typeof from === 'number';
	var bTo = typeof to === 'number';
	var bBy = typeof by === 'number';
	var bLength = typeof length_out === 'number';
	if (bFrom && bTo && bLength && !bBy) {
		by = ((to - from) / (length_out - 1));
	} else if (bFrom && bTo && bBy) {
		length_out = Math.abs(to - from) / by + 1;
	} else if (bTo && bBy && bLength && !bFrom) {
		from = to - by * (length_out - 1);
	} else if (bFrom && bLength && !bBy && !bTo) {
		by = 1;
	} else if (bTo && bLength && !bBy && !bFrom) {
		by = -1;
	} else if (bFrom && bTo && !bBy && !bLength) {
		by = from < to ? 1 : -1;
	} else if (!bFrom && !bTo && bBy && bLength) {
		from = 1;
		to = bLength;
	} else if (!bFrom && !bTo && !bBy && bLength) {
		from = 1;
		to = bLength;
		by = 1;
	}
	length_out = Math.ceil(length_out);
	var result = seq_num(from, by, length_out);
	if (bTo) {
		result = filter_from_to(from, to, result);
	}
	return result;
}