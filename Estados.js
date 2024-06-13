class Estados {
  constructor() {
    this.filas = 0;
    this.columnas = 0;
    this.tamCelda = 75;

    this.dimensiones = [
      { // Canvas 1: 400x400
        inicioX:30,
        finalX: 500,
        inicioY: 25,
        finalY:500
      },
       { // Canvas 1: 400x400
        inicioX:30,
        finalX: 500,
        inicioY: 25,
        finalY:500
      },
       { // Canvas 1: 400x400
        inicioX:30,
        finalX: 500,
        inicioY: 25,
        finalY:500
      },
       { // Canvas 1: 400x400
        inicioX:30,
        finalX: 500,
        inicioY: 25,
        finalY:500
      },
      { // Canvas 2: 250x600
        inicioX: 25,
        finalX: 370,
        inicioY: 12,
        finalY: 680
      },
       { // Canvas 2: 250x600
        inicioX: 25,
        finalX: 370,
        inicioY: 12,
        finalY: 680
      },
      { // Canvas 2: 250x600
         inicioX: 25,
        finalX: 370,
        inicioY: 12,
        finalY: 680
      },
      { // Canvas 2: 250x600
         inicioX: 25,
        finalX: 370,
        inicioY: 12,
        finalY: 680
      },
      { // Canvas 3: 300x500
        inicioX: 15,
        finalX: 330,
        inicioY: 35,
        finalY: 530
      },
      { // Canvas 3: 300x500
        inicioX: 15,
        finalX: 330,
        inicioY: 35,
        finalY: 530
      },
      { // Canvas 3: 300x500
         inicioX: 15,
        finalX: 330,
        inicioY: 35,
        finalY: 530
      },
      { // Canvas 3: 300x500
        inicioX: 15,
        finalX: 330,
        inicioY: 35,
        finalY: 530
      },
      { // Canvas 4: 600x600
        inicioX: 50,
        finalX: 640,
        inicioY: 50,
        finalY: 640
      },
      { // Canvas 4: 600x600
        inicioX: 50,
        finalX: 640,
        inicioY: 50,
        finalY: 640
      },
       { // Canvas 4: 600x600
        inicioX: 50,
        finalX: 640,
        inicioY: 50,
        finalY: 640
      },
       { // Canvas 4: 600x600
        inicioX: 50,
        finalX: 640,
        inicioY: 50,
        finalY: 640
      }
    ];

    this.tiempo = 0;
    this.estado = 0;
    this.frenoActivado = false;
    this.indiceMancha = 0;
    this.manchaCoordenadas = [];

    this.tamanio = [ // tam de los canvas
      { ancho: 400, alto: 400 },
      { ancho: 400, alto: 400 },
      { ancho: 400, alto: 400 },
      { ancho: 400, alto: 400 },
      
      { ancho: 250, alto: 600 },
      { ancho: 250, alto: 600 },
      {  ancho: 250, alto: 600 },
      {  ancho: 250, alto: 600 },
      
       { ancho: 300, alto: 500},
      { ancho: 300, alto: 500},
      { ancho: 300, alto: 500 },
      { ancho: 300, alto: 500},
      
       { ancho: 600, alto: 600 },
      { ancho: 600, alto: 600},
      { ancho: 600, alto: 600 },
      { ancho: 600, alto: 600 }
    ];

    this.colores = [ // fondos
      'data/Amarillo1.png',
      'data/Rojo1.png',
      'data/Rosa1.png',
      'data/Verde1.png',
      'data/Amarillo2.png',
      'data/Rojo2.png',
      'data/Rosa2.png',
      'data/Verde2.png',
      'data/Amarillo3.png',
      'data/Rojo3.png',
      'data/Rosa3.png',
      'data/Verde3.png',
      'data/Amarillo4.png',
      'data/Rojo4.png',
      'data/Rosa4.png',
      'data/Verde4.png'
    ];

    this.pintura = new Pintura();
    this.cargarImagenes();
    this.pintura.cargarImagenes();

    this.crearGrilla();
  }

  cargarImagenes() {
    for (let i = 0; i < this.colores.length; i++) {
      this.colores[i] = loadImage(this.colores[i]);
    }
  }

  dibujar() {
    this.tiempo++;
    this.dibujartamanio();
    if (this.tiempo >= 100 && !this.frenoActivado) {
      this.estado = (this.estado + 1) % this.tamanio.length;
      this.tiempo = 0;
    }

    if (this.colores[this.estado]) {
      image(this.colores[this.estado], 0, 0, this.tamanio[this.estado].ancho, this.tamanio[this.estado].alto);
    }

    // Dibuja las manchas en las coordenadas de la grilla
    //for (let i = 0; i < this.manchaCoordenadas.length; i++) {
    //  let mancha = this.manchaCoordenadas[i];
    //  image(mancha.imagen, mancha.x, mancha.y); // Coordenadas basadas en la grilla
    //}

  for (let i = 0; i < this.columnas; i++) {
  for (let j = 0; j < this.filas; j++) {
    let indiceImagen = i * this.filas + j;
    if (indiceImagen < this.pintura.imagenes.length) {
      let imagen = this.pintura.imagenes[indiceImagen];
      image(imagen, this.grilla[i][j].x, this.grilla[i][j].y, 50, 50); // Tamaño arbitrario de la imagen
    }
  }
}
  }

   crearGrilla() { // cantidad de columnas y filas
    const canvasActual = this.dimensiones[this.estado];
    this.columnas = int((canvasActual.finalX - canvasActual.inicioX) / this.tamCelda);
    this.filas = int((canvasActual.finalY - canvasActual.inicioY) / this.tamCelda);

    this.grilla = []; // Array para almacenar las coordenadas de cada celda

    // Llenar la grilla con las coordenadas de cada celda
    for (let i = 0; i < this.columnas; i++) {
      this.grilla[i] = [];
      for (let j = 0; j < this.filas; j++) {
        this.grilla[i][j] = { x: canvasActual.inicioX + i * this.tamCelda, y: canvasActual.inicioY + j * this.tamCelda };
      }
    }
  }

  dibujartamanio() {
    resizeCanvas(this.tamanio[this.estado].ancho, this.tamanio[this.estado].alto);
    this.crearGrilla();
  }

  frenar() { // detener el tiempo en un canvas determinado
    this.frenoActivado = true;
    this.tiempo = 0;
  }


  cambiarCoordenadas() {
    // Mezclar aleatoriamente las imágenes en la lista
    shuffle(this.pintura.imagenes, true);

    // Redibujar la grilla con las imágenes mezcladas
    for (let i = 0; i < this.columnas; i++) {
      for (let j = 0; j < this.filas; j++) {
        let indiceImagen = i * this.filas + j;
        if (indiceImagen < this.pintura.imagenes.length) {
          let imagen = this.pintura.imagenes[indiceImagen];
          image(imagen, this.grilla[i][j].x, this.grilla[i][j].y, 50, 50); // Tamaño arbitrario de la imagen
        }
      }
    }
  }
  
  reiniciar(){
     this.frenoActivado = false;
     this.estado=0;
     this.tiempo = 0;
  }
}
