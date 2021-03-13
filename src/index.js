
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let newArr = [];
	if (!matrix) {return [];} else {
		let quant = matrix.length;
		let arr = matrix.toString();
	for(let i = 0; i < quant; i++) {
	(i % 2 === 0) ? newArr = newArr.concat(matrix[i]) : newArr = newArr.concat(matrix[i].reverse());
	//newArr.push(matrix[i]);
	//newArr.push(matrix[i].reverse());
	}
}
	return newArr;
	} 
