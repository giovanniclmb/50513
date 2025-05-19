import PilaVisitor from '../Grammar/PilaVisitor.js';

export class CustomPilaVisitor extends PilaVisitor {
  constructor() {
    super();
    this.pila = [];
  }

  visitPrograma(ctx) {
    const nombre = ctx.ID().getText();
    console.log(`Nombre de la pila: ${nombre}`);
    return this.visit(ctx.comandos());
  }

  visitComandos(ctx) {
    return ctx.operacion().map(op => this.visit(op));
  }

  visitOperacion(ctx) {
    if (ctx.crear()) return this.visit(ctx.crear());
    if (ctx.push()) return this.visit(ctx.push());
    if (ctx.pop()) return this.visit(ctx.pop());
    if (ctx.peek()) return this.visit(ctx.peek());
  }

  visitCrear(ctx) {
    const valores = this.visit(ctx.lista());
    this.pila = valores;
    console.log(`Pila creada: [${this.pila.join(', ')}]`);
    return null;
  }

  visitPush(ctx) {
    const valor = this.visit(ctx.valor());
    this.pila.push(valor);
    console.log(`Valor empujado: ${valor}`);
    console.log(`Estado de la pila: [${this.pila.join(', ')}]`);
    return null;
  }

  visitPop(ctx) {
    if (this.pila.length === 0) {
      console.log('Error: la pila está vacía. No se puede sacar.');
    } else {
      const valor = this.pila.pop();
      console.log(`Valor sacado: ${valor}`);
      console.log(`Estado de la pila: [${this.pila.join(', ')}]`);
    }
    return null;
  }

  visitPeek(ctx) {
    if (this.pila.length === 0) {
      console.log('Error: la pila está vacía. No se puede mirar.');
    } else {
      const valor = this.pila[this.pila.length - 1];
      console.log(`Valor al tope de la pila: ${valor}`);
    }
    return null;
  }

  visitLista(ctx) {
    const valores = [this.visit(ctx.valor(0))];
    for (let i = 1; i < ctx.valor().length; i++) {
      valores.push(this.visit(ctx.valor(i)));
    }
    return valores;
  }

  visitValor(ctx) {
    if (ctx.NUMERO()) {
      return parseInt(ctx.NUMERO().getText(), 10);
    }
    if (ctx.TEXTO()) {
      return ctx.TEXTO().getText().slice(1, -1); // sin comillas
    }
  }
}

export default CustomPilaVisitor;

