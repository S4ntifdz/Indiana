function mailto_link(){
    const contactname = document.getElementById('contact-name').value;
    const contactemail = document.getElementById('contact-email').value;
    const contactcompany = document.getElementById('contact-company').value;
    const message = document.getElementById('contact-message').value;
    const body = `Nombre completo: ${contactname}
    Correo de contacto: ${contactemail}
    Compañía: ${contactcompany}
    Mensaje: ${message}`


    const mailto_link=`mailto:info@cabanalaindiana.com?subject=Datos de contacto&body=${encodeURIComponent(body)}`
    win=window.open(mailto_link,'emailWin')
}