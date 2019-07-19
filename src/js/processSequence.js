export const processSequence = (A,includeValues) => {
    let s=A.filter(x=>x!==null && x!==undefined);
    if(typeof includeValues==='undefined'){
        includeValues=true;
    }
    return ({
        sequence:s,
        indexOfNaN:s.findIndex(x=>typeof x==='number' && isNaN(x)),
        values:includeValues?s.map(x=>x.valueOf()):undefined
    });
}