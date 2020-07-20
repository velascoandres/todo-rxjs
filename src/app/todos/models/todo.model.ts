interface TodoInterface {
  id: number;
  texto: string;
  completado: boolean;
}

export class Todo implements TodoInterface {
  completado: boolean;
  id: number;
  texto: string;

  constructor(
    texto: string,
  ) {
    this.id = +(Math.random()*10).toString().replace('.', '');
    this.texto = texto;
    this.completado = false;
  }

}
