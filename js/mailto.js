function mailto_link(){
    var contactname = document.getElementById('contact-name').value;
    var contactemail = document.getElementById('contact-email').value;
    var contactcompany = document.getElementById('contact-name').value;
    var message = document.getElementById('contact-name').value;
    var body = "Nombre completo:"+ contactname + "        Correo de contacto:"+ contactemail + "        compañia" + contactcompany + "        mensaje:"+ message

    var mailto_link='mailto:info@cabanalaindiana.com'+'?subject=Datos de contacto'+'&body='+body
    win=window.open(mailto_link,'emailWin');
}