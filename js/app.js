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
   var { value } = document.getElementById('surname')
   if (value === null || value === '' || value.length < 3)
      warnStack.surname.push('El apellido debe tener al menos 3 letras')

   return;
}

const checkEmail = function () {
   var { value } = document.getElementById('email')

   if (value.length < 5)
      warnStack.email.push('El email debe tener al menos 5 caracteres')
   else {
      // regular expression for validate email
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (!re.test(value))
         warnStack.email.push('Email no valido')
   }

   return;
}

const checkAge = function () {
   var { value } = document.getElementById('age')

   var result = (value - Math.floor(value)) !== 0

   if (result) 
      warnStack.age.push('La edad debe ser un numero entero')
   else
      if (value < 1 || value > 99)
         warnStack.age.push('La edad válida debe mayor a 0 y menor a 100')
   
   return;
}

const errorBuilder = function () {
   var errorName = document.getElementById('errorName')
   errorName.innerHTML = warnStack.name

   var errorSurname = document.getElementById('errorSurname')
   errorSurname.innerHTML = warnStack.surname

   var errorEmail = document.getElementById('errorEmail')
   errorEmail.innerHTML = warnStack.email.join('. ')

   var errorAge = document.getElementById('errorAge')
   errorAge.innerHTML = warnStack.age

   var rs = warnStack.name.length + warnStack.surname.length + warnStack.email.length + warnStack.age.length

   if (rs > 0) {
      console.log(warnStack.name)
      console.log(warnStack.surname)
      console.log(warnStack.email)
      console.log(warnStack.age)
   }
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
   checkSurname()
   checkEmail()
   checkAge()
   errorBuilder()
   return
}

const events = function (e) {
   e.preventDefault()
   validator()
   return
}

const main = function () {
   var form = document.getElementById('form')
   form.addEventListener('submit', events)
   return;
}

main()