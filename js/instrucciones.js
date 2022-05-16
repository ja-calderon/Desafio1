
//ajustar altura textarea de cuadro de ingreso de texto segun contenido
function ajustartextareamensaje() {
  const element = document.getElementById("mensaje");
  element.style.height = element.scrollHeight + "px";
}
document.addEventListener("input", ajustartextareamensaje);
//ajuste de altura textarea de salida segun contenido
function ajustartextarea() {
  const element = document.getElementById("resultado");
  element.style.height = element.scrollHeight + "px";
}
// copiar
function copiar() {
  var contentText = document.querySelector("#resultado");
  contentText.select();
  document.execCommand("copy");
  alert("Copiado al portapapeles");
}

//encriptar
function codificar() {
  var mensajeoriginal = document.getElementById("mensaje").value;
  var letra = document.getElementById("mensaje").value;
  if (/[A-Z]/.test(letra) || /[\u00C0-\u017F]/.test(letra)) {
    alert("Solo se aceptan letras minúsculas y sin acentos");
  } else {
    if (mensajeoriginal != "") {
      var mensajeacifrar;
      mensajeacifrar = mensajeoriginal.replace(/e/g, "enter");
      mensajeacifrar = mensajeacifrar.replace(/i/g, "imes");
      mensajeacifrar = mensajeacifrar.replace(/a/g, "ai");
      mensajeacifrar = mensajeacifrar.replace(/o/g, "ober");
      mensajeacifrar = mensajeacifrar.replace(/u/g, "ufat");
      document.getElementById("resultado").innerHTML = mensajeacifrar;
      ocultarmensaje();
      ajustartextarea();
    } else {
      alert("debe completar algo");
    }
  }
}

//descriptar
function decodificar() {
  var mensajeoriginal = document.getElementById("mensaje").value;
  var letra = document.getElementById("mensaje").value;
  if (/[A-Z]/.test(letra) || /[\u00C0-\u017F]/.test(letra)) {
    alert("Solo se aceptan letras minúsculas y sin acentos");
  } else {
    if (mensajeoriginal != "") {
      var mensajeadecifrar;
      mensajeadecifrar = mensajeoriginal.replace(/enter/g, "e");
      mensajeadecifrar = mensajeadecifrar.replace(/imes/g, "i");
      mensajeadecifrar = mensajeadecifrar.replace(/ai/g, "a");
      mensajeadecifrar = mensajeadecifrar.replace(/ober/g, "o");
      mensajeadecifrar = mensajeadecifrar.replace(/ufat/g, "u");
      document.getElementById("resultado").innerHTML = mensajeadecifrar;
      ocultarmensaje();
      ajustartextarea();
    } else {
      alert("debe completar algo");
    }
  }
}
//selector de mensajes de salida
function ocultarmensaje() {
  const mostrar = document.getElementById("cuadrosalida");
  if (mostrar.style.visibility == "hidden") {
    mostrar.style.visibility = "visible";
    mostrar.style.display = "flex";
  } else {
    mostrar.style.visibility = "visible";
    mostrar.style.display = "flex";
  }
  const mostrarcuadro = document.getElementById("cuadro-mensaje");
  if (mostrarcuadro.style.visibility == "visible") {
    mostrarcuadro.style.visibility = "hidden";
    mostrarcuadro.style.display = "none";
  } else {
    mostrarcuadro.style.visibility = "hidden";
    mostrarcuadro.style.display = "none";
  }
}
