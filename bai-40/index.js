/**
 * Thi?t k? database cho 1 h? th?ng qu?n lý thu vi?n sách, cho bi?t thu vi?n này có hàng tram giá sách khác nhau, sách du?c d? ? b?t kì giá nào không theo danh m?c nào.
 * M?i cu?n sách có 1 mã khác nhau.
 * H? th?ng cho phép dang ký ngu?i dùng m?i, m?t ngu?i có th? mu?n nhi?u sách khác nhau trong m?t kho?ng th?i gian h?u h?n.
 * H? th?ng có th? luu l?ch s? ai dã mu?n sách nào, b?t d?u mu?n t? bao lâu, tr? lúc nào.
 * H? th?ng có luu l?i s? ngày quá h?n t?ng c?ng c?a 1 ngu?i dùng, ví d? sách A quá 2 ngày, sách B quá 3 ngày -> t?ng 5 ngày
 */

var readline = require('readline-sync');
var fs = require('fs');
var {table} = require('table');
var dataStudents = [];
var library = [
  {
    id: 0,
    name: 'Van hoc',
    subjects: [0, 1, 2, 3]
  },
  {
    id: 1,
    name: 'Toan hoc',
    subjects: [4, 5, 6, 7]
  },
  {
    id: 2,
    name: 'Vat ly',
    subjects: [8, 9, 10]
  },  
  {
    id: 3,
    name: 'Sinh hoc',
    subjects: [11, 12]
  },
  {
    id: 4,
    name: 'Ngoai ngu',
    subjects: [13, 14, 15, 16]
  },
  {
    id: 5,
    name: 'Hoa hoc',
    subjects: [17, 18, 19]
  },
  {
    id: 6,
    name: 'Lich su',
    subjects: [20, 21, 22]
  },  
  {
    id: 7,
    name: 'Dia ly',
    subjects: [23, 24, 25]
  }
];
var subjects = [
  {id: 0, name: 'Ngu van lop 6', library: 0},
  {id: 1, name: 'Ngu van lop 7', library: 0},
  {id: 2, name: 'Ngu van lop 8', library: 0},
  {id: 3, name: 'Ngu van lop 9', library: 0},
  {id: 4, name: 'Toan lop 6', library: 1},
  {id: 5, name: 'Toan lop 7', library: 1},
  {id: 6, name: 'Toan lop 8', library: 1},
  {id: 7, name: 'Toan lop 9', library: 1},
  {id: 8, name: 'Vat ly 10', library: 2},
  {id: 9, name: 'Vat ly 11', library: 2},
  {id: 10, name: 'Vat ly 12', library: 2},
  {id: 11, name: 'Sinh hoc 10', library: 3},
  {id: 12, name: 'Sinh hoc 11', library: 3},
  {id: 13, name: 'Ngoai ngu 6', library: 4},
  {id: 14, name: 'Ngoai ngu 7', library: 4},
  {id: 15, name: 'Ngoai ngu 8', library: 4},
  {id: 16, name: 'Ngoai ngu 9', library: 4},
  {id: 17, name: 'Hoa hoc 10', library: 5},
  {id: 18, name: 'Hoa hoc 11', library: 5},
  {id: 19, name: 'Hoa hoc 12', library: 5},
  {id: 20, name: 'Lich su 10', library: 6},
  {id: 21, name: 'Lich su 11', library: 6},
  {id: 22, name: 'Lich su 12', library: 6},
  {id: 23, name: 'Dia ly 10', library: 7},
  {id: 24, name: 'Dia ly 11', library: 7},
  {id: 25, name: 'Dia ly 12', library: 7},
];

function Student(name, studentId) {
  this.name = name;
  this.id = studentId;
}

function showOption() {
  console.log('\n\n1. Dang ki nguoi dung moi: ');
  console.log('2. Muon sach: ');
  console.log('3. Tra sach: ');
  console.log('4. Xem lich su: ');
  var question1 = readline.question('Hay nhap lua chon tuong ung 1 -> 4: ');
  switch (question1) {
    case '1': {
      registerNew();
      setTimeout(showOption(), 1000);
    }
    case '2': {
      borrowBooks();
      setTimeout(showOption(), 1000);
    }
    case '3': {
      returnBooks();
      setTimeout(showOption(), 1000);
    }
    // case '4': {
    //   showHistory();
    //   setTimeout(showOption(), 1000);
    // }
    default: {
      console.log('Ban da nhap khong dung. Exit...');
      Exit();
    }
  }
}

function registerNew() {
  console.log('Register a new user:\n');
  var name = readline.question('Enter your name: ');
  var studentId = Number(readline.question('Enter your student id: '));
  var student = new Student(name, studentId);
  dataStudents.concat(JSON.parse(fs.readFileSync('Data.json', 'utf-8')));
  dataStudents.concat(student);
  fs.writeFileSync('Data.json', JSON.stringify(dataStudents));
}

function borrowBooks() {
  console.log('See the table: ');
  var config, data1, data2;
  var data1 = library.map(function(obj) {
  return Object.keys(obj).sort().map(function(key) { 
    return obj[key];
    });
  });
  var data2 = subjects.map(function(obj) {
  return Object.keys(obj).sort().map(function(key) { 
    return obj[key];
    });
  });
  config = {
    columns: {
        0: {
            alignment: 'left',
            minWidth: 10
        },
        1: {
            alignment: 'center',
            minWidth: 10
        },
        2: {
            alignment: 'right',
            minWidth: 10
        }
    }
  };
  console.log(table(data1, config) + '\n\n');
  console.log(table(data2, config));
  var studentId = Number(readline.question('Enter your student id: '));
  dataStudents.concat(JSON.parse(fs.readFileSync('Data.json', 'utf-8')));
  console.log(dataStudents);
  var find = dataStudents.find(x => x.id === studentId);
  if (!find) {
    registerNew();
  }
  console.log('You can borrow one or more books. Now enter exactly identifiers of book you want to borrow. Press 0 to end.\n');
  var arrayOfBooks = [];
  while (true) {
    var idBook = readline.question(' ');
    if (idBook === '0') {
      break;
    }
    arrayOfBooks.push(idBook);
  }
  newArrayOfBooks = arrayOfBooks.map(function (x) {
    return subjects.find((y) => y.id === x);
  });
  find.borrow = newArrayOfBooks;
  console.log('Your information is: ', find);
  fs.writeFileSync('Data.json', JSON.stringify(dataStudents));
}

function returnBooks() {
  var studentId = readline.question('Enter your student id: ');
  var list = JSON.parse(fs.readFileSync('Data.json', 'utf-8'));
  var find = list.find((x) => x.id === studentId);
  if (!find) {
    registerNew();
  }
  console.log('Your information is: ', find);
  console.log('You can return one or more books. Now enter exactly identifiers of book you want to return. Press 0 to end.\n');
  var arrayOfBooks = [];
  while (true) {
    var idBook = readline.question(' ');
    if (idBook === '0') {
      break;
    }
    arrayOfBooks.push(idBook);
  }
  for (var i of arrayOfBooks) {
    for (var j in find.borrow) {
      if (j.id === i) {
        delete j;
        break;
      }
    }
  }
  console.log('Your updated information is: ', find);
  var writeStream = fs.createWriteStream('Data.json');
  writeStream.write(JSON.stringify(find));
  writeStream.end();
}

function main() {
  showOption();
}

main();