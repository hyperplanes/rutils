export const min=(...rest)=>{
	let args=[].concat(...rest);
	let vals=args.map(x=>x.valueOf());
	let maxval=Math.min(...vals);
	let index=vals.indexOf(maxval);
	return args[index];
}