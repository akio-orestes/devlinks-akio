function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // troca de imagem de perfil
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    //se estivermos no 'light' mode, adicionar profile img light:
    img.setAttribute("src", "./assets/avatar-light.png")
    //se não, mantemos a imagem padrão:
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}



  /* Versão extensa do toggle: 

  function toggleMode() {
  const html = document.documentElement

  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }
} 
  */
