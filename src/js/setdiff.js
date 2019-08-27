import {unique} from './unique.js';
import {primitive_unique} from './primitive_unique.js';
import {identical} from './identical.js';
import {processSequence} from './processSequence.js'

const actuallyNaN=x=>typeof x==='number' && isNaN(x);
const primitive_setdiff=(A, B) =>{
    A=processSequence(A,false);
    B=processSequence(B);
    let result=A.sequence.filter(a=>B.values.indexOf(a.valueOf()) < 0);
    if(B.indexOfNaN>=0 && A.indexOfNaN>=0){
        result=result.filter(x=>!actuallyNaN(x));
    }
    return result;
}
const isNonDateObject=x=>typeof x==='object' && !(x instanceof Date);
export const setdiff=(A, B) => {
    if (A.length === 0 || B.length === 0) {
        return unique(A);
    }
    let result=unique(primitive_setdiff(A,B));

    //now need to deal with objects that weren't removed because indexOf doesn't do deepEquals
    //if any of these objects are deepEqual to any object in B, remove it from result
    let objectsInA=result.filter(isNonDateObject);
    let objectsInB=B.filter(isNonDateObject);
    let objectsInAThatAreAlsoInB=objectsInA.filter(x=>objectsInB.some(b=>identical(x,b)));
    objectsInAThatAreAlsoInB.forEach(x=>{
        let i=result.indexOf(x);
        result.splice(i,1);
    });
    return result;
}