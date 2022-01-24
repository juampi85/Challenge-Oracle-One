
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


var ingreso = document.querySelector("#input-texto");
var msjeEncriptado = document.querySelector("#msg");
var encriptador = document.querySelector("#btn-encriptar");
var desencriptador = document.querySelector("#btn-desencriptar");
var copiar = document.querySelector("#btn-copy");
var textoSinErrores = true;

ingreso.focus();

encriptador.addEventListener("click",function(event){
    event.preventDefault();
})

desencriptador.addEventListener("click",function(event){
    event.preventDefault();
})

encriptador.addEventListener("click",function(event){
    event.preventDefault();
})

function validadorTexto(texto){
    if (texto.length == 0){
        alert("Debe ingresar un mensaje a encriptar");
        textoSinErrores = false;
    } 
    else{    
        for(var i = 0; i < texto.length; i++){
            var codigoAscii = texto.charCodeAt(i);
            if(codigoAscii < 97 || codigoAscii > 122){
                if(codigoAscii != 32){
                    alert("ERROR!! Recuerde que no debe ingresar letras en mayúsculas, signos y/o acentos.");
                    textoSinErrores = false;
                }
            }
        }
    }
    return textoSinErrores;
}

function encriptando(){
var letrasReemplazo = [/e/g,/i/g,/a/g,/o/g,/u/g];
var reemplazos = ["enter","imes","ai","ober","ufat"];
var texto = ingreso.value;
validadorTexto(texto);
    if (textoSinErrores = true){ 
        for (var i = 0; i < letrasReemplazo.length; i++ ) {
        var textoencriptado = texto.replace(letrasReemplazo[i], reemplazos[i]);
        texto = textoencriptado;
        }
        msjeEncriptado.value = texto;
    }
    else {
        msjeEncriptado.value = "";
    }
}

function desencriptando(){
var reemplazos = [/enter/g,/imes/g,/ai/g,/ober/g,/ufat/g];
var letrasReemplazo = ["e","i","a","o","u"];
var texto = ingreso.value;
validadorTexto(texto);
    if (textoSinErrores = true){ 
        for (var i = 0; i < letrasReemplazo.length ; i++ ) {
        var msjeDesencriptado = texto.replace(reemplazos[i], letrasReemplazo[i]);
        texto = msjeDesencriptado;
        }
        msjeEncriptado.value = texto;
    }
    else {
        msjeEncriptado.value = "";
        }
    }

function copiandoMsje() {
        var msjeCopiado = document.getElementById("msg")
        msjeCopiado.select();
        msjeCopiado.setSelectionRange(0, 99999);
        document.execCommand("copy");
      }
      
encriptador.onclick = encriptando;

desencriptador.onclick = desencriptando;

copiar.onclick = copiandoMsje;