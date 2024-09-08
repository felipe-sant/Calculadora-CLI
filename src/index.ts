import dividir from "./funcoes/dividir";
import multiplicar from "./funcoes/multiplicar";
import somar from "./funcoes/somar";
import subtrair from "./funcoes/subtrair";
import Entrada from "./io/Entrada";
import Menu from "./menus/menuPrincipal";
import Calculo from "./processos/Calculo";
import limparTerminal from "./utilitarios/limparTerminal";

const entrada: Entrada = new Entrada()
const menu: Menu = new Menu()

let executando: boolean = true
let opcao: string

while (executando) {
    limparTerminal()
    menu.mostrar()
    opcao = entrada.receberTexto("Digite sua opcao:")
    switch (opcao) {
        case "1":
            const calculoSoma: Calculo = new Calculo(somar)
            calculoSoma.processar()
            entrada.aguardarEnter()
            break
        case "2":
            const calculoSubtracao: Calculo = new Calculo(subtrair)
            calculoSubtracao.processar()
            entrada.aguardarEnter()
            break
        case "3":
            const calculoMultiplicacao: Calculo = new Calculo(multiplicar)
            calculoMultiplicacao.processar()
            entrada.aguardarEnter()
            break
        case "4":
            const calculoDivisao: Calculo = new Calculo(dividir)
            calculoDivisao.processar()
            entrada.aguardarEnter()
            break
        case "0":
            executando = false
            break
        default:
            continue
    }
}