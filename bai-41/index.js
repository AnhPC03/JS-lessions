// var fs = require('fs');
// var readline = require('readline-sync');
// var data = [];
// function Student(name, id) {
// 	this.name = name;
// 	this.id = id;
// }
// if (fs.readFileSync('Data.json', 'utf-8')) {
// 	data.concat(JSON.parse(fs.readFileSync('Data.json', 'utf-8')));
// 	console.log(data);
// }
// console.log('Enter \'end\' to end');
// do {
// 	var name = readline.question('\nEnter your name: ');
// 	if (name === 'end') {
// 		break;
// 	}
// 	var id = readline.question('Enter your id: ');
// 	var newStudent = new Student(name, id);
// 	data.push(JSON.stringify(newStudent));
// } while (true);
// console.log(data);
// fs.writeFileSync('Data.json', data);
function maxOfSumChain(arr,k){
	var max = 0;
  	for (let i = 0; i <= (arr.length - k); ++i) {
  		let tmp = 0;
  		for (let j = i; j < i + k; ++j) {
    		tmp += arr[j];
    	}
    	if (tmp > max) {
    		max = tmp;
    	}
  	}
  	return max;
}

maxOfSumChain([1,3,2,6,2],3);