function encriptar() {
    let texto = document.getElementById("texto-ingresado").value.toLowerCase(); // Convertir a minúsculas
  
    let textoCifrado = texto
    .replace(/u/g, '5julivisn')  
    .replace(/o/g, '4poersst') 
    .replace(/i/g, '3lajanns')
    .replace(/e/g, '2joitss')
    .replace(/a/g, '1zurben');  

    document.getElementById("titulo-mensaje").style.display = "none";
    document.getElementById("muneco").style.display = "none";

    // Si lo escrito es diferente a cero
    if (textoCifrado !== "") {
        document.getElementById("mensaje-cifrado").innerHTML = "Texto cifrado: " + textoCifrado;
        document.getElementById("mensaje-cifrado").style.color = "blue";
        document.getElementById("mensaje-cifrado").style.display = "block"; // Mostrar el mensaje cifrado
    } else {
        document.getElementById("mensaje-cifrado").innerHTML = "Debe ingresar un texto para cifrar";
        document.getElementById("mensaje-cifrado").style.color = "red";
        document.getElementById("mensaje-cifrado").style.display = "block"; // Mostrar el mensaje de error
        alert("Ingrese algún texto");
    }
}

function descifrar() {
    let textoCifrado = document.getElementById("texto-ingresado").value;
  
    let textoDescifrado = textoCifrado
    .replace(/1zurben/g, 'a')  //se deben invertir las letras
    .replace(/2joitss/g, 'e')
    .replace(/3lajanns/g, 'i')
    .replace(/4poersst/g, 'o')
    .replace(/5julivisn/g, 'u');  

    document.getElementById("titulo-mensaje").style.display = "none";
    document.getElementById("muneco").style.display = "none";

    // Si lo escrito es diferente a cero
    if (textoDescifrado !== "") {
        document.getElementById("mensaje-cifrado").innerHTML = "Texto descifrado: " + textoDescifrado;
        document.getElementById("mensaje-cifrado").style.color = "green";
        document.getElementById("mensaje-cifrado").style.display = "block"; // Mostrar el mensaje descifrado
    } else {
        document.getElementById("mensaje-cifrado").innerHTML = "Debe ingresar un texto para descifrar";
        document.getElementById("mensaje-cifrado").style.color = "red";
        document.getElementById("mensaje-cifrado").style.display = "block"; // Mostrar el mensaje de error
        alert("Ingrese algún texto");
    }
}

function reiniciar() {
    document.getElementById("texto-ingresado").value = "";
    document.getElementById("titulo-mensaje").style.display = "block";
    document.getElementById("muneco").style.display = "block";
    document.getElementById("mensaje-cifrado").style.display = "none"; // Ocultar el mensaje cifrado
    document.getElementById("mensaje-cifrado").innerHTML = ""; // Limpiar el contenido del mensaje cifrado
}
