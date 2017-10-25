// 'use strict'
// function EvaluateLesson() {
//   this.info_lesson = new Object()
//   // this.input_system_lesson = new Array()
//   // this.input_user_lesson = new Array()
//
//   //function to use in compare process
//   this.takeValues = takeValues
//   this.evalCompare = evalCompare
//   // this.loopCompare = loopCompare
// }
//
// function takeValues(system, user) {
//   this.info_lesson.input_system_lesson = system
//   this.info_lesson.input_user_lesson = user
// }
//
// function evalCompare() {
//   let index_user = 0
//   let user_err = {}
//   user_err.detail = []
//
//   let system = this.info_lesson.input_system_lesson.toLowerCase().replace(/ /g, '').split('')
//   let user = this.info_lesson.input_user_lesson.toLowerCase().replace(/ /g, '').split('')
//   this.info_lesson.user_err = user_err
//
//   for (let i = 0; i < system.length; i++) {
//
//     if (system[i] == user[index_user]) {
//
//       ++index_user
//     }else {
//       let state = true
//       while (state) {
//
//         if (system[i] == user[index_user] ) {
//
//           state = false
//         }else {
//
//           user_err.detail.push({
//             'index': index_user,
//             'caracter': user[index_user]
//           })
//         }
//         ++index_user
//       }
//     }
//   }
//
// }
//
//
// let system_val = 'hello goodbye'
// let user_val = 'hello oodbye'
//
//
//
// console.log(evalLesson);
