import {isDateOrPrimitive} from './isDateOrPrimitive.js';
import {isObject} from './isObject.js';
import {primitive_intersect} from './primitive_intersect.js';

export const shallowObjectComparer=(a, b) => {
    let aIsVal = isDateOrPrimitive(a);
    let bIsVal = isDateOrPrimitive(b);
    if (aIsVal && bIsVal) {
        return a.valueOf() === b.valueOf();
    } else if (aIsVal || bIsVal) {
        return false;
    } else if (!(isObject(a) && isObject(b))) {
        throw "Cannot compare";
    }
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    let keys = primitive_intersect(aKeys, bKeys);

    if (!(aKeys.length === keys.length && bKeys.length === keys.length)) {
        return false;
    }
    return keys.every(k=> {
        let x = a[k];
        let y = b[k]
        if (!(isDateOrPrimitive(x) && isDateOrPrimitive(y))) {
            throw "Deep object comparison not implemented";
        }
        return x.valueOf() === y.valueOf();
    });
}