
const mostrarApp = function mostrar(){
        document.getElementById('app').style.display = "grid";
    }
const ocultarApp = function ocultar(){
        document.getElementById('app').style.display = "none";
    }



document.addEventListener("DOMContentLoaded", () => {
    mostrarApp()
    console.log('test')
  })