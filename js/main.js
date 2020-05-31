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
   var name = document.getElementById('name').value
   if (name === null || name === '' || name.length < 3)
      warnStack.name.push('El nombre debe tener al menos 3 letras')
   else
      inputLog.name = name

   return
}

var checkSurname = function () {
   var surname = document.getElementById('surname').value
   if (surname === null || surname === '' || surname.length < 3)
      warnStack.surname.push('El apellido debe tener al menos 3 letras')
   else
      inputLog.surname = surname

   return
}

var checkEmail = function () {
   var email = document.getElementById('email').value

   if (email.length < 5) 
      warnStack.email.push('El email debe tener al menos 5 caracteres')
   else {
      // regular expression for validate email
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (!re.test(email))
         warnStack.email.push('Email no valido')
      else 
         inputLog.email = email
   }

   return
}

var checkAge = function () {
   var age = document.getElementById('age').value

   var result = (age - Math.floor(age)) !== 0

   if (result)
      warnStack.age.push('La edad debe ser un numero entero')
   else
      if (age < 1 || age > 99)
         warnStack.age.push('La edad válida debe mayor a 0 y menor a 100')
      else
         inputLog.age = age
   
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
   var country = document.getElementById('country').value
   inputLog.country = country

   return
}

var getComment = function () {
   var comment = document.getElementById('comment').value
   inputLog.comment = comment
   
   return
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