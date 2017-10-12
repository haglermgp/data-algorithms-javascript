
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
  this.insert = insert;
  this.clear = clear;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}

// NOTE: APPEND: ADDING AN ELEMENT TO ALIST

function append(element) {
  this.dataStore[this.listSize++] = element;
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
    --this.listSize;
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

// console.log(names);
// console.log(names.toString());
//
// names.append("Barbara");
// console.log(names.toString());
// console.log(names);
//
// names.remove("Raymond")
// console.log(names.toString())
// console.log(names);


// NOTE: INSERT: INSERTING AN ELEMENT INTO A LIST
//this function is different to append, beacuse with INSERT we define the position that want to add element on the list

function insert(element,after) {
  var insertPos = this.find(after) //define the existence of the reference (after) that need for add the new element
  //and we evaluated the value, if the reference exist >> we insert new element after the element >> if not, is not posible add new element because?? you know why.
  if (insertPos > -1) {
    this.dataStore.splice(insertPos+1, 0, element)
    ++this.listSize
    return true
  }
  return false
}

// names.insert('InsertPerson', 'Cynthia')
// console.log(names);
// console.log(names.toString());


// NOTE: CLEAR: REMOVING ALL ELEMENTS FROM A LIST
function clear() {
  delete this.dataStore
  this.dataStore = []
  this.listSize = this.pos = 0
}

// names.clear()
// console.log('clear');
// console.log(names);
// console.log(name.toString());

// NOTE: CONTAINS: DETERMINING IF A GIVEN VALUE IS IN A LIST

function contains (element) {
  // body...
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] == element) {
      return true
    }
    return false
  }
}

// NOTE: TRAVERSING A LIST : sets function allows movement through a list

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize-1
}

function prev() {
  if (this.pos > 0) {
    --this.pos
  }
}

function next() {
  if (this.pos < this.listSize-1) {
    ++this.pos
  }
}

function currPos() {
  return this.pos
}

function moveTo(position) {
  this.pos = position
}

function getElement() {
  return this.dataStore[this.pos]
}

//when aply this methods we get to pos values, and we can play with him

// NOTE: INTERATING THROUGH A LIST
//why interating with this methods??
//consult page 41

// var names2 = new List()
//
// names2.append('a')
// names2.append('b')
// names2.append('c')
// names2.append('d')
// names2.append('e')
// names2.append('f')
//
// console.log('start here');
//
// console.log(names2.front());
// console.log(names2.getElement());
//
// console.log(names2.next());
// console.log(names2.getElement());
// console.log(names.currPos());
// console.log(names.length());
// console.log(names.next());
// console.log(names.getElement);

// for(names.front(); names.currPos() < names.length(); names.next()){
//   console.log(names.getElement());
// }



// NOTE: A LIST-BASED APPLICATION
//READING TEXT FILES

// cde fragmento for read contest of the our file create recently

var movies = readFile(chapter3files.txt).split('\n');

// read the content chapter3files and split into individuals lines. this lines is stored in MOVIES
console.log(movies);
// Movies contains no only initial content in "chapter3file.txt", also contain lines of the space, because "split('\n')" create a new line and replace with spaces foe each line of the content.

//Now we have delete this white space with "trim()"
function createArr(file) {
  var arr = readFile(file).split("\n")
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].trim()
  }
  return arr;
}

// NOTE: USING LIST TO MANAGE LIST BASSED APP
// take the List and store its contents in a list
var movieList = new List()
for (var i = 0; i < movies.length; i++) {
  movieList.append(movies[i])
}
// display movie list

//INSTANCEOF >> test if the object is a customer object (customer object is the name and movie that search customers)
function displayList(list) {
  for(list.front(); list.currPos() < list.lengtj(); list.next()){
    if(list.getElement() instanceof Customer){
      console.log(list.getElement()['name'] + ", " + list.getElement()['movie'])
    }
    else{
      console.log(list.getElement());
    }

  }
}
//create a list of movies that customer search
var customer = new List();

function Customer(name, movie) {
  this.name = name
  this.movie = movie
}

// function to check out a movie
// if movie that be on the list, this is remove of the customerList
// if isn't that no have change or remove on the list

function checkOut(name, movie, filmList, customerList) {
  if (movieList.contains(movie)) {
    var c = new Customer(name, movie);
    customerList.append(c);
    filmList.remove(movie)
  }
  else {
    console.log(movie + "is not available.");
  }
}

//test the checkOut()
var movie = creatArr('chapter3files.txt')
var movieList = new List()
var customers = new List()

for (var i = 0; i < movies.length; i++) {
  movieList.append(movies[i])
}

console.log('available movies: \n');
// console.log(movieList);
// checkOut('Jane Doe', 'The Godfather', movieList, customers)
// console.log('\nCustomer Rentals: \n');
// console.log(customers);
