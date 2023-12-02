function mailto_link(event){
    const contactname = document.getElementById('contact-name').value;
    const contactemail = document.getElementById('contact-email').value;
    const contactcompany = document.getElementById('contact-company').value;
    const message = document.getElementById('contact-message').value;
    const body = `Nombre completo: ${contactname}
    Correo de contacto: ${contactemail}
    Compañía: ${contactcompany}
    Mensaje: ${message}`

    event.preventDefault()

    const mailto_link=`mailto:santidinos@gmail.com?subject=Datos de contacto&body=${encodeURIComponent(body)}`
    win=window.open(mailto_link,'emailWin')
}