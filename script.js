function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // se estiver lightmode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem lightmode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
