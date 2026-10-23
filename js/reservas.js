function registrarReserva(clienteId, servicioId, fecha, hora) {
  reservas.push({
    id: reservas.length + 1,
    clienteId: clienteId,
    servicioId: servicioId,
    fecha: fecha,
    hora: hora,
    estado: "Activa"
  });
}

function listarReservas() {
  return reservas;
}

function cancelarReserva(id) {
  const reserva = reservas.find((item) => item.id === id);

  if (reserva) {
    reserva.estado = "Cancelada";
  }
}

console.log("Módulo de reservas cargado.");