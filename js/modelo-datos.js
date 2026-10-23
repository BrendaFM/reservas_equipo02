const modeloDatos = {
  cliente: ["id", "nombre", "telefono"],
  servicio: ["id", "nombre", "precio", "duracion"],
  reserva: ["id", "clienteId", "servicioId", "fecha", "hora", "estado"]
};

console.log("Modelo de datos definido:", modeloDatos);
