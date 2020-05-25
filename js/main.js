'use strict'

var warnStack = {
   name:    [],
   surname: [],
   email:   [],
   age:     []
}

var inputLog = {
   name:     '',
   surname:  '',
   email:    '',
   age:      '',
   gender:   '',
   topics:   '',
   country:  '',
   comment:  ''
}

var checkName = function () {
   var {
      value
   } = document.getElementById('name')
   if (value === null || value === '' || value.length < 3)
      warnStack.name.push('El nombre debe tener al menos 3 letras')
   else
      inputLog.name = value

   return
}

var checkSurname = function () {
   var {
      value
   } = document.getElementById('surname')
   if (value === null || value === '' || value.length < 3)
      warnStack.surname.push('El apellido debe tener al menos 3 letras')
   else
      inputLog.surname = value

   return
}

var checkEmail = function () {
   var { value } = document.getElementById('email')

   if (value.length < 5) 
      warnStack.email.push('El email debe tener al menos 5 caracteres')
   else {
      // regular expression for validate email
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (!re.test(value))
         warnStack.email.push('Email no valido')
      else 
         inputLog.email = value
   }

   return
}

var checkAge = function () {
   var { value } = document.getElementById('age')

   var result = (value - Math.floor(value)) !== 0

   if (result)
      warnStack.age.push('La edad debe ser un numero entero')
   else
      if (value < 1 || value > 99)
         warnStack.age.push('La edad válida debe mayor a 0 y menor a 100')
      else
         inputLog.age = value
   
   return
}

var errorBuilder = function () {
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
      var arr = Object.values(warnStack)
      arr.forEach( function (el) {
         if (el.length > 0)
            console.error(el.join('. '))
      })
      return true
   } else return false
}

var getGender = function () {
   var gender = document.getElementsByName('gender')
   for (var i = 0; i < gender.length; i++) {
      if (gender[i].checked)
         inputLog.gender = gender[i].value
   }
   return
}

var getTopics = function () {
   var topics = document.getElementsByName('topic')
   for (var i = 0, str = []; i < topics.length; i++) {
      if (topics[i].checked)
         str.push(topics[i].value)
   }

   inputLog.topics = str.join(', ')

   return
}

var getCountry = function () {
   var { value } = document.getElementById('country')
   inputLog.country = value
}

var getComment = function () {
   var { value } = document.getElementById('comment')
   inputLog.comment = value
}

var messageCleaner = function () {
   warnStack.name    = []
   warnStack.surname = []
   warnStack.email   = []
   warnStack.age     = []

   return
}

var validator = function () {
   messageCleaner()
   checkName()
   checkSurname()
   checkEmail()
   checkAge()
   
   if (!errorBuilder()) {
      getGender()
      getTopics()
      getCountry()
      getComment()

      console.log(inputLog)
   }

   return
}

var events = function (e) {
   e.preventDefault()
   validator()
   return
}

var main = function () {
   var form = document.getElementById('form')
   form.addEventListener('submit', events)
   return
}

main()