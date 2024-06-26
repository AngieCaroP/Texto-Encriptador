const textArea = document.querySelector("#texto-area");
const mensaje = document.querySelector("#campo-mensaje");
const muñecoImagen = document.querySelector(".muñeco");
const botonCopiar = document.querySelector(".copiar");
const botonPegar = document.querySelector(".pegar");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    muñecoImagen.style.display = "none"; // Oculta el muñeco al encriptar el mensaje
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

// Función para deshabilitar la escritura en el textarea del mensaje
function deshabilitarEscrituraMensaje() {
    mensaje.disabled = true;
}

// Llama a la función para deshabilitar la escritura en el textarea del mensaje
deshabilitarEscrituraMensaje();


function copiarMensaje() {
    mensaje.select();
    document.execCommand("copy");
}
botonCopiar.addEventListener("click", copiarMensaje);

function pegarTexto() {
    navigator.clipboard.readText().then((textoPegado) => {
        document.getElementById("texto-area").value = textoPegado;
         muñecoImagen.style.display = "none"; // Oculta el muñeco al pegar texto en el área de mensaje
    });
}


botonPegar.addEventListener("click", pegarTexto);

// Ocultar el muñeco cuando se hace clic en el área de mensaje
mensaje.addEventListener("click", function() {
    muñecoImagen.style.display = "none";
});
