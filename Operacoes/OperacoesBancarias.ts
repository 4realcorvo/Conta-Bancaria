export default interface OperacoesBancarias {
  depositar(valor: number): void;
  sacar(valor: number): void;
}