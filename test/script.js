({cumsum,seq}=rutils);

const a=[2,4,6,8];
let result=cumsum(a);
console.log(result);

const testSeqNum=seq({from:1,to:10,by:2});
console.log(testSeqNum);

console.log(seq({
	from:new Date('2010-01-01'),
	to:new Date('2020-01-01'),
	by:'month'
}));
