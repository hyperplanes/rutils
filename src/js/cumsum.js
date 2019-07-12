export const cumsum=x=>{
	var result = x.reduce((r, a)=> {
		if (r.length > 0) {
			a += r[r.length - 1];
		}
		r.push(a);
		return r;
	}, []);
	return result;
}