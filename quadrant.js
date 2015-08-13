points = [{x: 1, y: 1 }, {x: -1, y: 1 }, {x: -1, y: -1 }, {x: 1, y: -1 }, {x: 2, y: 2 }, {x: -1, y: 2 }, {x: -1, y: -2 }, {x: 1, y: -2 }, {x: 1, y: 6 }, {x: -1, y: 4 }, {x: -3, y: -1 }, {x: 1, y: -1 }, {x: 10, y: 1 }, {x: -1, y: 11 }, {x: -1, y: -1 }, {x: 1, y: -1 } ]

function getLargestVectorInQuadrant(points, x, y) {
	 var quadPoints = points.filter(function(point) {
	 	if(x > 0 && y > 0) return  point.x > 0 && point.y > 0; 
		else if (x < 0 && y < 0) return  point.x < 0 && point.y < 0; 
	 	else if (x > 0 && y < 0) return  point.x > 0 && point.y < 0; 
	 	else if (x < 0 && y > 0) return  point.x < 0 && point.y > 0; 
	});
		
	 var maxMagnitude =  Math.max.apply(null , quadPoints.map(function(point) { 
		return  Math.sqrt(point.x * point.x + point.y * point.y) 
	 }));
		
	 var pointsXY = quadPoints.filter( function (point) { return Math.sqrt(point.x * point.x * point.y * point.y) === maxMagnitude });
	
	finalRes = [ 
		'Largest vector in Quadrant : (',
		x,
	    ',',
		y,
	    ') is (',
	    pointsXY[0].x,
	    ',',
	    pointsXY[0].y,
	    ') with a magnitude of sqrt(',
		pointsXY[0].x,
	    '^2 +',
	    pointsXY[0].y,
	    '^2',
	    ')' 
	].join(' ');

}