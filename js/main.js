window.addEventListener('DOMContentLoaded', function () {

    /* BEGIN - MODAL */
    const modal = document.getElementById('id_modal')
    const closeModalButton = document.getElementById('id_modal_button')

    modal.showModal()

    closeModalButton.addEventListener('click', function () {
        modal.close()
    })
    /* END - MODAL */
})