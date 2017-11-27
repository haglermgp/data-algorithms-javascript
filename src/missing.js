'use strict'

var similarity = require("similarity")
var jsDiff = require("diff")

function CompareWords() {
  this.input_user_lesson = new Array()
  this.input_system_lesson = new Array()
  this.result_lesson = {words: [], number_error: [], puntaje: ''}
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


// con esta funcion evaluacion las diferencas, contamos los errores por palabra y los almacenamos en un objeto >> 'result_lesson'
function evalDiff() {
  let system = this.input_system_lesson.toLowerCase()
  let user1 = this.input_user_lesson.toLowerCase().replace(/  +/g, ' ')

  let diff = jsDiff.diffChars(system, user1)

  let user2 = ""

  for (var i = 0; i < diff.length; i++) {
    if ( diff[i].added == undefined && diff[i].removed == undefined ) {
      user2 += diff[i].value
      user2 += ' '
    }else if (diff[i].value == " " && diff[i].removed !== undefined) {
      user2 += diff[i].value
    }else if (diff[i].value !== " " && diff[i].added ) {
      user2 += diff[i].value.replace(/ +/g, '') 
    }
  }
  console.log(diff);
  console.log(user2);
  
  let user3 = user2.split(" ")
  let system3 = system.replace(/  +/g, ' ').split(" ")
  let puntaje = similarity(system, user2)
  let puntaje_temporal = 0

  system3.forEach( (el, index) => {
      let count_remove = 0
      let count_added = 0

      let diffeach = jsDiff.diffChars(system3[index], user3[index])
      for (var i = 0; i < diffeach.length; i++) {
        if (diffeach[i].removed) {
          ++count_remove
        }else if (diffeach[i].added) {
          ++count_added
        }
      }

      this.result_lesson.number_error.push(Math.max(count_added, count_remove))
      this.result_lesson.words.push(el)
  })

  let max_error = 0
  for (var i = 0; i < this.result_lesson.number_error.length; i++) {
    max_error = Math.max(max_error, this.result_lesson.number_error[i])
  }

  switch (max_error) {
    case 0:
      puntaje_temporal = 1
      break
    case 1:
      puntaje_temporal = 0.5
      break
    default:
      puntaje_temporal = -1
  }

  this.result_lesson.puntaje = puntaje_temporal
}


let evalLeson = new CompareWords()

evalLeson.takeValues('hola a todos', 'holiatodos' )
evalLeson.evalDiff()

console.log(evalLeson);
