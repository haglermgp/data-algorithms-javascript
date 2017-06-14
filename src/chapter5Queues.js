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

q.enqueue('hagler')
q.enqueue('melina')
q.enqueue('melissa')

console.log(toString(q));

q.dequeue()
console.log("after dequeue: "+ toString(q));

console.log('show FRONT of queue: '+ q.front());
console.log('show BACK of queue: '+ q.back());
