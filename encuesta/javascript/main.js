function validateName(event) {
    var mensaje = document.getElementById("validacionNombre")
    if (nombre.value.trim().length== ""  ) 
    {
      mensaje.innerHTML=" campo obligatorio"
    }
  if (nombre.value.trim().length >= 1) {
     mensaje.innerHTML="mas de 10 caracteres obligatorio";
  }
 if (nombre.value.trim().length >= 10) {
    mensaje.innerHTML="tamaño aceptado";
      if (nombre.value.trim().length >= 14 ) {
          mensaje.innerHTML=""

          
        }
  }
  if (nombre.value.trim().length >= 30 ) {
      mensaje.innerHTML="tamaño ecxedido";
  }
 
  
  return  true;
  
}
function selectLenguaje(event) {
    
}