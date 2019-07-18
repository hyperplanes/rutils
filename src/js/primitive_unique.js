export const primitive_unique=A => {
	//R does not allow nulls in sequences, plus null.valueOf() is undefined. Use NaN instead
	A=A.filter(x=>x!==null && x!==undefined); 
	let indexOfNaN=A.findIndex(x=>typeof x==='number' && isNaN(x));
    let values = A.map(x=>x.valueOf());
    let result=A.filter((x, i, arr) =>values.indexOf(x.valueOf()) === i);
    if(indexOfNaN>=0){
    	result.splice(indexOfNaN, 0, NaN);
    }
    return result;
}