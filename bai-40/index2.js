var fs = require('fs');

var readline = require('readline-sync');

var data = [];

function Student(name, id) {

	this.name = name;

	this.id = id;

}

if (fs.readFileSync('Data.json', 'utf-8')) {

	data.push(JSON.parse(fs.readFileSync('Data.json', 'utf-8')));

	console.log(data);

}

console.log('Enter \'end\' to end');

do {

	var name = readline.question('\nEnter your name: ');

	if (name === 'end') {

		break;

	}

	var id = readline.question('Enter your id: ');

	var newStudent = new Student(name, id);

	data.push(newStudent);

} while (true);

console.log(data);

fs.writeFileSync('Data.json', JSON.stringify(data));