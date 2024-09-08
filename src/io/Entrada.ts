import promptSync from "prompt-sync";

export default class Entrada {
    private prompt: promptSync.Prompt;

    constructor() {
        this.prompt = promptSync();
    }

    public receberNumero(mensagem: string): number {
        const valor = this.prompt(`${mensagem} `);
        const numero = parseFloat(valor);
        if (isNaN(numero)) {
            throw new TypeError("Entrada inválida: não é um número");
        }
        return numero;
    }

    public receberTexto(mensagem: string): string {
        return this.prompt(`${mensagem} `);
    }

    public receberData(mensagem: string): Date {
        const texto = this.prompt(`${mensagem}, no padrão dd/MM/yyyy: `);
        const partes = texto.split('/');
        if (partes.length !== 3) {
            throw new TypeError("Formato de data inválido. Use o formato dd/MM/yyyy.");
        }

        const dia = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10) - 1; // Meses começam em 0 no JavaScript
        const ano = parseInt(partes[2], 10);

        const data = new Date(ano, mes, dia);
        if (isNaN(data.getTime())) {
            throw new TypeError("Data inválida");
        }
        return data;
    }

    public aguardarEnter(): void {
        this.prompt('Pressione ENTER para continuar...');
    }
}

// Path: src/io/Entrada.ts