function toggleMode() {
  //função dada na div switch
  const html = document.documentElement //chama o html com variável
  html.classList.toggle("light")
  //if (html.classList.contains("light")) {  verifica se contém light
  //html.classList.remove("light")         se contém ele remove
  //} else {                                 se não
  //  html.classList.add("light")            ele adiciona modo light
  //}

  //pegar a tag img.
  const img = document.querySelector("#profile img")
  //substituir a imgagem.
  if (html.classList.contains('light')){
    //se tiver light mode, adicionar a imagem light.
    img.setAttribute('src','./assets/avatar-light.png')
    img.setAttribute("alt", "Foto de Maiky Brito, professor discover com óculos")
  } else{
    //se não houver light mode, manter imagem inicial.
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute("alt", "Foto de Maiky Brito, professor discover")
  }
}
