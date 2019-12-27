export const diff=(x,args={})=>{
	if(!('lag' in args)){
		args.lag=1;
	}
	if(!('differences' in args)){
		args.differences=1;
	}
	let {lag,differences}=args;

	if (lag < 1|| differences < 1){
		throw "lag and differences must be greater than or equal to 1";
	}
	let laggedvar,regularvar;
	for(let i=1;i<=differences;i++){
		laggedvar=x.slice(0,x.length-lag);
		regularvar=x.slice(lag);
		x =regularvar.map((r,j)=>r-laggedvar[j]);
	}
	return x;
}