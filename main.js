import fs from "fs";

// Función para generar el contenido
const generarContenido = () => {
  let s = [];
  for (let i = 1; i < 101; i++) {
    s = [...s, `${(Math.random() * 1000).toFixed(0)}\n`];
  }
  return s.join(""); // Convertir el array en una cadena
};

// Contenido que deseas escribir en el archivo
const contenido = generarContenido();

// Ruta donde se creará el archivo y su nombre
const rutaArchivo = "file.txt";

// Escribir en el archivo
fs.writeFile(rutaArchivo, contenido, (error) => {
  if (error) {
    console.error("Error al escribir en el archivo:", error);
  } else {
    console.log("Archivo creado y contenido escrito correctamente.");
  }
});
