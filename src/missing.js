function EvaluateLesson() {
  this.info_lesson = new Object()
  // this.input_system_lesson = new Array()
  // this.input_user_lesson = new Array()

  //function to use in compare process
  this.takeValues = takeValues
  this.evalCompare = evalCompare
  // this.loopCompare = loopCompare
}

function takeValues(system, user) {
  this.info_lesson.input_system_lesson = system
  this.info_lesson.input_user_lesson = user
}

function evalCompare() {
  let system = this.info_lesson.input_system_lesson.toLowerCase().split('')
  let user = this.info_lesson.input_user_lesson.toLowerCase().split('')

  let user_correct = ''
  let user_err = new Object()

  user_correct = system.map((el, index) => {
    let count_err = 0
    let index_user = index
    debugger
    if (el == user[index_user]) {
      return true
    }else {
      let state = true
      while (state) {
        if (el == user[index_user]) {
          debugger
          state = false
        }

        user_err.index = index_user
        user_err.caracter = user[index_user]
        debugger

        ++count_err
        ++index_user
      }
    }
  })
}


let system_val = 'hello goodbye'
let user_val = 'hellow  goodbye'

let evalLesson = new EvaluateLesson()

evalLesson.takeValues(system_val, user_val)

evalLesson.evalCompare()

console.log(evalLesson.info_lesson);
console.log(evalLesson.info_lesson.input_system_lesson);
console.log(evalLesson.info_lesson.input_user_lesson);
