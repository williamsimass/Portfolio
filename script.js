var titulo = "William Simas"; // o título que será escrito
  var subtitulo = "Programador e Desenvolvedor. HTML | CSS | Javascript | Python | MySQL ."; // o subtítulo que será escrito
  var tempo = 50; // o tempo em milissegundos entre cada letra

  escreverTitulo(titulo, 0, tempo);
  escreverSubtitulo(subtitulo, 0, tempo);

  // a função que escreve o título letra por letra com fade-in
  function escreverTitulo(titulo, indice, tempo) {
    if (indice < titulo.length) {
      // escreve a próxima letra e adiciona a classe de fade-in
      document.getElementById("titulo").innerHTML += "<span class='fade-in'>" + titulo.charAt(indice) + "</span>";
      // chama a função novamente após o tempo definido
      setTimeout(function() {
        escreverTitulo(titulo, indice + 1, tempo);
      }, tempo);
    }
  }
// a função que escreve o subtítulo letra por letra com fade-in
function escreverSubtitulo(subtitulo, indice, tempo) {
    if (indice < subtitulo.length) {
      // escreve a próxima letra e adiciona a classe de fade-in
      document.getElementById("subtitulo").innerHTML += "<span class='fade-in'>" + subtitulo.charAt(indice) + "</span>";
      // chama a função novamente após o tempo definido
      setTimeout(function() {
        escreverSubtitulo(subtitulo, indice + 1, tempo);
      }, tempo);
    }
  }

  // Aqui sobre mim //
  
  var sobre = "Sobre"; // o título que será escrito
  var sobreeu = "Me chamo William Mauricio Simas Sousa, atualmente cursando ADS no 3º Semestre e fazendo curso de programador full stack, faço alguns projetos que irei apresentar abaixo de acordo com os meus conhecimentos adquiridos de estudo.";       
  var tempo = 50; // o tempo em milissegundos entre cada letra

  escreverSobre(sobre, 0, tempo);
  escreverSobreeu(sobreeu, 0, tempo);
  
  // a função que escreve o título letra por letra com fade-in
  function escreverSobre(sobre, indice, tempo) {
    if (indice < sobre.length) {
      // escreve a próxima letra e adiciona a classe de fade-in
      document.getElementById("sobre").innerHTML += "<span class='fade-in'>" + sobre.charAt(indice) + "</span>";
      // chama a função novamente após o tempo definido
      setTimeout(function() {
        escreverSobre(sobre, indice + 1, tempo);
      }, tempo);
    }
  }
  // a função que escreve o subtítulo letra por letra com fade-in
  function escreverSobreeu(sobreeu, indice, tempo) {
    if (indice < sobreeu.length) {
      // escreve a próxima letra e adiciona a classe de fade-in
      document.getElementById("sobreeu").innerHTML += "<span class='fade-in'>" + sobreeu.charAt(indice) + "</span>";
      // chama a função novamente após o tempo definido
      setTimeout(function() {
        escreverSobreeu(sobreeu, indice + 1, tempo);
      }, tempo);
    }
  }
  // Adicionando evento de clique ao botão
document.getElementById("submit-btn").addEventListener("click", function() {
  // Mostrando caixa de alerta
  alert("E-mail enviado com sucesso!");
});

  document.querySelector("button[type='submit']").addEventListener("click", function(){
    document.querySelector("#alert-box").classList.remove("hidden");
});