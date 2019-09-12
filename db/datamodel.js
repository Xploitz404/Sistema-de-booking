
// Modelo de datos, versión 0.0.1

const USUARIO = {
  nombre: String,
  id: Number,
  contacto = {
    email = String,
    telefono = Number
  },
  pago = {
    metodo: String,
    numeroDeTarjeta: Number
  },
  localizacion: String,
  
}

const BUSQUEDA = {
  servicio: SERVICIO,
  fecha: Date,
  fechaLlegada: Date,
  fechaSalida: Date,
  hora: Number || Date,
  localizacion: String,
  numeroDePersonas: Number
}

const SERVICIO = {
  nombre: String,
  tipo: String,
  categoria: String,
  localizacion: String,
  contacto = {
    telefono: Number,
    website: String,
    email: String
  },
  detalle = {
    descripcion: String,
    fotos: [String],
    costo = {
      precio: Number,
      periodo: String
    },
    propietario: USUARIO,
    horario: Number,
    /* Esta propiedad depende bastante del tipo de servicio, ya que podría
     * contener información sobre habitaciones, baños, mesas, sillas y detalles muy propios de cada negocio.
     */
    especificidad = {
      
    }
  }
}