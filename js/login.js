var nombre = "";
var usuario = "";
var password = "";
var email = "";
var lusuario = "";
var lpassword = "";

function login() {
    //.............guardo los datos del formulario de login en variables...........
    lusuario = document.getElementById('lusuario').value;
    lpassword = document.getElementById('lpassword').value;

    var datos = JSON.parse(localStorage.getItem('datos'));
    usuario = datos['email'];
    password = datos['password1'];
    nombre = datos['nombre'];

    if (usuario == lusuario) //comparo variables usuario
    {
        if (password == lpassword) { //comparo variables password
            $('#logueado').html("Bienvenido " + nombre);
            alert("Bienvenido " + nombre); //si todo es correcto
            document.getElementById("lcerrar").click();
        } else {
            alert("Contraseña incorrecta"); //si contraseña incorrecta
        }
    } else {
        alert("Usuario desconocido"); //si usuario incorrecto
    }
    //...............cierro la ventana del modal de registro...............
}