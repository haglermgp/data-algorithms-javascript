// NOTE: A HASH TABLE CLASS
// Hashing  is  a  common  technique  for  storing  data  in  such  a  way  that  the  data  can  be
// inserted and retrieved very quickly. Hashing uses a data structure called a
// hash table.
// Although hash tables provide fast insertion, deletion, and retrieval, they perform poorly
// for  operations  that  involve  searching,  such  as  finding  the  minimum  and  maximum
// values in a data set

function HashTable() {
  this.table = new Array(137)
  // this.simpleHash = simpleHash
  this.betterHash = betterHash
  this.showDistro = showDistro
  this.put = put
  this.get = get
}

//CHOOSING A HASH FUNCTION
// A simple hash function that at first glance seems to work well is to sum the ASCII value
// of the letters in the key. The hash value is then that sum modulo the array size. Here is
// the definition for this simple hash function:
//ASCII >> American Standard Code for Information Interchange
// >> this a code of characteres based on latin alphabetics

//charCodeAt >> that have the
function simpleHash(data) {
  var total = 0
  for (var i = 0; i < data.length; i++) {
    total += data.charCodeAt(i)
  }
  return total % this.table.length
}

function put(data) {
  var pos = this.betterHash(data)
  this.table[pos] = data
}

function showDistro() {
  var n = 0
  for (var i = 0; i < this.table.length; i++) {
    if (this.table[i] != undefined) {
      console.log(i + ':' + this.table[i]);
    }
  }
}

// example

//
//
// function simpleHash(data) {
//   var total = 0
//   for (var i = 0; i < data.length; i++) {
//     total += data.charCodeAt(i)
//   }
//   console.log("Hash value: " + data + "->" + total);
//   return total % this.table.length
// }
//
// // NOTE: A BETTER HASH FUNCTIONS
//how to avoid collisions ?
//make sure the array that you using for the hash table is sized to prime number
//


function betterHash(string) {
  const H = 37
  var total = 0
  for (var i = 0; i < string.length; i++) {
    total += H * total + string.charCodeAt(i)
  }
  total = total % this.table.length

  if (total < 0) {
    total += this.table.length-1
  }
  return parseInt(total)
}
//an example with this, is the last example we just add a betterHash function to HashTable and modify the put change simpleHash to betterHash

var someNames = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan']

var hTable = new HashTable()

for (var i = 0; i < someNames.length; i++) {
  hTable.put(someNames[i])
}
hTable.showDistro()


// // NOTE: HASHING INTEGER KEYS


// generate the student data (ID and grade)
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function genStuData(arr) {
  for (var i = 0; i < arr.length; i++) {
    var num = ""
    for (var j = 0; j <= 9; j++) {
      num += Math.floor(Math.random() * 10)
    }
    num +=getRandomInt(50, 100)
    arr[i] = num
  }
}

// var numStudents = 10,
//     arrSize = 97,
//     idLen   = 9,
//     students  = new Array(numStudents);
//     genStuData(students)
//
// console.log('student data: \n');
//
// for (var i = 0; i < students.length; i++) {
//   console.log(students[i].substring(0,8) + ' ' +
//               students[i].substring(9));
// }
//
// console.log('\n\nData distribution: \n');
//
// var hTableNum = new HashTable()
// for (var i = 0; i < students.length; i++) {
//   hTableNum.put(students[i])
// }
//
// hTableNum.showDistro()



// NOTE: STORING AND RETRIEVING DATA IN A HASH TABLE


//redefining put function
//hashes the key, and then uses that information to store the data in the table
function put(key, data ) {
  var pos = this.betterHash(key)
  this.table[pos] = data
}

//for retrieve data stored in a hash table
function get(key) {
  return this.table[this.betterHash(key)]
}

var pnumbers = new HashTable()
var name, number;

for (var i = 0; i < 3; i++) {
  console.log('Enter name (space to quit): ')
  name = readline()
  console.log('Enter a number: ')
  number readline()
}
name = ''

console.log('Name for number (Enter quit to stop)');

while (name != 'quit') {
  name = readline()
  if (name = 'quit') {
    break
  }
  console.log(name + "'s number is " + pnumbers.get(name));
  console.log("Name for number (Enter quit to stop): ");
}

console.log(pnumbers.get(name));
