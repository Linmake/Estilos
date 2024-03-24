const toggleMenu = document.querySelector("#toggle-menu")
const itemMenu1 = document.querySelector("#item-menu-op1")
const itemMenu2 = document.querySelector("#item-menu-op2")
const itemMenu3 = document.querySelector("#item-menu-op3")
const itemMenu4 = document.querySelector("#item-menu-op4")


const desplegarToggle = () => {
  toggleMenu.classList.remove("hidden")
  toggleMenu.classList.add("visible")
}

const cerrarToggle = () => {
  toggleMenu.classList.remove("visible")
  toggleMenu.classList.add("hidden")
}

itemMenu1.addEventListener("mouseenter", desplegarToggle)
itemMenu2.addEventListener("mouseenter", desplegarToggle)
itemMenu3.addEventListener("mouseenter", desplegarToggle)
itemMenu4.addEventListener("mouseenter", desplegarToggle)

toggleMenu.addEventListener("mouseenter", desplegarToggle)
toggleMenu.addEventListener("mouseleave", cerrarToggle)