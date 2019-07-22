import {primitive_unique} from './primitive_unique.js';
import {identical} from './identical.js';

export const unique = A => {
    if (A.length === 0) {
        return A;
    }
    let result=primitive_unique(A);
    let objects=result.filter(x=>typeof x==='object' && !(x instanceof Date));
    let uniqueObjects=[];
    let duplicateObjects=[];
    let oN=objects.length;
    for (var i = 0; i < oN; i++) {//order matters, want to keep only first instance
        let x=objects[i];
        if(uniqueObjects.some(y=>identical(x,y))){
            duplicateObjects.push(x);
        }else{
            uniqueObjects.push(x);
        }
    }
    duplicateObjects.forEach(x=>{
        result.splice(result.indexOf(x),1);
    });
    return result;
}