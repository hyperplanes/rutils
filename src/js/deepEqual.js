import {isObject} from './isObject.js';
export const deepEqual = (A, B,state) =>{
    if (A === B) {
        return true;
    } else if (A instanceof Date && B instanceof Date) {
        return A.valueOf() === B.valueOf();
    } else if(isObject(A) && isObject(B)){
        if(!state){
            state={
                seen:[]//guard against infinite loops
            };
        }
        state.seen.push(A);
        state.seen.push(B);
        let Akeys=Object.keys(A).sort();
        let Bkeys=Object.keys(B).sort();
        if(Akeys.length!==Bkeys.length){
            return false;
        }
        for(let i=Akeys.length;i>=0;i--){
            if(Akeys[i]!==Bkeys[i]){
                return false;
            }
        }
        for(let i=Akeys.length;i>=0;i--){
            let a=A[Akeys[i]];
            let b=B[Bkeys[i]];
            if(a!==b){//if same object, no need to test their properties
                if(state.seen.indexOf(a)>=0 && state.seen.indexOf(b)>=0){//if it's an infinite loop, guaranteed to see both come up more than once
                    throw "Error: circular reference detected";
                }
                if(!deepEqual(a,b,state)){
                    return false;
                }
            }
        }
        return true;
    }
    //at this point, we know it is not a nested object we can deep-compare, and A!==B
    return false;
}