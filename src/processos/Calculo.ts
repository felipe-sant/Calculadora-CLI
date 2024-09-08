import Entrada from "../io/Entrada"

export default class Calculo {
    private calculo: Function
    private n1?: number
    private n2?: number
    private resultado?: number
    private entrada: Entrada = new Entrada()

    constructor(calculo: Function) {
        this.calculo = calculo
    }

    public processar() {
        this.n1 = this.entrada.receberNumero("Digite o primeiro número:")
        this.n2 = this.entrada.receberNumero("Digite o segundo número:")
        this.resultado = this.calculo(this.n1, this.n2)
        console.log(`\nSeu resultado ${this.resultado}\n`)
    }
}