export class Tema {
  constructor(
    public _id: string,
    public nombreTema: String,
    public profesorSolicitado: String,
    public categoria: String,
    public idioma: String,
    public tipoInformacion: String,
    public precio: Number
  ) { }
}
