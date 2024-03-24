
const btnAviso = document.getElementById("btn-aviso")
const btnCloseAviso =  document.getElementById("btn-okay") 
const capa = document.getElementById("capa-principal")

const desplegar = () => {
  capa.classList.remove("hidden")
  capa.classList.add("visible")
}

const cerrarDespliegue = () => {
  capa.classList.remove("visible")
  capa.classList.add("hidden")
}

btnAviso.addEventListener("click", desplegar)
btnCloseAviso.addEventListener("click", cerrarDespliegue)