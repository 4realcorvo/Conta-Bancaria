import ContaBancaria from "./ContaBancaria";

export default class ContaPoupanca extends ContaBancaria{
  private juros: number;

  constructor(numeroDaConta: string, saldoBancario: number, titularDaConta: string, juros: number){
    super(numeroDaConta,saldoBancario,titularDaConta)
    this.juros = juros;
  }

  consultarSaldo(): number {
    const valorDoJuros = this.getSaldo() * this.juros/100;
    return this.getSaldo() - valorDoJuros;
  }  
}