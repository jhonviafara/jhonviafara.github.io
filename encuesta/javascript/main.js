function validateName(event) {
    let mensaje = document.getElementById("validacionNombre")
    if (nombre.value.trim().length ==0 || nombre.value.trim().length ==""){
      mensaje.innerHTML = " campo obligatorio"
    }if(nombre.value.trim().length >=1){
      mensaje.innerText=""  
    }   
}
function selectLenguaje(event) {
    let textSelect = document.getElementById("mensajeSelect")
         if(validationlenguaje.value==0 ||  validationlenguaje.value=="") {
      textSelect.innerHTML="campo obligatorio"
    }if( validationlenguaje.value >= 1){
      textSelect.innerHTML="Lenguaje seleccionado:"
    } 
}
function validateExperi(event) {
  let mensajeAlert = document.getElementById("mensajeExperiencia")
    if (añosExperiencia.value==0 || añosExperiencia.value=="" || añosExperiencia.value-0) {
      mensajeAlert.innerHTML="seleccione un minimo de un año "
    } if (añosExperiencia.value >0) {
      mensajeAlert.innerHTML="campo lleno"
    }}

