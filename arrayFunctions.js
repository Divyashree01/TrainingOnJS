
var names = [];
for(var i=0 ; i<o.length; i++) {
	names[i] = o[i].name + '-' + o[i].age;
}

var people = [{
	name: 'sandeep',
	age: 10
}, {
	name: 'divya',
	age: 20
}, {
	name: 'arjun',
	age: 30
}, {
	name: 'nanha',
	age: 40
}];

var nameAge = people.map( function (person) {  return person.name + '-' + person.age } );


var youngPeople = people.filter( function (person) { return person.age <= 25 } );


var cummulativeAge = people
	.map( function (person) { return person.age } )
	.reduce( function ( p, n, i ) { 
		console.log('p:', p, 'n:', n, 'i:', i); 
		return p + n 
	} );


var cummulativeAge = people.reduce( function ( p, n, i ) { 
		n.age += p.age; return n; 
	} );