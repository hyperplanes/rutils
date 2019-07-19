import {processSequence} from './processSequence.js';

export const primitive_unique=A => {
	//R does not allow nulls in sequences, plus null.valueOf() is undefined. Use NaN instead
	A=processSequence(A);
    let result=A.sequence.filter((x, i, arr) =>A.values.indexOf(x.valueOf()) === i);
    if(A.indexOfNaN>=0){
    	result.splice(A.indexOfNaN, 0, NaN);
    }
    return result;
}