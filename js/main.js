window.addEventListener('DOMContentLoaded', function () {

  /* BEGIN - TRANSLATIONS */
  const chooseLanguage = document.getElementById('id_change_language')
  const formControl = Array.from(document.getElementsByClassName('form-control'))
  const sendFormBtn = document.getElementById('sendFormBtn')

  chooseLanguage.addEventListener('change', function () {
    if (chooseLanguage.value == 'es') {
      formControl[0].placeholder = 'Nombre completo'
      formControl[2].placeholder = 'Empresa'
      formControl[3].placeholder = 'Nombre completo'
      sendFormBtn.value = 'Enviar'
    }
    if (chooseLanguage.value == 'en') {
      formControl[0].placeholder = 'Full name'
      formControl[2].placeholder = 'Company'
      formControl[3].placeholder = 'Message'
      sendFormBtn.value = 'Send'
    }

  })

  chooseLanguage.addEventListener('change', changeLanguage)

  function changeLanguage() {
    currentLanguage = chooseLanguage.value
    path = 'i18n/' + currentLanguage + '.json'

    fetch(path)
      .then((response) => response.json())
      .then((translations) => {
        const elements = document.querySelectorAll('[data-translate]')
        elements.forEach((element) => {
          const key = element.getAttribute('data-translate')
          element.textContent = translations[key]
        })
      })
  }
  /* END - TRANSLATIONS */

  /* BEGIN - REDIRECTS */
  const navItems = Array.from(document.getElementsByClassName('nav-link'))

  navItems.forEach(function (item, index) {
    item.addEventListener('click', function () {
      if (index >= 1) {
        window.location.href = `index2.html?selected=${index}`
      }
    })
  })
  /* END - REDIRECTS */

  $(document).ready(function () {
    let currentIndex = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
      slides.hide();
      slides.eq(index).show();
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    }

    function autoAdvance() {
      nextSlide();
      setTimeout(autoAdvance, 3000);
    }

    // Iniciar el temporizador automático
    autoAdvance();

    // Manejar el evento de clic en el botón "Siguiente"
    $('#nextButton').on('click', function () {
      nextSlide();
    });
  });
  

})



