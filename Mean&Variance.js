var list = [1,2,3,4];

/*function getMeanForVariance ( list ){
	return list.reduce(function ( cumulative, current ) { return cumulative + current }) / list.length
}

function getMean ( sum, value, index, input ) {
	if(index < input.length-1) return sum + value;
	else return (sum + value) / input.length;
}

function getVariance ( sum, next, index, input, mean ) {
	if(index < input.length-1)  return sum + ((next - mean) * (next - mean));
	else return Math.sqrt((sum + ((next - mean) * (next - mean))) / input.length);	
}

function getMeanVariance ( input ) {

	var mean = getMeanForVariance ( input );

	return input.reduce(function ( obj, next , i ) {
 		return { mean : getMean(obj.mean, next, i, input) , variance : getVariance(obj.variance, next, i, input, mean)  };
	}, {mean : 0 , variance : 0});

}*/

function getMean ( list ){
	return list.reduce(function ( cumulative, current ) { return cumulative + current }) / list.length
}

function getVariance ( list, mean ){
	return Math.sqrt((list.reduce( function ( cumulative, current ) { return cumulative + ((current - mean) * (current - mean))} , 0)) / list.length)
}


function getMeanVariance ( list ) {

	var mean = getMean( list );

	var variance = getVariance( list, mean );

	return { mean: mean, variance: variance };

}




















function getMean () {
	a.forEach(function (item) { 
		sum = sum+getProbabilty(item) 
	})
}



[1,2,3,4] => {mean: 12, variance: 14}

var a = [1,2,3,4];
var length = a.length;
function getProbabilty (next , n) {
	return next/n;
}

function getMean (value) {

}

function getMeanVariance () {
	var x = a.forEach( function (item) return getProbabilty(item));
	return a.reduce(function (obj, next) {
		getProbabilty(next, length);
		return 
	}, {})
}




