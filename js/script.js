'use strict;'

const form = document.querySelector('.form');
const email = document.querySelector('.email');
const errorMsg = document.querySelector('.msg');
const error = 'Valid email required';

const pag2 = document.querySelector('.emailVal')


document.addEventListener("DOMContentLoaded", function () {
  // Check if the element exists on the page before adding the event listener

  if (email) {
    form.addEventListener('submit', (event) => {
      let arrVal = email.value.split('');
      
      const atFilter = arrVal.filter(at => at === '@').length;
      const dotFilter = arrVal.filter(dot => dot === '.').length;
      
      //it's working arrVal.lastIndexOf('.') + 3 === arrVal.length - 1
      
      if (atFilter === 1 && dotFilter === 1 && arrVal.lastIndexOf('.') + 3 === arrVal.length - 1) {
        let store = sessionStorage.setItem('email', email.value)

        sessionStorage.setItem('email',email.value)
        
      } else {
        errorMsg.innerText = error;
        event.preventDefault();
        email.classList.add('error');
      }
      
      
    }, false);
    
  }
  
 if (sessionStorage.getItem('email')) {
   let myEmail = sessionStorage.getItem('email');
   pag2.innerHTML = myEmail;
 }

}); 

