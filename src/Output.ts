export type Usage = {
  input_tokens:number,
  output_tokens:number,
}

type OutputBody = {
  model:string,
  text:string,
  usage:Usage,
}

export class Output {
  public model:string;
  public text:string;
  public usage:Usage;

  constructor(body:OutputBody) {
    this.model = body.model;
    this.text = body.text;
    this.usage = body.usage;
  }
}