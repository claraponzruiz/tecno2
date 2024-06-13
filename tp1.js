let classifier;
let soundModelURL = 'https://teachablemachine.withgoogle.com/models/fx2N0VMQ3/';
let mic;
let prototipo;



function preload() {
  // Cargar el modelo de sonido
  classifier = ml5.soundClassifier(soundModelURL + 'model.json');
}


function setup() {
  createCanvas(300,300);// Tamaño inicial del lienzo
  prototipo = new Estados();
  
   // Inicializar el micrófono
  mic = new p5.AudioIn();
  mic.start();
  
   // Clasificar el sonido cada vez que haya un resultado
  classifier.classify(gotResult);

}

function draw() {
  background(0);
  prototipo.dibujar();
}


function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  
  let label = results[0].label; 

  if (label === 'Frenar') { // 
    prototipo.frenar();
  } else if (label === 'Cambio') { //
    prototipo.cambiarCoordenadas();
  } else if (label === 'Reiniciar') { // 
    prototipo.reiniciar();
  }
}


//function keyPressed() {
//  if (key == 'p') {
//    prototipo.frenar();
//  }else if (key == 'a') {
//    prototipo.cambiarCoordenadas();
//  }else if (key == 'r') { // Tecla para reiniciar
//    prototipo.reiniciar();
//  }
//}
