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
            this.chequeEspecial -= (debito - this.saldo);
            this.saldo -= debito;
            this.extrato.push({operacao: "-", valor:debito, chequeEspecial:`foi usado`});
            this.extratoSaque.push({operacao: "-", valor:debito, chequeEspecial:`foi usado`});
            console.log(this.extrato);
            console.log(this.saldo);
            return { saldo:this.saldo };
        }
        this.saldo -= debito;
        console.log(this.saldo);
        this.extrato.push({operacao: "-", valor:debito});
        this.extratoSaque.push({operacao: "-", valor:debito});
        console.log(this.extrato);
        return { saldo:this.saldo } ;
    }

    depositar(deposito){
        //Se saldo menor que 0 e saldo + deposito forem menores que o 2640 - cheque especial
        if(this.saldo < 0 && this.saldo + deposito < (2640 - this.chequeEspecial)){
            this.saldo += deposito;
            this.chequeEspecial += deposito;
            if(this.chequeEspecial > 2640){
                this.chequeEspecial = 2640;
                this.extrato.push({operacao:"+", valor:deposito});
                this.extratoDeposito.push({operacao:"+", valor:deposito})
                return this.saldo;
            }
            this.extrato.push({operacao:"+", valor:deposito});
            this.extratoDeposito.push({operacao:"+", valor:deposito})
            return this.saldo;
        }
        //Se saldo menor que 0 e saldo + deposito forem maiores que o 2640 - cheque especial
        if(this.saldo < 0 && this.saldo + deposito >= (2640 - this.chequeEspecial)){
            this.chequeEspecial = 2640;
            this.saldo += deposito;
            this.extrato.push({operacao:"+", valor:deposito});
            this.extratoDeposito.push({operacao:"+", valor:deposito})
            return this.saldo;
        } 
        //Se eu setei um valor percentual de poupança e o chefe especial não foi usado
        if(this.percentualPoupanca != 0 && this.chequeEspecial == 2640){
            console.log("aaa")
            this.saldo += deposito * (100 - this.percentualPoupanca)/100;
            this.valorPoupado = this.valorPoupado + deposito * this.percentualPoupanca/100;
            return this.saldo;
        }
        //Se tudo ocorrer normalmente
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
                result += "Operação: " + this.extrato[i].operacao + "  Valor: " + this.extrato[i].valor  + " Cheque Especial:" + this.extrato[i].chequeEspecial;
            }
            result += "\n";
        }
        return result;
    }

    extratoDepositoEspecial(){
        let result = "";
        for(let i = 0; i < this.extratoDeposito.length; i++){
            for (let j = 0; j < this.extratoDeposito.length - i - 1; j++) {
                if (this.extratoDeposito[j].valor < this.extratoDeposito[j + 1].valor) {
                    [this.extratoDeposito[j], this.extratoDeposito[j + 1]] = [this.extratoDeposito[j + 1], this.extratoDeposito[j]];
                }
            }
        }

        for (let i = 0; i < this.extratoDeposito.length; i++) {
            result += `Operação: ${this.extratoDeposito[i].operacao}, Valor: ${this.extratoDeposito[i].valor}\n`;
        }
        return result;
    }

    extratoSaqueEspecial(){
        let result = "";
        for(let i = 0; i < this.extratoSaque.length; i++){
            for (let j = 0; j < this.extratoSaque.length - i - 1; j++) {
                if (this.extratoSaque[j].valor < this.extratoSaque[j + 1].valor) {
                    [this.extratoSaque[j], this.extratoSaque[j + 1]] = [this.extratoSaque[j + 1], this.extratoSaque[j]];
                }
            }
        }
        for (let i = 0; i < this.extratoSaque.length; i++) {
            result += `Operação: ${this.extratoSaque[i].operacao}, Valor: ${this.extratoSaque[i].valor}\n`;
        }
        return result;
    }

}