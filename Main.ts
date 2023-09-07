import ContaBancaria from "./Contas/ContaBancaria";
import ContaPoupanca from "./Contas/ContaPoupanca";

//Conta Normal
const cliente1 = new ContaBancaria('134', 2000, 'Júnior');
cliente1.depositar(350);
cliente1.sacar(50);

//Conta com Juros
const cliente2 = new ContaPoupanca('257', 1800, 'Marcelo', 3.5);
cliente2.depositar(290);
cliente2.sacar(2000);