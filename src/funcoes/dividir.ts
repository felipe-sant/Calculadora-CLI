export default function dividir(n1: number, n2: number): number {
    if (n1 === n2) return 1
    if (n2 === 0) throw new TypeError("Não é possivel dividir por 0")
    if (n1 === 0) return 0
    return n1 / n2
}