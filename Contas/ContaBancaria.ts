import Logger from "../Logger/Logger";
import OperacoesBancarias from "../Operacoes/OperacoesBancarias";

export default class ContaBancaria implements OperacoesBancarias{
  private numeroConta: string;
  private saldo: number;
  titular: string;

  constructor(numeroDaConta: string, saldoBancario: number, titularDaConta: string){
    this.numeroConta = numeroDaConta;
    this.saldo = saldoBancario;
    this.titular = titularDaConta;
  }

  registrarLog(mensagem: string){
    Logger.registrarLog(`Conta: ${this.numeroConta} \n${mensagem}`)
  }
  
  consultarSaldo(): number{
    return this.saldo;
  }

  depositar(valorAdicionado: number): void{
    if(valorAdicionado > 0){
      this.saldo += valorAdicionado;
      this.registrarLog(`Foi Depositado um valor de: R$${valorAdicionado} reais em sua conta,
      Seu Saldo Atual é de: R$ ${this.saldo} reais`);
    };
  }

  sacar(valorRetirado: number): void{
    if(valorRetirado > 0 && valorRetirado < this.saldo){
      this.saldo -= valorRetirado;
      this.registrarLog(`Foi Sacado de sua conta um valor de R$ ${valorRetirado} reais,
      Seu Saldo Atual é de: R$ ${this.saldo} reais`);
    }else{
      this.registrarLog(`Seu Saldo é insuficiente para Sacar o valor de R$ ${valorRetirado} reais!! \n Saldo: R$ ${this.saldo} reais`);
    };
  }

  getNumeroDaConta = () => {
    return this.numeroConta;
  }

  getSaldo = () => {
    return this.saldo
  }
}