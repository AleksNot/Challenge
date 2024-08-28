var botonEncriptar = document.querySelector(".introducir__encriptar__botonencriptar");
var botonDesencriptar = document.querySelector(".introducir__desencriptar__botondesencriptar");
var munieco = document.querySelector(".encriptar__imagen");
var contenedor = document.querySelector(".encriptar__parrafo");
var resultado = document.querySelector(".encriptar__botonresultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var lacajadetexto = recuperarTexto()
    resultado.textContent = encriptarTexto(lacajadetexto);
}

function desencriptar(){
    ocultarAdelante();
    var lacajadetexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(lacajadetexto);
}

function recuperarTexto(){
    var lacajadetexto = document.querySelector(".lacajadetexto")
    return lacajadetexto.value
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".encriptar__botoncopiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".encriptar__botonresultado").textContent;
    navigator.clipboard.writeText(contenido);
});