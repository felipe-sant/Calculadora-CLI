import Entrada from "../io/Entrada";

export default class Calculo {
    private calculo: (n1: number, n2: number) => number;
    private entrada: Entrada = new Entrada();

    constructor(calculo: (n1: number, n2: number) => number) {
        this.calculo = calculo;
    }

    public processar(): void {
        const n1 = this.entrada.receberNumero("Digite o primeiro número:");
        const n2 = this.entrada.receberNumero("Digite o segundo número:");
        const resultado = this.calculo(n1, n2);
        console.log(`\nSeu resultado: ${resultado}\n`);
    }
}

// Path: src/processos/Calculo.ts