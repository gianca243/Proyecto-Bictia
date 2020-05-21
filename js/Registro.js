function enviarDatos() {
    let validado = true
    let mensaje = ''
    let formulario = document.forms['Registro']

    let name = formulario['name'].value
    let lastName = formulario['lastName'].value
    let email = formulario['email'].value

    let password1 = formulario['password1'].value
    let password2 = formulario['password2'].value

    let genero = formulario['gendre'].value
    let fecha = formulario['birthdate'].value
    let telefono = formulario['tel'].value
    let ciudad = formulario['ciudad'].value
    let departamento = formulario['departamento'].value
    let terminos = formulario['checkTerminos'].checked

    var espacios = false;
    var cont = 0;

    // Validación y tratamiento de datos
    if (name == '' || lastName == '' || email == '' || password == '' || genero == '' || fecha == '' || ciudad || departamento) {
        validado = false
        mensaje += '- Debe completar todos los campos! <br>'
    }

    while (!espacios && (cont < p1.length)) {
        if (p1.charAt(cont) == " ")
            espacios = true;
        cont++;
    }
    if (espacios) {
        alert("La contraseña no puede contener espacios en blanco");
        validado = false;
    }

    if (p1.length == 0 || p2.length == 0) {
        alert("Los campos de la password no pueden quedar vacios");
        validado = false;
    }

    if (password1 != password2) {
        alert("Las passwords deben de coincidir");
        validado = false;
    } else {
        alert("Todo esta correcto");
        validado = true;
    }

    if (password1.length < 10) {
        validado = false
        mensaje += '- Su contraseña debe tener al menos 10 caracteres! <br>'
    }

    if (telefono.length > 10) {
        validado = false
        mensaje += '- El numero de telefono debe tener menos de 10 dígitos! <br>'
    }

    if (terminos == false) {
        validado = false
        mensaje += '- Debe aceptar los terminos y condiciones! <br>'
    }

    // JSON -> JavaScript Object Notation
    let datos = {
        email,
        password,
        name,
        lastName,
        genero,
        telefono,
        ciudad,
        departamento,
        fecha: fechaMmnt.format('ll')
    }

    let usuario = localStorage.getItem(email)
    if (usuario != null) {
        validado = false
        mensaje = 'Ya existe cuenta con este Correo!'
    }

    // Mostrar Mensaje de Alerta
    if (!validado) {
        let alerta = document.getElementById('register-alert')
        alerta.innerHTML = mensaje
        alerta.hidden = false

    } else {
        // Guardar los DATOS en el pc
        // fetch, axios -> enviar datos al servidor
        localStorage.setItem(datos.email, JSON.stringify(datos))
        localStorage.setItem('UsuarioLogueado', datos.email)
    }

    return validado
}