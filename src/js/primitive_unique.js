export const primitive_unique=(A, B) => {
    let values = A.map(x=>x.valueOf());
    return A.filter((x, i, arr) =>values.indexOf(x.valueOf()) === i);
}