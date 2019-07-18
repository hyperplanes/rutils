import {primitive_intersect} from './primitive_intersect.js';
import {unique} from './unique.js';
import {deepEqual} from './deepEqual.js';
import {isDateOrPrimitive} from './isDateOrPrimitive.js';

export const intersect=(A, B) =>{
    if (A.length === 0 || B.length === 0) {
        return [];
    }

    if (A.every(isDateOrPrimitive) && B.every(isDateOrPrimitive)) {
        return primitive_intersect(A, B);
    } else if (A.some(x=>x instanceof Array)) {
        throw "setdiff not implemented for Array";
    } else {
        return unique(A.filter(a=>B.some(b=>deepEqual(a, b))));
    }
}