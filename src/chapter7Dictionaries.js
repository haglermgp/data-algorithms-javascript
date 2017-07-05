// NOTE: DICTIONARIES
// >>> is a type of data structure that stores data as key-value pairs,
// >>> key is a identifier of the value, when search the especific value, the first that we do is use the identifier for find the value.


function Dictionary() {
  this.add = add
  this.datastore = new Array()
  this.find = find
  this.remove = remove
  this.showAll = showAll
  this.clear = clear
  this.count = count
  this.sortAllShow = sortAllShow
}

function add(key, value) {
  this.datastore[key] = value
}

function find(key) {
  return this.datastore[key]
}

function remove(key) {
  delete this.datastore[key] // >> the DELETE operator removes a property from an object
}


//in this function included the sort of data, the loop (for each), the example in the book is a deprecated. Here is a new way.
function showAll() {

  for (var key of Object.keys(this.datastore).sort()) {
    console.log("the key are sort >> " + key + " >> the value " + this.datastore[key]);
  }
}
// load('Dictionary.js')

var pbook = new Dictionary()
pbook.add("za", "123")
pbook.add("al", "345")
pbook.add("yi", "456")
pbook.add("pu", "456")
pbook.add("pa", "456")

console.log(pbook.datastore);
pbook.showAll()
// console.log(pbook);

// console.log('remove y');
// pbook.remove('y')

// pbook.showAll()



// console.log("David's extension: " + pbook.find("David"));
// pbook.remove("David")
// pbook.showAll()

// NOTE: AUXILIARY FUNCTIONS FOR THE DICTIONARY CLASS


function count() {
  var n = 0
  for (var key in this.datastore) {
    ++n
  }
  return n
}

// console.log(pbook.count());

//But why not work with LENGTH property ?? >> this question solve in page 91 in the book

// var nums() = new Array()
//
// nums[0] = 1
// nums[1] = 2
//
// var pbook = new Array()
//
// pbook["David"] = 1
// pbook["Jennifer"] = 2
// console.log(pbook.length);
//functionName

function clear() {
  for (var key in this.datastore) {
    if (this.datastore.hasOwnProperty(key)) {
      delete this.datastore[key]
    }
  }
}

// pbook.clear()
// console.log('in this moment are ' + pbook.count() + ' elements after apply clear method');
