import {primitive_unique} from './primitive_unique.js';
import {shallowObjectComparer} from './shallowObjectComparer.js';
import {isDateOrPrimitive} from './isDateOrPrimitive.js';
import {isObject} from './isObject.js';

export const unique = A => {
    if (A.length === 0) {
        return A;
    }
    if (A.every(isDateOrPrimitive)) {
        return primitive_unique(A);
    } else if (A.some(x=>x instanceof Array)) {
        throw "unique not implemented for Array";
    } else if (A.every(isObject)) {
        let stored = [];
        A.forEach(x=> {
            if (!stored.some(s=>shallowObjectComparer(s, x))) {
                stored.push(x);
            }
        });
        return stored;
    }
    throw "unique did not recognize object type";
}