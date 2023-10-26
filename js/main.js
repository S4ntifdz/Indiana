window.addEventListener('DOMContentLoaded', function () {

    /* BEGIN - MODALS */
    const modal = document.getElementById('id_modal')
    const closeModalButton = document.getElementById('id_modal_button')
    const backgroundModal = document.getElementById('id_background_modal')

    backgroundModal.showModal()
    modal.showModal()

    closeModalButton.addEventListener('click', function () {
        modal.style.visibility = 'hidden'
        modal.style.opacity = 0
        modal.close()

        backgroundModal.style.visibility = 'hidden'
        backgroundModal.style.opacity = 0
        backgroundModal.close()
    })
    /* END - MODALS */

    /* BEGIN - TRANSLATIONS */
    const chooseLanguage = document.getElementById('id_change_language')
    chooseLanguage.addEventListener('change', changeLanguage)

    function changeLanguage() {
        currentLanguage = chooseLanguage.value;
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

})