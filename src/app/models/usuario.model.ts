export class Usuario {
  constructor(
    public _id: string,
    public nombre: string,
    public apellido: string,
    public usuario: string,
    public email: string,
    public rol: string,
    public password: string,

    public reseñas: [{
      usuario: String,
      puntuacion: Number
    }],
    public calificacion: Number,
    public ventasHechas: Number,
    public clasesImpartidas: Number
  ) { }
}
