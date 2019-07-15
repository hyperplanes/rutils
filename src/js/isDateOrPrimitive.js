import {isObject} from './isObject.js';
export const isDateOrPrimitive = x=>x instanceof Date || !isObject(x);