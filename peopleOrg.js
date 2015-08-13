var people = [{
	name: 'Sandeep',
	empId: 0,
	age: 23,
	orgId: 1
}, {
	name: 'Arjun',
	empId: 1,
	age: 25,
	orgId: 2
}, {
	name: 'Nanha',
	empId: 3,
	age: 22,
	orgId: 1
}, {
	name: 'Nandu',
	empId: 4,
	age: 53,
	orgId: 3
}]


people.reduce( function ( aggregated, person ) { 
	aggregated.names.push( person.name ); 
	aggregated.ages.push( person.age );
	return aggregated; 
	}, 
	{ names: [], ages: [] } 
	)


{
	names: [],
	ages: []
}

{
	names: ['sandeep', 'Arjun'],
	ages: [23,25]
}


var organizations = [{
	name: 'Razorthink',
	id: 1,
	employees: [0, 3]
}, {
	name: 'Apple',
	id: 2,
	employees: [1]
}, {
	name: 'Microsoft',
	id: 3,
	employees: [4]
}]

//console.log => 'Razorthink has 2 employees in the record: Sandeep, Nanha. They are 23, 22 years old respectively';

	//var reports = [];

	/*var reports = organizations.filter( function (org) {
		var employees = people.filter( function (person) { return org.employees.indexOf(person.empId) != -1 });
		var name = employees.map( function (person) { return person.name })
		var age = employees.map( function (person) { return person.age })

		var report = [
			org.name,
			'has',
			employees.length,
			'employees in the record:',
			name,
			'.',
			'They are',
			age,
			'years old respectively'
		].join(' ');

		reports.push(report);
	});

	return reports;*/

	/*var reports = organizations.map( function (org) { 
		var reports = [];
		var organization = { name : org.name, employees : org.employees };
		var employees =  people.filter( function (person) { return organization.employees.indexOf(person.empId) != -1})
		var empName = employees.map(function(employee) { return employee.name})
		var empAge = employees.map(function(employee) { return employee.age})
		var report = [
			organization.name,
			'has',
			employees.length,
			'employees in the record:',
			empName,
			'.',
			'They are',
			empAge,
			'years old respectively'
		].join(' ');

		reports.push(report);
		return reports;

	}).join(' ');*/

function generateReports( people, organizations ) {

	function getNamesAndAge( aggregate, current ) {
			aggregate.names.push( current.name );
			aggregate.ages.push( current.age );
			return aggregate;
	}

	return organizations.map( function ( org ) { 

		var employeesNameAge = people
			.filter( function ( person ) { return org.employees.indexOf(person.empId) != -1 })
			.reduce ( getNamesAndAge , { names : [] , ages : [] } );

		return [
			org.name,
			'has',
			org.employees.length,
			'employees in the record:',
			employeesNameAge.names,
			'. They are',
			employeesNameAge.ages,
			'years old respectively.'
		].join(' ');

	}).join(' ');

}

var result = generateReports(people, organizations);