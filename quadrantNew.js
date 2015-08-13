points = [{x: 1, y: 1 }, {x: -1, y: 1 }, {x: -1, y: -1 }, {x: 1, y: -1 }, {x: 2, y: 2 }, {x: -1, y: 2 }, {x: -1, y: -2 }, {x: 1, y: -2 }, {x: 1, y: 6 }, {x: -1, y: 4 }, {x: -3, y: -1 }, {x: 1, y: -1 }, {x: 10, y: 1 }, {x: -1, y: 11 }, {x: -1, y: -1 }, {x: 1, y: -1 } ]

function getLargestVectorInQuadrant(points, x, y) {

	function isSamePolarity( a, b ) {
		if(( a < 0 && b < 0 ) || ( a >=0 && b >=0 )) return true;
		else return false;
	}

	function magnitudeSquared( a, b ) {
		return ( a*a + b*b )
	}

	var largestVector = points
		.filter( function ( point ) {
			return isSamePolarity( point.x, x ) && isSamePolarity( point.y, y );
		})
		.map( function ( point ) {
			return {
				x: point.x,
				y: point.y,
				magnitude: magnitudeSquared( point.x, point.y )
			}
		})
		.reduce( function ( maxPoint, point ) {
			return maxPoint.magnitude > point.magnitude ? maxPoint : point
		}, { magnitude: -Infinity } );

	return largestVector;
}

largestVector = getLargestVectorInQuadrant (points, -1, 1);
console.log([ 
	'Largest vector in Quadrant : (',
	x,
    ',',
	y,
    ') is (',
    largestVector.x,
    ',',
    largestVector.y,
    ') with a magnitude of:',
	Math.sqrt(largestVector.magnitude)
].join(' '));


