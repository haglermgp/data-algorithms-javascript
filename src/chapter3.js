// NOTE: LISTS
//---definition: is a ordered sequence of data. Each data stored in a list is called an element.

// NOTE: A LIST CLASS IMPLEMENTATION

function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.toString = toString;
  this.find = find;
  this.remove = remove;
  this.append = append;
  // this.clear = clear;
  // this.insert = insert;
  // this.front = front;
  // this.end = end;
  // this.prev = prev;
  // this.next = next;
  // this.length = length;
  // this.currPos = currPos;
  // this.moveTo = moveTo;
  // this.getElement = getElement;
  // this.contains = contains;
}

// NOTE: APPEND: ADDING AN ELEMENT TO ALIST

function append(element) {
  this.dataStore[this.listSize] = element;
}

// NOTE: REMOVE: REMOVING A ELEMENT FROM A LIST
// 1: find element in the list
// 2: remove it and replace with the hole left element

function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -1;
}

function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt,1);
    this.listSize;
    return true;
  }
  return false;
}

// NOTE: Length: Determining the number of elements in a listSize

function length() {
  return this.listSize;
}


// NOTE: toString: Retriving a list's Elements
//to string allow us to view the elements of a list

function toString() {
  return this.dataStore;
}

var names = new List();

names.append("Cynthia");
names.append("Raymond");
names.toString();

console.log(names.toString());

names.append("Barbara");
console.log(names.toString());

names.remove("Raymond");
console.log(names.toString());
