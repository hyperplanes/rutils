const isObject = x=>typeof x === 'object';
const isDateOrPrimitive = x=>x instanceof Date || !isObject(x);
const primitive_unique=(A, B) => {
    let values = A.map(x=>x.valueOf());
    return A.filter((x, i, arr) =>values.indexOf(x.valueOf()) === i);
}
const primitive_intersect=(A, B) => {
    let values = B.map(b=>b.valueOf());
    return primitive_unique(A.filter(a=> values.indexOf(a.valueOf()) >= 0));
}

const shallowObjectComparer=(a, b) => {
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

const primitive_setdiff=(A, B) =>{
    let values = B.map(x=>x.valueOf());
    return primitive_unique(A.filter(a=>values.indexOf(a.valueOf()) < 0));
}

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

export const setdiff=(A, B) => {
    if (A.length === 0 || B.length === 0) {
        return A;
    }
    if (A.every(isDateOrPrimitive) && B.every(isDateOrPrimitive)) {
        return primitive_setdiff(A, B);
    } else if (A.some(x=>x instanceof Array)) {
        throw "setdiff not implemented for Array";
    } else {
        return unique(A.filter(a=>!B.some(b=>shallowObjectComparer(a, b))));
    }
}

export const intersect=(A, B) =>{
    if (A.length === 0 || B.length === 0) {
        return [];
    }

    if (A.every(isDateOrPrimitive) && B.every(isDateOrPrimitive)) {
        return primitive_intersect(A, B);
    } else if (A.some(x=>x instanceof Array)) {
        throw "setdiff not implemented for Array";
    } else {
        return unique(A.filter(a=>B.some(b=>shallowObjectComparer(a, b))));
    }
}

export const union = function () {
    let args = arguments.length > 1 ? arguments : arguments[0];
    return unique([].concat(...args));
};