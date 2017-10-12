// NOTE: STACKS
// Stacks : is a list of elements that are accessible only from one end of the list (TOP of the STACK)
// The stack is known as last-in, first-out data structure : any element that is not currently at the top of the stack cannot be accessed.

// NOTE: STACK IMPLEMENTATION

function Stack(){
  this.dataStore = [] //array that stores the stack elements
  this.top = 0
  this.push = push
  this.pop = pop
  this.peek = peek //
  this.clear = clear
  this.length = length
};

//we store new element in the top position of the stack
function push(element){
  this.dataStore[this.top++] = element
}

//it return the element in the top position of the stack and then decrements the top variable
function pop(){
  return this.dataStore[--this.top]
}

//returns the top element of the stack by accessing the element at the top-1 position of the array
function peek(){
  return this.dataStore[this.top-1]
}

function length(){
  return this.top
}

function clear(){
  this.top = 0;
}

// EXAMPLE: IMPLEMENTATION OF THE STACK CLASS

var s = new Stack()

s.push('david')
s.push('raymnod')
s.push('bryan')

// console.log("length: " + s.length());
// console.log("peek: " + s.peek());
// console.log("pop s: "+ s.pop());
// console.log("s was poped: " + s);
var popped = s.pop()

// console.log("the popped element is: "+ popped);
// console.log("peek popped: " + popped );


s.push('cynthia')
// console.log("pushed cyntia, this is you peek: " + s.peek());

s.clear()

// console.log("s was clear this ist lenght: " + s.length());
// console.log("peek after clear " + s.peek());

s.push('clayton')
// console.log(s.peek());


// NOTE: USING THE STACK CLASS
// NOTE: MULTIPLE BASE CONVERSIONS >> converta number from one base to another base

//Given a number, 'n', which we want to convert to a base, 'b'n here is the alogrithm for performing the conversion

// 1. The rightmost digit of n is n % b. Push this digit onot the stack
// 2. Replace n with n/b
// 3. Repeat steps 1 and 2 until n = 0 and there are no significant digits remaining
// 4. Build the converted number string by popping the stack until the stack is empty

// NOTE: this algorithm will work only with bases 2 through 9

function mulBase(num, base) {
  var s = new Stack()
  console.log(s);
  do {
    s.push(num % base)
    console.log("peek: "+s.peek());
    num = Math.floor(num /= base)
    console.log(num);
  }while (num > 0)

  console.log(s);
  var converted = ""
  while(s.length() > 0){
    console.log(s);
    converted += s.pop()
    console.log(" converted += s.pop() " + converted);
  }
  return converted
}

var num = 66
var base = 2
// var newNum = mulBase(num, base)

// console.log(newNum);

// NOTE: PALINDROMES : is a word, phrase, or number that is spelled the same forward and backward
// comunente en la lengua castellana se las llama capicua (ama, oso, 121, 1234321, ...)

function isPalindrome(word) {
  var s = new Stack()
  for (var i = 0; i < word.length; i++) {
    s.push(word[i])
  }

  var rword = ""
  while(s.length() > 0){
    rword += s.pop()
  }
  if (word == rword) {
    return true
  }
  return false
}

// console.log(isPalindrome('ramar'));
// console.log(isPalindrome('amal'));

// NOTE: DEMOSTRATING RECURSION

//form conventional for make n factorial
function factorial(n) {
  if(n === 0){
    return 1
  }else{
    return n*factorial(n-1)
  }
}

//use stack for make n factorial

function fact(n) {
  var s = new Stack()
  while(n>1){
    s.push(n--)
    console.log(s);
    // console.log(s.peek());
  }
  var product = 1
  while(s.length() > 0){
    product *= s.pop()
  }
  return product
}

// console.log(fact(3));
