function mensaje(event){
  let mensajename = document.getElementById("validacionNombre").innerHTML="campo obligatorio"
}
function mensajeLenguaje(event){
let mensajeLengua= document.getElementById("mensajeSelect").innerHTML="campo obligatorio"
}

function validateName(event) {
    let mensaje = document.getElementById("validacionNombre")
    if (nombre.value.trim().length ==0 || nombre.value.trim().length ==""){
      mensaje.innerHTML = " campo obligatorio"
    }if(nombre.value.trim().length >=1 && nombre.value.trim().length -10){
      mensaje.innerText=" un minimo de 10 caracteres"  
    } 
    if(nombre.value.trim().length >=10 ){
      mensaje.innerText=" "  
    } 
    return true;  
}
function selectLenguaje(event) {
  addEventListener
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
function animacionMensaje(event) {
  let enviar = document.getElementById("envio")
  if (enviar.value==true) { 

    
  }
  
}

//el status de una orden realizada es 200 trabajar el fi condional con el estado del formularioo