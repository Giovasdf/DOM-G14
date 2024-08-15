document.getElementById("textoSaludo").innerHTML = "Hola este parrado fue hackeado";

// entradaUno
document.getElementById("entradaUno").value = "Click Aqui para ser hackeado";
document.getElementById("entradaUno").type = "button"
document.getElementById("entradaUno").setAttribute("style","color:red; background-color:yellow");
document.getElementById("entradaUno").setAttribute("onclick","window.location.href = 'http://www.google.cl'");
document.getElementById("entradaUno").setAttribute("onmousemove", "alert('Click para ser Hackeado')");