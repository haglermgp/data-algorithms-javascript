// NOTE: LINKED LISTS
//definition : Linked Lists is another type of list, thats IS A COLLECTIONS OF OBJECTS CALLED NODES
//Each node is linked to a successor node in the list using an object reference. The reference to another node is called a link

// NOTE: for more explanation see page 74 of book : Data Structure and Algorithms with Javascript O'Reilly


// NOTE: AN OBJECT-BASED LINKED LIST DESIGN

//THE NODE CLASS : have to properties>>
  //>> HEADER : its a first element that start the linked list or is the node that store's data
  //>> ELEMENT : which store's the node's data
  //>> NEXT : which stores a link to the next node in the linked list

  //for creating NODES

// function Node(element) {
//   this.element = element
//   this.next = null
// }
//
// //THE LINKED LIST CLASS
//   //Provides the functionality for a linked list (find, insert, remove... a particular data value)
//
//   //NOTE: the HEAD NODE start with is next property set to null and is changed to point to the first element inserted into the list, since (ya que) we create a new Node element but don't modify ist next property.
//
// function LList() {
//   this.head = new Node('head')
//   this.find = find
//   this.insert = insert
//   this.display = display
//   this.remove = remove
//   this.findPrevious = findPrevious
// }
//
// //INSERTING NEW NODES
//   //step 1: find the "after node" with helper function find()
//     //search through the linked list looking for the specified data
//     //NODE >> NODE2 >> NODE3 >>item (found item in NODE3)
//     //RETURN NODE3 (the node storing the data searched)
//     //IF NOT FOUND >> return null
//
// function find(item) {
//   var currNode = this.head
//   console.log("currNode: "+currNode);
//   console.log("currNode.element: "+currNode.element);
//   console.log("item: " +item);
//   while(currNode.element != item){
//     currNode = currNode.next
//   }
//   return currNode
// }
//
// function insert(newElement, item) {
//   var newNode = new Node(newElement)
//   var current = this.find(item)
//   newNode.next = current.next //the newNode is set to the value of the next property of the "after" node (current.next)
//   current.next = newNode //"after" node's next (current.next) is se to a reference to the new node
// }
//
// function display() {      //display the elements of a linked list
//   var currNode = this.head;
//   while(!(currNode.next == null)){
//     console.log(currNode.next.element);
//     currNode = currNode.next
//     console.log(currNode);
//   }
// }

//EXAMPLE FO INSERT ELEMENT ON THE LIST

// var cities = new LList()
//   cities.insert('Conway', 'head')
// cities.insert('Russelville', 'Conway')
// cities.insert('alma', 'Russelville')
//
// cities.display()

// console.log(cities);


//REMOVING NODES FROM A LINKED LIST

// function findPrevious(item) {
//   var currNode = this.head
//   while(!(currNode.next == null) && (currNode.next.element != item)){
//     currNode = currNode.next
//     console.log("currNode of the findPrevious: " + currNode);
//   }
//   return currNode
// }
//
//
// function remove(item) {
//   var prevNode = this.findPrevious(item)
//   console.log('prevNode: ' + prevNode);
//   console.log('prevNode.element: ' + prevNode.element);
//   if (!(prevNode.next == null)) {
//     console.log("prevNode: "+ prevNode);
//     prevNode.next = prevNode.next.next
//     // console.log("prevNode.next: " + prevNode.next);
//     console.log("prevNode.next.element: " + prevNode.next.element);
//   }
// }

//EXAMPLE

// var cities = new LList()
//
// cities.insert('Fortran', 'head')
// cities.insert('Russel', 'Fortran')
// cities.insert('Friedrik', 'Russel')
// cities.insert('Alma', 'Friedrik')
//
// cities.display()
//
// console.log("cities: "+cities);
//
// cities.remove('Friedrik')
// cities.display()

//
// NOTE: DOUBLY LINKED LISTS
  //type of linked list that we can move through next and previous nodes

//
//
function Node(element) {
  this.element = element
  this.next = null
  this.previous = null // new nodee's previous property
}

function LList() {
  this.head = new Node('head')
  this.find = find
  this.insert = insert
  this.display = display
  this.remove = remove
  this.findLast = findLast
  this.dispReverse = dispReverse
}

function find(item) {
  var currNode = this.head
  while (currNode.element != item) {
    currNode = currNode.next
  }
  return currNode
}

function insert(newElement, item) {
  var newNode = new Node(newElement)
  var current = this.find(item)

  newNode.next = current.next
  // console.log(newNode.next);
  newNode.previous = current
  // console.log(newNode.previous);
  current.next = newNode
  // console.log(current.next);

}

function display() {
  var currNode = this.head
  while (!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next
  }
}

//why? we rewrite the function to change and remove node's from the list because we win more eficietly
//we don't have to find the previous node. NODE FINDED, NODE REMOVED
function remove(item) {
  var currNode = this.find(item)
  if (!(currNode.next == null)) {
    currNode.previous.next = currNode.next // this instance to himself through previous.next property
    currNode.next.previous = currNode.previous // this same
    currNode.next = null
    currNode.previous = null
  }
}


function findLast() {
  var currNode = this.head
  while (!(currNode.next == null)) {
    currNode = currNode.next
  }
  return currNode
}

// dispReverse >> displayReverse >> the function that display the double linked list in reverse order
function dispReverse() {
  var currNode = this.findLast()
  currNode = this.findLast()
  while (!(currNode.previous)) {
    console.log(currNode.element);
    currNode = currNode.previous
  }
}

var cities = new LList()

cities.insert('con', 'head')
cities.insert('russ', 'con')
cities.insert('car', 'russ')
cities.insert('alma', 'car')

console.log(cities);

console.log('find russ');
console.log(cities.find('russ'));

console.log('findLast()');
console.log(cities.findLast());

// cities.remove('russ')
// console.log('this is display');
// cities.display()
//
// cities.dispReverse()




// //CIRCULARLY LINKED LISTS
// this Circulary linked list is the same doubly linked list but with a litle diference >> this.head.next and >> display function

function LList() {
  this.head = new Node('head')
  this.head.next = this.head //give us the property to move onver and over in cirulary mode, that is the more easy mode that we go backward trough a list and avoid that create other linked list with property to go backward.
  this.find = find
  this.insert = insert
  this.remove = remove
  this.display = display
  this.findPrevious = findPrevious
}

function display() {
  var currNode = this.head
  while(!(currNode.next == null) && !(currNode.next.element == "head")){
    console.log(currNode.next.element);
    currNode = currNode.next
  }
}
//
// // OTHER LINKED LIST FUNCTIONS
