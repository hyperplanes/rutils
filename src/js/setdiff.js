import {unique} from './unique.js';
import {primitive_unique} from './primitive_unique.js';
import {isDateOrPrimitive} from './isDateOrPrimitive.js';
import {identical} from './identical.js';

const primitive_setdiff=(A, B) =>{
    let values = B.map(x=>x.valueOf());
    return primitive_unique(A.filter(a=>values.indexOf(a.valueOf()) < 0));
}

export const setdiff=(A, B) => {
    if (A.length === 0 || B.length === 0) {
        return A;
    }
    if (A.every(isDateOrPrimitive) && B.every(isDateOrPrimitive)) {
        return primitive_setdiff(A, B);
    } else if (A.some(x=>x instanceof Array)) {
        throw "setdiff not implemented for Array";
    } else {
        return unique(A.filter(a=>!B.some(b=>identical(a, b))));
    }
}