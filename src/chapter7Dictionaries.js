


function Dictionary() {
  this.add = add
  this.datastore = new Array()
  this.find = find
  this.remove = remove
  this.showAll = showAll
}

function add(key, value) {
  this.datastore[key] = value
}

function find(key) {
  return this.datastore[key ]
}

function remove(key) {
  delete this.datastore[key]
}

function showAll() {
  for each (var key in Object.keys(this.datastore)){
    console.log(key + " -> " + this.datastore[key]);
  }
}

load('Dictionary.js')

var pbook = new Dictionary()
pbook.add("Mike", "123")
pbook.add("David", "345")
pbook.add("Cynthia", "456")

console.log("David's extension: " + pbook.find("David"));
pbook.remove("David")
pbook.showAll()

// NOTE: AUXILIARY FUNCTIONS FOR THE DICTIONARY CLASS

function count() {
  var n = 0
  for each (var key in Object.keys(this.datastore)){
    ++n
  }
  return n
}

var nums() = new Array()

nums[0] = 1
nums[1] = 2

var pbook = new Array()

pbook["David"] = 1
pbook["Jennifer"] = 2
console.log(pbook.length);

function clear() {
  for each (var key in Object.keys(this.datastore)){
    delete this.datastore[key]
  }
}


// NOTE: ADDING SORTING TO THE DICTIONARY CLASS

var a = new Array()
a[0] = "Mike"
a[1] = "David"

function showAll() {
  for reach(var key in Object.keys(this.datastore).sort()){
    console.log(key + " -> " + this.datastore[key]);
  }
}
