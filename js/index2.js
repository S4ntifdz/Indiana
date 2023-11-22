window.addEventListener('DOMContentLoaded', function () {

    const dataContents = Array.from(document.getElementsByClassName('data_content_by_link'))
    const navItems = Array.from(document.getElementsByClassName('nav-link2'))

    const expansiveBarBtn = document.getElementById('id-navbar-toggler')
    const expansiveBar = document.getElementById('navbarNav')

    /* BEGIN - HIDE/SHOW DATA CONTENTS BY URL */
    const urlParams = new URLSearchParams(window.location.search)
    const selected = urlParams.get('selected')

    if (selected) {
        /* hide data contents */
        hideDataContent(dataContents)

        /* show data contents */
        showDataContent(selected)

        /* set navbar item color by url */
        if (navItems[selected]) {
            navItems[selected].style.color = '#ac0000'
        }
    }
    /* END - HIDE/SHOW DATA CONTENTS BY URL */

    /* BEGIN - HIDE/SHOW NAVBAR ITEMS COLOR AND DATA CONTENTS */
    const itemState = new Array(navItems.length).fill(false)

    navItems.forEach(function(item, index) {
        /* set navbar item color = true every time the window is loaded */
        window.addEventListener('load', function () {
            itemState[index] = true
        })

        /* show and hide color to the navbar's items */
        item.addEventListener('mouseover', function () {
            if (!itemState[index]) {
                this.style.color = '#ac0000'
            }
        })

        item.addEventListener('mouseout', function () {
            if (!itemState[index]) {
                this.style.color = ''
            }
        })

        /* show and hide contents by clicking the items */
        item.addEventListener('click', function () {

            // collapse navbar when click navitem
            expansiveBar.setAttribute('class', 'navbar-collapse collapse')
            expansiveBarBtn.setAttribute('aria-expanded', 'false')
            // collapse navbar when click navitem
            
            itemState.fill(false)
            navItems.forEach(function(item_color) {
                item_color.style.color = ''
            })
            this.style.color = '#ac0000'
            itemState[index] = true

            if (index == 0) {
                window.location.href = 'index.html'
            }
            if (index == 1) {
                hideDataContent(dataContents)
                showDataContent(index)
            }
            if (index == 2) {
                hideDataContent(dataContents)
                showDataContent(index)
            }
            if (index == 3) {
                hideDataContent(dataContents)
                showDataContent(index)
            }
            if (index == 4) {
                hideDataContent(dataContents)
                showDataContent(index)
            }
            if (index == 5) {
                hideDataContent(dataContents)
                showDataContent(index)
            }
            if (index == 6) {
                hideDataContent(dataContents)
                showDataContent(index)
            }
        })
    })
    /* END - HIDE/SHOW NAVBAR ITEMS COLOR AND DATA CONTENTS */

    /* hide data contents */
    function hideDataContent(dataContents) {
        dataContents.forEach(function(data) {
            data.style.visibility = 'hidden'
            data.style.opacity = '0'
        })
    }

    /* show data contents */
    function showDataContent(dataIndex) {
        const elementToShow = document.getElementById('data_content_' + dataIndex)
        if (elementToShow) {
            elementToShow.style.visibility = 'visible'
            elementToShow.style.opacity = '1'
        }
    }

    // BEGIN - MODAL //
    const expandScreenBtn = Array.from(document.getElementsByClassName('expand_screen'))
    const modal = document.getElementById('id_modal')
    const closeModalButton = document.getElementById('id_modal_button')
    const showIframe = document.getElementById('show_iframe')
    const iframeContainer = Array.from(document.getElementsByClassName('media_videos'))

    modal.style.display = 'none'

    expandScreenBtn.forEach(function (button, index) {
        button.addEventListener('click', function () {
            if (index == 0) {
                showModal(index)
            }
            if (index == 1) {
                showModal(index)
            }
            if (index == 2) {
                showModal(index)
            }
            if (index == 3) {
                showModal(index)
            }
            if (index == 4) {
                showModal(index)
            }
            if (index == 5) {
                showModal(index)
            }

        })
    })

    function showModal(index) {
        showIframe.innerHTML = ''
        showIframe.appendChild(iframeContainer[index].cloneNode(true))

        modal.style.display = 'block'
        closeModalButton.addEventListener('click', function () {
            modal.style.display = 'none'
        })
    }
    // END - MODAL //

    /* BEGIN - HIDE/SHOW DATA CONTENTS BY URL */

    $(document).ready(function() {
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
          setTimeout(autoAdvance, 2000);
        }
  
        // Iniciar el temporizador automático
        autoAdvance();
  
        // Manejar el evento de clic en el botón "Siguiente"
        $('#nextButton').on('click', function() {
          nextSlide();
        });
      });

    
})



