class Pintura {
  constructor() {
    this.imagenes = [
      'data/01.png',
      'data/02.png',
      'data/03.png',
      'data/04.png',
      'data/05.png',
      'data/06.png',
      'data/07.png',
      'data/08.png',
      'data/09.png',
      'data/10.png',
      'data/01.png',
      'data/12.png',
      'data/13.png',
      'data/14.png',
      'data/15.png',
      'data/16.png',
      'data/17.png',
      'data/18.png',
      'data/19.png',
      'data/20.png',
      'data/21.png',
      'data/22.png',
      'data/01.png',
      'data/02.png',
      'data/03.png',
      'data/04.png',
      'data/05.png',
      'data/06.png',
      'data/08.png',
      'data/08.png',
      'data/12.png',
      'data/13.png',
      'data/14.png',
      'data/15.png',
      'data/16.png',
      'data/17.png',
      'data/18.png',
      'data/19.png',
      'data/20.png',
      'data/21.png',
      'data/21.png',
      'data/22.png',
      'data/01.png',
      'data/02.png',
      'data/03.png',
      'data/04.png',
      'data/05.png',
      'data/06.png',
      'data/07.png'
    ];
  }

  cargarImagenes() {
    for (let i = 0; i < this.imagenes.length; i++) {
      this.imagenes[i] = loadImage(this.imagenes[i]);
    }
  }
}
