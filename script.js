let nome = document.querySelector("h1");
let personagem = document.querySelector("#imgBig");

function mudarImagem(pers, cor, img) {
  nome.innerHTML = pers;
  nome.style.color = cor;
  personagem.src = img;
}

function lerFoto(foto) {
  // let foto = foto.files[0];
  let leitor = new FileReader();
  leitor.readAsDataURL(foto.files[0]);
  leitor.onload = async function () {
    // await - Mandando o sistema esperar para ir até o server
    let desenho = await puter.ai.txt2img(
      "Transforme a pessoa desta foto em um personagemcde videogame: contorno preto grosso, cores vivas, meio corpo, mantendo o rosto parecido. Fundo totalmente transparente: sem cenário, sem chão e sem sombras.",
      {
        model: "/gpt-image-2.5-flare",
        provider: "openai",
        input_image: leitor.result,
        quality: "medium",
        providerOptions: { background: "transparent" }
      },
    );

    mudarImagem("Você", "#ffd319", desenho);
  };
}
