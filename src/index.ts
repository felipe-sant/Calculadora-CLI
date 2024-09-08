import dividir from "./funcoes/dividir";
import multiplicar from "./funcoes/multiplicar";
import somar from "./funcoes/somar";
import subtrair from "./funcoes/subtrair";
import Entrada from "./io/Entrada";
import Menu from "./menus/Menu";
import Calculo from "./processos/Calculo";
import Operacao from "./tipos/Operacao";
import limparTerminal from "./utilitarios/limparTerminal";

const entrada: Entrada = new Entrada()
const menu: Menu = new Menu()

let executando: boolean = true
let opcao: string

function executarCalculo(calculo: Operacao): void {
    const calculoRealizado: Calculo = new Calculo(calculo)
    calculoRealizado.processar()
    entrada.aguardarEnter()
}

while (executando) {
    limparTerminal()
    menu.mostrar()
    opcao = entrada.receberTexto("Digite sua opcao:")
    switch (opcao) {
        case "1":
            executarCalculo(somar)
            break
        case "2":
            executarCalculo(subtrair)
            break
        case "3":
            executarCalculo(multiplicar)
            break
        case "4":
            executarCalculo(dividir)
            break
        case "0":
            executando = false
            break
        default:
            continue
    }
}