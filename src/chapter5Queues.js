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

function toString(queue) {
  var retStr = ''
  for (var i = 0; i < queue.dataStore.length; i++) {
    retStr += queue.dataStore[i] + '\n'
  }
  return retStr
}

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
//SORT BY 10s digits (segundo digito, decenas)


//this function distributes numbers by the place (1s or 10s)
function distribute(nums, queues, n, digit) {
  for (var i = 0; i < n; i++) {
    if (digit == 1) {
      queues[nums[i]%10].enqueue(nums[i])
    }else {
      queues[Math.floor(nums[i]/10)].enqueue(num[i])
    }
  }
}

//this function collecting numbers from the queues

function collect(queues, nums) {
  var i = 0
  for (var digit = 0; digit < 10 ; i++) {
    while(!queues[digit].empty()){
      nums[i++] = queues[digit].equeue()
    }
  }
}

function dispArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i] + " ");
  }
}
