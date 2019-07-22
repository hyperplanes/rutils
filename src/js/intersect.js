import {unique} from './unique.js';
import {identical} from './identical.js';
import {processSequence} from './processSequence.js'

export const intersect=(A, B) =>{
    if (A.length === 0 || B.length === 0) {
        return [];
    }
    A=A.filter(x=>x!==null && x!==undefined);
    B=B.filter(x=>x!==null && x!==undefined);
    let indexOfBinA=B.map(b=>A.findIndex(a=>identical(a,b))).filter(x=>x>=0);
    return unique(A.filter((a,i)=>indexOfBinA.indexOf(i)>=0));
}