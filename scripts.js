
//--------- Paso 1 ---------//

const html = document.querySelector ('html')
html.addEventListener('click', function(event) {
    event.preventDefault()
  })

  //-------- Paso 2 -------//

  const imagenes = document.querySelectorAll ('img')
  for (let i = 0; i < imagenes.length; i++) {
      imagenes[i].addEventListener('click', function (event) {
       event.target.src = GetRandom('./assets/')
    })
}

const parrafos = document.querySelectorAll ('section p')
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener('click', function (event) {
     event.target.style.backgroundColor = 'red'
     event.target.style.color = 'white'
     
  })
}
