// Obtén una referencia al elemento div donde se mostrarán las imágenes
const galeriaDiv = document.getElementById("home__ship__initial__frame");

// Ruta base de las imágenes (ajusta esto según tu estructura de carpetas)
const rutaBase = '/media/360-ship/';

// Número total de imágenes que deseas cargar
const numImagenes = 41;

// Bucle para cargar y mostrar las imágenes
for (let i = 1; i <= numImagenes; i++) {
    // Crea un elemento de imagen
    const imagen = document.createElement("img");

    imagen.id = `ship__frame`;
    imagen.className = `frame__num${i}`
    
    // Establece la ruta de la imagen
    const rutaImagen = `${rutaBase}${i}.webp`; // Cambia la extensión según el tipo de imagen que tengas

    // Establece el atributo "src" de la imagen con la ruta
    imagen.src = rutaImagen;
    
    // Agrega la imagen al elemento div de la galería
    galeriaDiv.appendChild(imagen);
}