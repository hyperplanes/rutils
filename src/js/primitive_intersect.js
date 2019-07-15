import {primitive_unique} from './primitive_unique.js';

export const primitive_intersect=(A, B) => {
    let values = B.map(b=>b.valueOf());
    return primitive_unique(A.filter(a=> values.indexOf(a.valueOf()) >= 0));
}