
var a = ['a', 'b', 'c', 'd', 'e'];
var n = [1, 2, 3, 4, 5];

function zip (x, y) {
	
	return x.reduce(function (mix, next, i) {
		return mix.concat( [ next, y[i] ] );
	},[])

}



