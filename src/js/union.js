import {unique} from './unique.js';
export const union = function () {
    let args = arguments.length > 1 ? arguments : arguments[0];
    return unique([].concat(...args));
};