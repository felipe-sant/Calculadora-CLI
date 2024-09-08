export default function multiplicar(n1: number, n2: number): number {
    if (n1 === 0 || n2 === 0) return 0
    if (n1 === 1) return n2
    if (n2 === 1) return n1
    return n1 * n2
}

// Path: src/funcoes/multiplicar.ts