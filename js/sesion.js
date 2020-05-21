function validarDatos() {
    let validado = true
    let mensaje = ''
    let formulario = document.forms['login']

    let email = formulario['email'].value
    let password = formulario['password1'].value

    let usuario = localStorage.getItem(email)
    if (usuario == null) {
        validado = false
        mensaje = 'El Correo no existe!'
    } else {
        let userObj = JSON.parse(usuario)
        if (password != userObj.password) {
            validado = false
            mensaje = 'La contraseña no es correcta!'
        } else {
            localStorage.setItem('UsuarioLogueado', email)
        }
    }

    // Mostrar Mensaje de Alerta
    if (!validado) {
        let alerta = document.getElementById('login-alert')
        alerta.innerHTML = mensaje
        alerta.hidden = false
    }

    return validado
}