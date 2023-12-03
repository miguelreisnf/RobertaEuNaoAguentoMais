export default class ContaBancaria{
    extrato = [];
    extratoDeposito = [];
    extratoSaque = [];
    saldo = 0;
    chequeEspecial = 2640;
    percentualPoupanca = 0;
    valorPoupado = 0;

    getSaldo(){
        return String(this.saldo);
    }
    getValorPoupado(){
        return this.valorPoupado;
    }

    debitar(debito){
        let erro = "";
        if(this.saldo - debito < 0 && this.saldo - debito < -this.chequeEspecial){
            erro = `Limite de saque insuficiente, seu saldo é de ${this.saldo}, você quer debitar ${debito}, e seu cheque especial é de ${this.chequeEspecial}, sendo insuficiente`;
            return { erro:erro };
        }
        else if(this.saldo - debito < 0 && this.saldo - debito <= this.chequeEspecial){
            let aux = this.saldo - debito;
            this.chequeEspecial -= debito;
            this.saldo = -(2640 - this.chequeEspecial);
            this.extrato.push({operacao: "-", valor:debito, chequeEspecial:`foi usado ${-(aux)} reais do cheque especial`});
            this.extratoSaque.push({operacao: "-", valor:debito, chequeEspecial:`foi usado ${-(aux)} reais do cheque especial`});
            console.log(this.extrato);
            console.log(this.saldo);
            return { saldo:this.saldo };
        }
        this.saldo -= debito;
        console.log(this.saldo);
        this.extrato.push({operacao: "-", valor:debito});
        this.extratoSaque.push({operacao: "-", valor:debito, chequeEspecial:"foi usado do cheque especial"});
        console.log(this.extrato);
        return { saldo:this.saldo } ;
    }

    depositar(deposito){
        if(this.percentualPoupanca != 0 && this.chequeEspecial == 2640){
            this.saldo += deposito * (100 - this.percentualPoupanca)/100;
            this.valorPoupado = this.valorPoupado + deposito * this.percentualPoupanca/100;
            return this.saldo;
        }
        this.saldo += deposito;
        this.extrato.push({operacao:"+", valor:deposito});
        this.extratoDeposito.push({operacao:"+", valor:deposito})
        console.log(this.extrato);
        return this.saldo;
    }

    buscarExtrato(){
        let result = "";
        for(let i = 0; i < this.extrato.length; i++){
            if(!this.extrato[i].chequeEspecial){
                result += "Operação: " + this.extrato[i].operacao + "  Valor: " + this.extrato[i].valor;
            } else {
                result += "Operação: " + this.extrato[i].operacao + "  Valor: " + this.extrato[i].valor  + " Chque Especial:" + this.extrato[i].chequeEspecial;
            }
            result += "\n";
        }
        return result;
    }

    extratoDepositoEspecial(){
        let result = "";
        let extratoDepositoOrdenado = [...this.extratoDeposito];
        for(let i = 0; i < this.extratoDeposito.length; i++){
            for (let j = 0; j < this.extratoDeposito.length - i - 1; j++) {
                if (extratoDepositoOrdenado[j].valor < extratoDepositoOrdenado[j + 1].valor) {
                    [extratoDepositoOrdenado[j], extratoDepositoOrdenado[j + 1]] = [extratoDepositoOrdenado[j + 1], extratoDepositoOrdenado[j]];
                }
            }
        }

        for (let i = 0; i < this.extratoDeposito.length; i++) {
            result += `Operação: ${extratoDepositoOrdenado[i].operacao}, Valor: ${extratoDepositoOrdenado[i].valor}\n`;
        }
        return result;
    }

    extratoSaqueEspecial(){
        let result = "";
        let extratoSaqueOrdenado = [...this.extratoSaque];
        for(let i = 0; i < this.extratoSaque.length; i++){
            for (let j = 0; j < this.extratoSaque.length - i - 1; j++) {
                if (extratoSaqueOrdenado[j].valor < extratoSaqueOrdenado[j + 1].valor) {
                    [extratoSaqueOrdenado[j], extratoSaqueOrdenado[j + 1]] = [extratoSaqueOrdenado[j + 1], extratoSaqueOrdenado[j]];
                }
            }
        }
        for (let i = 0; i < this.extratoSaque.length; i++) {
            result += `Operação: ${extratoSaqueOrdenado[i].operacao}, Valor: ${extratoSaqueOrdenado[i].valor}\n`;
        }
        return result;
    }

}