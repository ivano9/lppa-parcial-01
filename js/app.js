'use strict' 

var warnStack = {
   name: [],
   surname: [],
   email: [],
   age: []
}

const checkName = function () {
   var name = document.getElementById('name')
   console.log(name.value)
}

const checkSurname = function (surname) {
   //TODO
}

const checkEmail = function (email) {
   //TODO
}

const checkAge = function (age) {
   //TODO
}

const validator = function () {
   checkName()
   // checkSurname()
   // checkEmail()
   // checkAge()
}

const events = function (e) {
   e.preventDefault()
   validator()
}

const main = function () {
   var form = document.getElementById('form')
   form.addEventListener('submit', events)
}

main()