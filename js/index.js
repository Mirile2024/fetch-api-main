// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
fetch('https://randomuser.me/api/')
  .then(response => {
    return response.json()
  })
  .then(data => {
    //manipulamos la respuesta
    console.log(data);
    renderizarDatosUsuario(data);
  });

function renderizarDatosUsuario(data) {
  /* -------------------------------- CONSIGNA 1 -------------------------------- */
  // Aquí deben desarrollar una función que muestre en pantalla:
  // la foto, el nombre completo del usuario y su email.
  // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
  let src
  let firstName, lastName
  let email
  for (let i = 0; i < data.results.length; i++) {
    src = data.results[i].picture.large;
    firstName = data.results[i].name.first;
    lastName = data.results[i].name.last;
    email = data.results[i].email;
  }

  const div = document.querySelector('.tarjeta')
  const img = document.createElement('img')
  img.setAttribute('src', src)
  div.appendChild(img)
  const hr = document.createElement('hr')
  div.appendChild(hr)
  const nombre = document.createElement('p')
  nombre.classList.add('nombre')


  nombre.innerText = `Nombre: ${firstName + " " + lastName}`
  div.appendChild(nombre)
  const correo = document.createElement('p')
  correo.classList.add('email')
  correo.innerText = `Email: ${email}`
  div.appendChild(correo)

}

/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.
const random = document.querySelector('#random')
random.addEventListener('click', () => {
  fetch('https://randomuser.me/api/')
    .then(response => {
      return response.json()
    })
    .then(data => {
      // console.log(data);
      btn(data);
    });
    //confeti + en html(    <script id ="script" src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
  let count = 200;
  let defaults = {
    origin: {
      y: 0.7
    }
  };
  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });

})


function btn(data) {
  let src
  let firstName, lastName
  let email
  for (let i = 0; i < data.results.length; i++) {
    src = data.results[i].picture.large;
    firstName = data.results[i].name.first;
    lastName = data.results[i].name.last;
    email = data.results[i].email;
  }
  const img = document.querySelector('img')
  img.setAttribute('src', src)
  const nombre = document.querySelector('.nombre')
  nombre.innerText = `Nombre: ${firstName + " " + lastName}`
  const correo = document.querySelector('.email')
  correo.innerText = `Email: ${email}`
}










/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.