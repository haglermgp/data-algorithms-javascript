// NOTE: QUEUES
//>>> QUEUES is a type of list where data are INSERTED  a the END and REMOVED from the FRONT.
//>>> FIFO data structure first in first out

// NOTE: QUEUE OPERATIONS   >>>> ENQUEUE >>>> DEQUEUE
//ENQUEUE >>> insert a new element at the end of a queue
//DEQUEUE >>> removes an element from the front of a queue

// NOTE: AN ARRAY-BASED QUEUE CLASS IMPLEMENTATION

// for construct this type of data we use PUSH and SHIFT
'use strict'

function Queue() {
  this.file = []
  this.dataStore = []
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.front = front
  this.back = back
  this.toString = toString
  this.empty = empty

}

function enqueue(element) {
  this.dataStore.push(element)
}

function dequeue(element) {
  return this.dataStore.shift()
}

function front() {
  return this.dataStore[0]
}

function back() {
  return this.dataStore[this.dataStore.length-1]
}

//toString() function to display all the element in a queue

// function toString(queue) {
//   var retStr = ''
//   for (var i = 0; i < queue.dataStore.length; i++) {
//     retStr += queue.dataStore[i] + '\n'
//   }
//   return retStr
// }

//empty() >> funtion that lets us know if a queue is empty
function empty() {
  if (this.dataStore.length == 0) {
    return true
  }else {
    return false
  }
}

var q = new Queue()

q.enqueue('jim')
q.enqueue('melina')
q.enqueue('melissa')

console.log(toString(q));

q.dequeue()
console.log("after dequeue: "+ toString(q));

console.log('show FRONT of queue: '+ q.front());
console.log('show BACK of queue: '+ q.back());

console.log();
// NOTE: USING THE QUEUE CLASS : ASSIGNING PARTNERS AT A SQUARE DANCE

function Dancer(name, sex) {
  this.name = name
  this.sex = sex
}

function getDancers(males, females) {
  var names = readtext.split("\n")
  for (var i = 0; i < names.length; i++) {
    names[i] = names[i].trim()
  }

  for (var i = 0; i < names.length; i++) {
    var dancer = names[i].split(" ")
    var sex = dancer[0]
    var name = dancer[1]
    if (sex == "F") {
      females.enqueue(new Dancer(name, sex))
    }
    else {
      males.enqueue(new Dancer(name, sex))
    }
  }
}

function dance(males, females) {
  console.log("The dance partners are: \n");
  while (!females.empty() && !males.empty()){
    person = females.dequeue()
    console.log("Female dancer is: " + person.name);
    person = males.dequeue()
    console.log("and the male dancer is: "+ person.name);
  }

}

//test program



//
// var fs = require('fs');
// var readtext = []
//
// fs.readFile('./chapter5.txt', 'utf8', function(err, readtext) {
//     if (err) throw err;
//     console.log(readtext);
//     console.log("typeof: " + typeof readtext);
//     var maleDancers = new Queue()
//     var femaleDancers = new Queue()
//
//     getDancers(maleDancers, femaleDancers)
//     dance(maleDancers, femaleDancers)
//
//     if (!femaleDancers.empty()) {
//       console.log(femaleDancers.front().name + " is waiting to dance.");
//     }
//
//     if (!maleDancers.empty()) {
//       console.log(maleDancers.front().name + " is waitin to dance.");
//     }
//
// });


// NOTE: SORTING DATA WITH QUEUES
// >>> also to be used to sort data
// in this example we sort the numbers for two types of sort with queues

//SORT BY 1s digits (primer digito, unidades)
// EXAMPLE :
  // Bin 0:
  // Bin 1: 91, 31
  // Bin 2: 92, 22
  // Bin 3:
  // Bin 4:
  // Bin 5: 85, 15, 35

//SORT BY 10s digits (segundo digito, decenas)
  // Bin 0:
  // Bin 1: 15
  // Bin 2: 22
  // Bin 3: 31, 35
  // Bin 4: 46
  // Bin 5:
  // Bin 6:
  // Bin 7:
  // Bin 8: 85
  // Bin 9: 91, 92


//this function distributes numbers by the place (1s or 10s)
function distribute(nums, queues, n, digit) {
  for (var i = 0; i < n; i++) {
    if (digit == 1) {
      queues[nums[i]%10].enqueue(nums[i])
    }else {
      queues[Math.floor(nums[i]/10)].enqueue(num[i])
    }
  }``
}

//this function collecting numbers from the queues

function collect(queues, nums) {
  var i = 0
  for (var digit = 0; digit < 10 ; digit++) {
    while(!queues[digit].empty()){
      nums[i++] = queues[digit].dequeue()
    }
  }
}

function dispArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i] + " ");
  }
}


var queues=[];

for (var i = 0; i < 10; i++) {
  queues[i] = new Queue();
}

var nums = []
for (var i = 0; i < 10; i++) {
  nums[i] = Math.floor(Math.random() * 101);
}

// console.log(queues);

// console.log(nums);

dispArray(nums);
// console.log("nums after dispArray: " + nums);

// distribute(nums, queues, 10, 1);
distribute(nums, queues, 10, 1)

// console.log("nums after distribute: " + nums );
// console.log("queues after distribute: " + queues );

collect(queues, nums)

// console.log("nums after collect: " + nums );
// console.log("queues after collect: " + queues );

dispArray(nums);
// console.log("nums after dispArray FINAL: " + nums);


// NOTE: PRIORITY QUEUES
//simulate an queue from the Emergency department (ED) : where the patients (values) with hight priority was been seen first than low priorioty

function Patient(name, code) {
  this.name = name;
  this.code = code;
}


//we add new definition of dequeue

function dequeue() {
  var priority = this.dataStore[0].code

  for (var i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i].code < priority) {
        priority = i;
      }
  }
  return this.dataStore.splice(priority, 1)
}

//we add new definition of soString()

function toString() {
  var retStr = "";
  for (var i = 0; i < this.dataStore.length; i++) {
    retStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n"
  }
  return retStr;
}

var p = new Patient("smith", 5)
var ed = new Queue()

ed.enqueue(p)
p = new Patient("Jones", 4)
ed.enqueue(p)
p = new Patient("Ferhrenbach", 6);
ed.enqueue(p)
p = new Patient("Brown", 1);
ed.enqueue(p)
console.log(p);

console.log(ed.toString());
