export const filter_from_to=(from, to, result) =>{
	return result.filter(x => (from <= x && x <= to) || (from >= x && x >= to));
}