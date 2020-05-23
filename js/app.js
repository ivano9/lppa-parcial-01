'use strict' 

var warnStack = {
   name:    [],
   surname: [],
   email:   [],
   age:     []
}

const checkName = function () {
   var { value } = document.getElementById('name')
   if (value === null || value === '' || value.length < 3)
      warnStack.name.push('El nombre debe tener al menos 3 letras')
   
   return;
}

const checkSurname = function () {
   //TODO
}

const checkEmail = function () {
   //TODO
}

const checkAge = function () {
   //TODO
}

const errorBuilder = function () {
   var errorName = document.getElementById('errorName')
   errorName.innerHTML = warnStack.name.join('. ')
   return;
}

const messageCleaner = function () {
   warnStack.name    = []
   warnStack.surname = []
   warnStack.email   = []
   warnStack.age     = []

   return;
}

const validator = function () {
   messageCleaner()
   checkName()
   // checkSurname()
   // checkEmail()
   // checkAge()
   errorBuilder()
   return;
}

const events = function (e) {
   e.preventDefault()
   validator()
   return;
}

const main = function () {
   var form = document.getElementById('form')
   form.addEventListener('submit', events)
   return;
}

main()