// CHAPTER 2 ARRAYS

// Arrays? >> linear collection of elements

  // // ....... How to create ARRAYS .......
  // var number = []; //empty ARRAY
  //
  // var number = [1,2,3,4,5]; //array of six elements
  //
  // //array constructor
  // var number1 = new Array(); //empty Array
  //
  // var number1 = new Array(1,2,3,4,5); //array of the 6 elements
  //
  // //you can create array with diferents type of values
  // var number2 = new Array(1, "joe", true, null);
  //
  // //how to know if the an object is an array
  //
  // var tree = 3;

  // console.log(Array.isArray(tree));
  // console.log(Array.isArray(number2));

//CREATING ARRAYS FROM STRING

//we make the array from the simple string of words
    // var sentence = "this is the moment for build something";
    // var words = sentence.split(" ");
    // for(var i=0; i< words.length; ++i){
    //   console.log("word"+ i + ": " + words[i]);
    // }



//-----AGGREGATE ARRAY OPERATIONS

  // var nums = [];
  // for (var i=0; i<10; ++i){
  //   nums[i] = i+1
  // }
  // //this make array of sum of number, start number 1 to 10
  // var sameNums = nums;
  // // console.log(sameNums);

// var nums = [];
// for(var i = 0; i<100; ++i){
//   nums[i] = i+1;
// }
// var saneNums = nums; //this make array of the sum 1 and 100
// console.log(saneNums);
// nums[0] = 400; //we replace the 0 (first element of array nums) with number 400



//----- SHALLOW COPY  each of the original arrays elements is actyally copied to the new array's elements

    // function copy(arr1, arr2) {
    //   for (var i = 0; i < 100; i++) {
    //     arr2[i] = arr1[i];
    //   }
    // }
    //
    // var nums = [];
    // for (var i = 0; i < 100 ; i++) {
    //   nums[i] = i+1;
    // }
    //
    // var sameNums = [];
    // copy(nums, sameNums);
    // nums[0] = 400;
    // console.log(sameNums[0]);

// SEARCHING FOR A VALUE ----- accessor functions

    // var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
    // // "Enter a name to search for:
    // var name = "Raymond";
    // var position = names.indexOf(name);
    // if(position >= 0){
    //   console.log("Found " + name + " at position " + position);
    // }else {
    //   console.log(name + " not found in array.");
    // }


//CREATE NEW ARRAY FROM EXISTING ARRAY

    // var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
    // var dmpDept = [true , "Cynthia", "Bryan"];
    //
    // var itDiv = cisDept.concat(dmpDept);
    // var itDiv2 = dmpDept.concat(cisDept);
    //
    // console.log(itDiv);
    // console.log(itDiv2);

// NOTE: ADDING AND REMOVING ELEMENT FROM THE MIDDLE OF AN ARRAY

  // var nums = [1,2,3,7,8,9];
  // var newElements = [4,5,6];
  // nums.splice(3,0,newElements);
  // console.log(nums);
  //
  // //this sort method order with proccess data and nothing proccess data
  // function compare(num1, num2) {
  //   return num1 - num2;
  // }
  //
  // var numers = [3,1,2,100,200]; //when order numbers with sort, we need insert a ordering function as the first argument of the sort
  // numers.sort(compare);
  // console.log(numers);

// NOTE: SOME() METHOD
//the some() function will take a boolean function and return true if at least one of the elements in the array meets the criterion of the boolean function.

    // function isEven(num) {
    //   return num % 2 == 0;
    // }

    // var evenNum = [1,2,3,4,5,6,7];
    // var NoEvenNum = [3,5,9,7];
    // var someEven1 = evenNum.some(isEven);
    // var someEven2 = NoEvenNum.some(isEven);
    //
    // if(someEven1){
    //   console.log("some number is even : [1,2,3,4,5,6]");
    // }else {
    //   console.log("no numbers is even");
    // }
    // if(someEven2){
    //   console.log("some number is even");
    // }else {
    //   console.log("no numbers is even : [3,5,9,7]");
    // }

    // function afterc(srt) {
    //   if(srt.indexOf('ie') > -1){
    //     return true;
    //   }
    //   return false;
    // }
    //
    //
    // var words = ["recieve","deceive","percieve","deceit","concieve","archieve"];
    // var misspelled = words.filter(afterc);
    //
    // var word='tieliele'
    // console.log(word.indexOf('tieliel')); //the indexOf return the letter position of the string, beggining of the '0' --- if the letter not exist in the string, return -1
    // console.log(words)
    // console.log(misspelled)


// NOTE: TWO-DIMENSIONAL AND MULTIDIMENSIONAL ARRAYS
//Arrays of arrays like a spreadsheet whit rows and columns.
// we defined the number of the rows, only rows, because the columns maybe infitie

var twod = [];
var rows = 5;

for (var i = 0; i < rows; ++i){
  twod[i] = [];
}

console.log(twod);

Array.dim = function (dimension, initial) {
    var a = [], i;
    for (i = 0; i < dimension; i += 1) {
        a[i] = initial;
    }
    return a;
};

var myArray = Array.dim(10,8);

console.log(myArray);

Array.matrix = function (m, n, initial){
  var a, i, j, mat = {};
  for (var i = 0; i < m; i++) {
    a = [];
    for (var j = 0; j < n; j++) {
      a[j] = initial;
    }
    mat[i] = a;
  }
  return mat;
}

var myMatrix = Array.matrix(4,4,0)

console.log(myMatrix);

Array.identity = function (n) {
  var i, mat = Array.matrix(n,n,0);
  for (var i = 0; i < n; i++) {
    mat[i][i] = 1;
  }
  return mat;
}

myMatrix = Array.identity(3)

console.log(myMatrix);

var grades = [[89, 88, 0],[76, 82, 81],[91, 94, 89]]

var total = 0

var average = 0.0

for (var row = 0; row < grades.length; row++) {
  for (var col = 0; col < grades[row].length; col++)  {

    total += grades[row][col];
  }
  average = total / grades[row].length;
  console.log("student " + parseInt(row + 1) + " average: " + average.toFixed(2));
  total = 0;
  average = 0.0;
}
