const servicios = [
  { id: 1, nombre: "Corte de cabello", precio: 25, duracion: 30 }
];

function registrarServicio(nombre, precio, duracion) {
  servicios.push({
    id: servicios.length + 1,
    nombre: nombre,
    precio: precio,
    duracion: duracion
  });
}

function listarServicios() {
  return servicios;
}

console.log("Módulo de servicios cargado.");