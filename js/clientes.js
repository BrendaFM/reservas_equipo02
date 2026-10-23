const clientes = [
  { id: 1, nombre: "Ana Torres", telefono: "999999999" }
];

function registrarCliente(nombre, telefono) {
  clientes.push({
    id: clientes.length + 1,
    nombre: nombre,
    telefono: telefono
  });
}

function listarClientes() {
  return clientes;
}

function modificarCliente(id, nombre, telefono) {
  const cliente = clientes.find((item) => item.id === id);

  if (cliente) {
    cliente.nombre = nombre;
    cliente.telefono = telefono;
  }
}

console.log("Módulo de clientes cargado.");