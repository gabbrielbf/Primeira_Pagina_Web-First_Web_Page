function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  html.classList.toggle("light") // Função designada para realizar tudo que o "if e else" acima á fazem.

  // Caso queira trocar a imagem da página basta ler o código abaixo
  // Adicione a imagem desejada com as mesmas medidas na página do projeto.

  // Pegue a tag img <-
  // const img = document.querySelector("profile img") <- usamos esse nome pois é o mesmo que está guardada nossa imagem no arquivo CSS

  // Substituindo a imagem <-
  // if (html.classList.contains("light")){
  // Se tiver no light mode, adicione a imagem light <-
  // img.setAtribute("src", "./CAMINHO_DA_IMAGEM")
  // } else {
  // Se tiver dark mode, manter a imagem original <-
  // img.setAtribute("src", "./CAMINHO_DA_IMAGEM")
  // } Não tenho interesse em alterar a ImageBitmap, por isso está comentado mas caso mude de IdleDeadline, o passo a passo está acima.
}
