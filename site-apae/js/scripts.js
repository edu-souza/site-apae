if(window.SimpleSlide) {
  new SimpleAnime();

  new SimpleSlide({
    slide: 'comments', // nome do atributo data-slide="principal"
    nav: true, // se deve ou não mostrar a navegação
    auto: true, // se o slide deve passar automaticamente
    time: 7000, // tempo de transição dos slides
    pauseOnHover: false, // pausa a transição automática
  });
}

new SimpleAnime();
