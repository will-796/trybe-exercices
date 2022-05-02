const btnSubmit = document.querySelector('#btnSubmit')

btnSubmit.addEventListener('click', padrao)

function padrao(event) {
  console.log('enviou');
  event.preventDefault()
}