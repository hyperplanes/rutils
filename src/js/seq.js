const seq_num=(from, by, length_out) =>{
	return Array.apply(0, Array(length_out)).map((x, i)=>from + by * i);
}
const seq_Date_generic=(from, by, length_out, getmethod, setmethod)=>{
	var model = seq_num(from[getmethod](), by, length_out);
	var result = model.map(x=> {
		var dt = new Date(from);
		dt[setmethod](x);
		return dt;
	});
	return result;
}
const calcLengthByMs=(from, to, ms)=> {
	return (to - from) / ms;
}
const methodDictionary = {
	"secs": {
		'multiplier': 1,
		'getMethod': 'getSeconds',
		'setMethod': 'setSeconds',
		'calc_length': (from, to) => calcLengthByMs(from, to, 1000)
	},
	"mins": {
		'multiplier': 1,
		'getMethod': 'getMinutes',
		'setMethod': 'setMinutes',
		'calc_length': (from, to) => calcLengthByMs(from, to, 1000 * 60)
	},
	"hours": {
		'multiplier': 1,
		'getMethod': 'getHours',
		'setMethod': 'setHours',
		'calc_length': (from, to) => calcLengthByMs(from, to, 1000 * 60 * 60)
	},
	"days": {
		'multiplier': 1,
		'getMethod': 'getDate',
		'setMethod': 'setDate',
		'calc_length': (from, to) => calcLengthByMs(from, to, 1000 * 60 * 60 * 24)
	},
	"weeks": {
		'multiplier': 7,
		'getMethod': 'getDate',
		'setMethod': 'setDate',
		'calc_length': (from, to) => calcLengthByMs(from, to, 1000 * 60 * 60 * 24 * 7)
	},
	"months": {
		'multiplier': 1,
		'getMethod': 'getMonth',
		'setMethod': 'setMonth',
		'calc_length': (from, to) => (to.getFullYear() * 12 + to.getMonth()) - (from.getFullYear() * 12 + from.getMonth())
	},
	"quarters": {
		'multiplier': 3,
		'getMethod': 'getMonth',
		'setMethod': 'setMonth',
		'calc_length': (from, to) => (to.getFullYear() * 12 + to.getMonth()) - (from.getFullYear() * 12 + from.getMonth()) / 3
	},
	"years": {
		'multiplier': 1,
		'getMethod': 'getFullYear',
		'setMethod': 'setFullYear',
		'calc_length': (from, to) => to.getFullYear() - from.getFullYear()
	}
}
methodDictionary.sec=methodDictionary.secs;
methodDictionary.min=methodDictionary.mins;
methodDictionary.hour=methodDictionary.hours;
methodDictionary.day=methodDictionary.days;
methodDictionary.week=methodDictionary.weeks;
methodDictionary.month=methodDictionary.months;
methodDictionary.quarter=methodDictionary.quarters;
methodDictionary.year=methodDictionary.years;
const seq_Date_inner = (function () {
	const closure_seq_date=unit => {
		var methods = methodDictionary[unit];
		var getm = methods.getMethod;
		var setm = methods.setMethod;
		var multiplier = methods.multiplier
		return (from, by, length_out) => seq_Date_generic(from, by * multiplier, length_out, getm, setm);
	}
	var output = {};
	for (var unit in methodDictionary) {
		if (methodDictionary.hasOwnProperty(unit)) {
			output[unit] = closure_seq_date(unit);
		}
	}
	return output;
})();
const calculate_length_out=(unit, to, from)=> {
	var fn_calc = methodDictionary[unit].calc_length;
	var length_out = fn_calc(to, from);
	return Math.abs(length_out) + 1;
}
const filter_from_to=(from, to, result) =>{
	return result.filter(x => (from <= x && x <= to) || (from >= x && x >= to));
}
const seq_Date=(from, to, by, length_out)=> {
	var bFrom = from instanceof Date;
	var bTo = to instanceof Date;
	var tBy = typeof by;
	var bBy = tBy === 'number' || tBy === 'string';
	var bLength = typeof length_out === 'number';

	var unit = 'days';
	var quantity = 1;
	if (tBy === 'string') {
		var by2 = by.split(' ');
		unit = by2[by2.length - 1];
		if (!(unit in methodDictionary)) {
			throw "Unit not recognized: " + unit;
		}
		quantity = parseInt(by2[0]);
		if (isNaN(quantity)) {
			quantity = 1;
		}
	} else if (tBy === 'number') {
		quantity = by;
	}

	if ((bFrom && bTo && bBy && !bLength) || (bFrom && bTo && !bBy && !bLength)) {
		length_out = calculate_length_out(unit, to, from);
	} else if (bFrom && bTo && bLength && !bBy) {
		quantity = ((to - from) / (length_out - 1));
	} else if (bLength && bTo && bBy && !bFrom) {
		var dt = new Date(to);
		var methods = methodDictionary[unit];
		var n = quantity * (length_out - 1) * methods.multiplier;
		dt[methods.setMethod](-n);
		from = dt;
	} else if (bLength && bTo && !bBy && !bFrom) {
		quantity = -1 * quantity;
	}
	if (bFrom && bTo && from > to && quantity > 0) {
		quantity = -1 * quantity;
	}
	if (bFrom && bTo) {
		if ((from > to && quantity > 0) || (from < to && quantity < 0)) {
			throw "Argument invalid";
		}
	}

	length_out = Math.ceil(length_out);
	var result = seq_Date_inner[unit](from, quantity, length_out);
	if (bTo) {
		result = filter_from_to(from, to, result);
	}
	return result;
}
const seq_inner=(from, to, by, length_out)=> {
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

const seq2=(from, to, by, length_out, along_with) =>{
	if (along_with instanceof Array) {
		length_out = along_with.length;
	}
	return from instanceof Date || to instanceof Date? seq_Date(from, to, by, length_out):seq_inner(from, to, by, length_out)
}
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