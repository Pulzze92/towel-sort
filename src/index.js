
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let arr = [];
	if (arguments.length == 0) {
		return arr;
	} else {
		return matrix.reduce(accumulator, element, i) =>
			return accumulator.concat((i % 2 !== 0) ? element : element.reverse());
	}
}
