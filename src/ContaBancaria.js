export default class ContaBancaria{
    saldoConta = 0
    chequeEspecial = 2640

    constructor(saldoConta, chequeEspecial){
        this.saldoConta = saldoConta;
        this.chequeEspecial = chequeEspecial;
    }

    debitar(debito){
        if(this.saldoConta - debito < 0 && this.saldoConta - debito > this.chequeEspecial){
            // LIMITE DE SAQUE INSUFICIENTE 
        }
        else if(this.saldoConta - debito < 0 && this.saldoConta - debito <= this.chequeEspecial){
            this.saldoConta = 0 - debito
            this.chequeEspecial -= this.saldoConta
        }
        else{
            this.saldoConta -= debito
        }
    }

    depositar(deposito){
        this.saldoConta += deposito
    }

    chequeEspecial(){

    }

}