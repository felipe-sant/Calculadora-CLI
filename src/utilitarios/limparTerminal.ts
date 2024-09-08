export default function limparTerminal(): void {
    if (typeof console.clear === 'function') {
        console.clear();
    } else {
        console.log("O ambiente não suporta a limpeza do terminal.");
    }
}

// Path: src/utilitarios/limparTerminal.ts