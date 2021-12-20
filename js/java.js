function cargarMostrarImagenAleatoria() {
    let imagenes = [
        {
            src: "imagenes/naruto.png",
            width: "110",
            heigth: "120"
        },
        {
            src: "imagenes/sasuke2.png",
            width: "110",
            heigth: "120"
        },
        {
            src: "imagenes/sakura.png",
            width: "110",
            heigth: "120"
        },
        {
            src: "imagenes/sakura.png",
            width: "110",
            heigth: "120"
        },
        {  
            src: "imagenes/interrogacion.png",
            width: "110",
            heigth: "120"
        }
    ];
    let bufferImagenes = [];
    for(const e of imagenes) {
        let imagen = new Image();
        imagen.src = e.src;
        imagen.width = e.width;
        imagen.height = e.heigth;

        bufferImagenes.push(imagen);
    }
    let indiceImagenAleatoria = generaraleatorio(imagenes.length);
    let imagenAleatoria = bufferImagenes[indiceImagenAleatoria];

    let nuevoElementoImagen = document.body.appendChild(imagenAleatoria);
}

function generaraleatorio(cantidadImagenes) {
      return Math.floor(Math.random() *cantidadImagenes);
}
