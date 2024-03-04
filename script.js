function login() {
    var email = document.getElementById("usuario").value;
    var password = document.getElementById("contrasena").value;


    if (email === "usuario@gmail.com" && password === "contraseña") {
        window.location.href = "login.html";
    } else if (email === "prueba@prueba.com" && password === "contraseña2") {
        window.location.href = "login.html"; 
    } else {
        alert ("Credenciales incorrectas. Por favor, inténtalo de nuevo.") ;
    }
}