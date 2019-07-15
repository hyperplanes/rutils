export const seq_num_primitive=(from, by, length_out) =>{
	return Array.apply(0, Array(length_out)).map((x, i)=>from + by * i);
}