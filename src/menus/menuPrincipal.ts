export default class Menu {
    private repetirString(str: string, vezes: number): string {
        return str.repeat(vezes);
    }

    public mostrar(): void {
        const linha = this.repetirString("--", 20);
        const separador = this.repetirString("=", 20);
        
        console.log(linha);
        console.log("Bem-vindo à minha calculadora!");
        console.log(separador);
        console.log("1 - Somar");
        console.log("2 - Subtrair");
        console.log("3 - Multiplicar");
        console.log("4 - Dividir");
        console.log("0 - Sair");
        console.log(separador);
    }
}
