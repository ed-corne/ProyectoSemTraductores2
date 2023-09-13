export class ElementoPila {
    constructor(valor) {
      this.valor = valor;
    }
  }
  
  export class Terminal extends ElementoPila {
    constructor(valor) {
      super(valor);
      this.tipo = "Terminal";
    }
  }
  
  export class NoTerminal extends ElementoPila {
    constructor(valor) {
      super(valor);
      this.tipo = "NoTerminal";
    }
  }
  
  export class Elemento extends ElementoPila {
    constructor(valor) {
      super(valor);
      this.tipo = "Elemento";
    }
  }
  
  
  