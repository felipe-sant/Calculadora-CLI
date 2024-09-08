export default function dividir(n1: number, n2: number): number {
    if (n1 === 0 && n2 === 0) throw new RangeError("Indeterminação: 0 dividido por 0")
    if (n2 === 0) throw new RangeError("Divisão por zero não é permitida")
    return n1 / n2
}

// Path: src/funcoes/dividir.ts