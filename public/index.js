const menu = document.getElementById('menu')
const menuOpen = document.getElementById('menu-icon-open')
const menuClose = document.getElementById('menu-icon-close')
const links = document.querySelectorAll('#menu a')

menuOpen.addEventListener('click', () => {
  menu.classList.toggle('active')
})

menuClose.addEventListener('click', () => {
  menu.classList.remove('active')
})

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.toggle('active')
  })
})


const $form = document.getElementById("contact-form-id")

$form.addEventListener("submit", handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()

  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  })

  if(response.ok) {
    this.reset()
    alert('¡Gracias por contactarnos!, En breve nos comunicaremos para responder su consulta.')
  } else {
    this.reset()
    alert('¡Hubo un problema al enviar el formulario!')
  }
}