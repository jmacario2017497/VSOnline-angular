export class Compra_Realizada {
  constructor(
    public _id: string,
    public nombreCliente: String,
    public usuarioCliente: String,
    public usuarioProfesor: String,
    public tema: String,
    public tipo: String,
    public fechaCompra: Date,
    public precio: Number
  ) { }
}
