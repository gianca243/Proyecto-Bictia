function enviarDatos() {
    let validado = true
    let mensaje = ''
    let formulario = document.forms['registro']
    let nombre = formulario['nombre'].value
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

    // Validación y tratamiento de datos
    if (name == '' || lastName == '' || email == '' || password == '' || genero == '' || fecha == '' || ciudad || departamento) {
        validado = false
        mensaje += '- Debe completar todos los campos! <br>'
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
        password1,
        nombre,
        lastName,
        genero,
        telefono,
        ciudad,
        departamento,
    }
    // Mostrar Mensaje de Alerta
    if (validado != true) {
        let alerta = document.getElementById('register-alert');
        alerta.innerHTML = mensaje;
        alerta.hidden = false;

    } else {
        // Guardar los DATOS en el pc
        // fetch, axios -> enviar datos al servidor
        localStorage.setItem('datos', JSON.stringify(datos));

    }
    return validado;
}