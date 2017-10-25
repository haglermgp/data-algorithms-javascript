'use strict'

var similarity = require("similarity")
var jsDiff = require("diff")

function CompareWords() {
  this.input_user_lesson = new Array()
  this.input_system_lesson = new Array()

  //my functiones
  this.evaluateWords = evaluateWords
  this.takeValues = takeValues
  this.evalDiff = evalDiff
}

function takeValues(system, user) {
  this.input_system_lesson = system
  this.input_user_lesson = user
}

function evaluateWords() {

  let system = this.input_system_lesson.toLowerCase().split(' ')
  // let user = this.input_user_lesson.toLowerCase().split('  ')
  let user1 = this.input_user_lesson.toLowerCase().replace(/  +/g, ' ').split(' ');

  let user = user1.filter((el) => {
    return el !== ""
  })

  if (system.length = user.length) {
    for (var i = 0; i < system.length; i++) {
      console.log(system[i], user[i]);
      console.log(similarity(system[i], user[i]));
    }
  }
}


function evalDiff() {
  let system = this.input_system_lesson.toLowerCase()
  // let user = this.input_user_lesson.toLowerCase().split('  ')
  let user = this.input_user_lesson.toLowerCase()

  let diff = jsDiff.diffChars(system, user)

  // diff.forEach(function (part) {
  //   let value
  //   if (part.added) {
  //     value = part.value.toUperCase()
  //   }else if (part.removed) {
  //
  //   }
  //
  // })

  let simm = similarity(system, user)
  console.log(diff);
  console.log(simm);
}


let evalLeson = new CompareWords()

evalLeson.takeValues('unai scomo esta tu', 'unay como estas tu' )
evalLeson.evalDiff()
