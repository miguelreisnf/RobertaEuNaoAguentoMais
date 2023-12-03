export default class ContaBancaria{
    extrato = [];
    extratoDeposito = [];
    extratoSaque = [];
    saldo = 0;
    chequeEspecial = 2640;
    constructor(props){
    }

    debitar(debito){
        let erro = "";
        if(this.saldo - debito < 0 && this.saldo - debito < -this.chequeEspecial){
            erro = `Limite de saque insuficiente, seu saldo é de ${this.saldo}, você quer debitar ${debito}, e seu cheque especial é de ${this.chequeEspecial}, sendo insuficiente`;
            return { erro:erro };
        }
        else if(this.saldo - debito < 0 && this.saldo - debito <= this.chequeEspecial){
            let aux = this.saldo - debito;
            this.chequeEspecial = this.chequeEspecial + aux;
            this.saldo = -(2640 - this.chequeEspecial);
            this.extrato.push({operacao: "-", valor:debito, chequeEspecial:`foi usado ${-(aux)} reais`});
            this.extratoSaque.push({operacao: "-", valor:debito, chequeEspecial:`foi usado ${-(aux)} reais`});
            console.log(this.extrato);
            console.log(this.saldo);
            return { saldo:this.saldo };
        }
        this.saldo -= debito;
        console.log(this.saldo);
        this.extrato.push({operacao: "-", valor:debito});
        this.extratoSaque.push({operacao: "-", valor:debito, chequeEspecial:"foi usado"});
        console.log(this.extrato);
        return { saldo:this.saldo } ;
    }

    depositar(deposito){
        this.saldo += deposito;
        this.extrato.push({operacao:"+", valor:deposito});
        this.extratoDeposito.push({operacao:"+", valor:deposito})
        console.log(this.extrato);
        return this.saldo;
    }

    extratoEspecial(){
        
    }

}