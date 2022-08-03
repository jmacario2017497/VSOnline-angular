export class Reunion_reservada {
  constructor(
    public _id: string,
    public nombreCliente: String,
    public usuarioCliente: String,
    public usuarioProfesor: String,
    public tema: String,
    public fechaReunion: Date,
    public precio: Number,
    public estado: String,
  ) { }
}
