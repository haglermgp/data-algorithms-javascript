// NOTE: LINKED LISTS
//definition : Linked Lists is another type of list, thats IS A COLLECTIONS OF OBJECTS CALLED NODES
//Each node is linked to a successor node in the list using an object reference. The reference to another node is called a link

// NOTE: for more explanation see page 74 of book : Data Structure and Algorithms with Javascript O'Reilly


// NOTE: AN OBJECT-BASED LINKED LIST DESIGN

//THE NODE CLASS : have to properties>>
  //>> HEADER : its a first element that start the linked list
  //>> ELEMENT : which store's the node's data
  //>> NEXT : which stores a link to the next node in the linked list

  //for creating NODES

function Node(element) {
  this.element = element
  this.next = null
}

//THE LINKED LIST CLASS
  //Provides the functionality for a linked list (find, insert, remove... a particular data value)

  //NOTE: the HEAD NODE start with is next property set to null and is changed to point to the first element inserted into the list, since (ya que) we create a new Node element but don't modify ist next property.

function LList() {
  this.head = new Node('head')
  this.find = find
  this.insert = insert
  this.remove = remove
  this.display = display
}

//INSERTING NEW NODES
  //step 1: find the "after node" with helper function find()
    //search through the linked list looking for the specified data
    //NODE >> NODE2 >> NODE3 >>item (found item in NODE3)
    //RETURN NODE3 (the node storing the data searched)
    //IF NOT FOUND >> return null

function find(item) {
  var currNode = this.head
  while(currNode.element != item){
    currNode = currNode.next
  }
  return currNode
}

function insert(newElement, item) {
  var newNode = new Node(newElement)
  var current = this.find(item)
  newNode.next = current.next //the newNode is set to the value of the next property of the "after" node (current.next)
  current.next = newNode //"after" node's next (current.next) is se to a reference to the new node
}

function display() {      //display the elements of a linked list
  var currNode = this.head
  while(!(currNode.next == null)){
    console.log(currNode.next.element);
    currNode = currNode.next
  }
}

// // EXAMPLE without remove
//   var cities = new LList()
//   cities.insert("Conway", "head")
//   cities.insert("Rus", "Conway")
//   cities.insert('alma','Rus')
//
//   cities.display()
//
// //REMOVING NODES FROM A LINKED LIST
//
// function findPrevious(item) {
//   var currNode = this.head
//   while(!(currNode.next == null) && (currNode.next.element != item)){
//     currNode = currNode.next
//   }
//   return currNode
// }
//
// function remove(item) {
//   var prevNode = this.findPrevious(item)
//   if (!(prevNode.next == null)) {
//     prevNode.next = prevNode.next.next
//   }
// }
//
// //EXAMPLE
//
// var cities = new LList()
// cities.insert("Conway", "head")
// cities.insert("Rus", "Conway")
// cities.insert('alma','Rus')
//
// cities.display()
//
//
// //DOUBLY LINKED LISTS
//
//
// function Node(element) {
//   this.element = element
//   this.next = null
//   this.previous = null
// }
//
// function insert(newElement, item) {
//   var newNode = new Node(newElement)
//   var current = this.find(item)
//
//   newNode.next = current.next
//   newNode.previous = current
//   current.next = newNode
// }
//
// function remove(item) {
//   var currNode = this.find(null)
//   if (!(currNode.next == null)) {
//     currNode.previous.next = currNode.next
//     currNode.next.previous = currNode.previous
//     currNode.next = null
//     currNode.previous = null
//   }
// }
//
// function findLast() {
//   var currNode = this.head
//   while (!(currNode.next == null)) {
//     currNode = currNode.next
//   }
//   return currNode
// }
//
// function dispReverse() {
//   var currNode = this.findLast()
//   currNode = this.findLast()
//   while (!(currNode.previous)) {
//     currNode = currNode.previous
//   }
// }
//
// //CIRCULARLY LINKED LISTS
//
// function LList() {
//   this.head = new Node('head')
//   this.find = find
//   this.insert = insert
//   this.remove = remove
//   this.display = display
//   this.findPrevious = findPrevious
// }
//
// function display() {
//   var currNode = this.head
//   while(!(currNode.next == null) && !(currNode.next.element == "head")){
//     console.log(currNode.next.element);
//     currNode = currNode.next
//   }
// }
//
// // OTHER LINKED LIST FUNCTIONS
