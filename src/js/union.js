import {unique} from './unique.js';
export const union = (...A) => unique([].concat(...A));