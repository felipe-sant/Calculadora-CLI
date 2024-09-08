import Entrada from "../io/Entrada";
import Operacao from "../tipos/Operacao";

export default class Calculo {
    private calculo: Operacao;
    private entrada: Entrada = new Entrada();

    constructor(calculo: Operacao) {
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