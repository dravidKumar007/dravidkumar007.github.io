const scriptURL = 'https://script.google.com/macros/s/AKfycbzxzJhGq3K-c-ypgGNKlNn4Ks-3x2mxsveQLCebLgkxPfz_BAPFURPOEm3jlp4LF9EE/exec'
const form = document.forms['database']

form.addEventListener('submit', e => { 
  e.preventDefault()
  if(   document.getElementById('nametxt') && 
  document.getElementById('nametxt').value.trim() !== "" &&
  validateEmail(document.getElementById('Email').value) &&
  document.getElementById('txtf') &&   document.getElementById('txtf').value.trim() !== "" 
){
  
  var button=document.getElementById('messagebutton');
    button.style.color = 'white';
    button.innerHTML='<span style="border: 2px solid white; border-radius: 50%; color: greenyellow; background-color: white;">&#10003;</span> Submited';
    button.style.backgroundColor=' rgb(138, 231, 0)';
    button.style.pointerEvents=`none`;
   console.log('check');
}
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{ console.log('Success!', response)
   
  })
    .catch(error => console.error('Error!', error.message))
})

 
  function validateEmail(email) {
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

}
