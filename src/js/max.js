export const max=(...rest)=>{
	let args=[].concat(...rest);
	let vals=args.map(x=>x.valueOf());
	let maxval=Math.max(...vals);
	let index=vals.indexOf(maxval);
	return args[index];
}