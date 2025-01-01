let sidebar=document.querySelector('.header')

function openmenu(){
    sidebar.style.top="0px";
}
function closemenu(){
    sidebar.style.top="-600px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycby-3_f54PZ69LOMVuI5tMH75_Sg5xeF7mFWioWKdq3JS2nCWMQvI_aA2go4X6BVSP10bQ/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML="Message sent successfully"
          setTimeout(function(){
            msg.innerHTML=""
          },3000)
          form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
