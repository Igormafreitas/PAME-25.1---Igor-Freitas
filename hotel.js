class Reserva{
    constructor(id_reserva , id_cliente, status, check_in, check_out){
        this.id_reserva = id_reserva;
        this.id_cliente = id_cliente;
        this.status = status;
        this.check_in = check_in;
        this.check_out = check_out;
    }
}

class Quarto{
    constructor(numero_cama, preco, quantidade_disponivel, nome, descricao){
        this.numero_cama = numero_cama;
        this.preco = preco;
        this.quantidade_disponivel = quantidade_disponivel;
        this.nome = nome;
        this.descricao = descricao;
    }
}

class Funcionario{
    constructor(id_funcionario, nome_usuario, cpf, email, senha){
        this.id_funcionario = id_funcionario;
        this.nome_usuario = nome_usuario;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }

    verDados(){
        console.log(`ID do funcionário: ${this.id_funcionario}\nNome de usuário: ${this.nome_usuario}\nCPF: ${this.cpf}\nE-mail: ${this.email}\nSenha: ${this.senha}\n\n`)
    }
}

class Cliente{
    constructor(id_cliente, nome, data_nascimento, cpf, email, senha){
        this.id_cliente = id_cliente;
        this.nome = nome;
        this.data_nascimento = data_nascimento;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
    }

    verDados(){
        console.log(`ID do cliente: ${this.id_cliente}\nNome: ${this.nome}\nData de nascimento: ${this.data_nascimento}\nCPF: ${this.cpf}\nE-mail: ${this.email}\nSenha: ${this.senha}\n\n`)
    }
}

class Avaliacao{
    constructor(id_avaliacao, estrela, descricao){
        this.id_avaliacao = id_avaliacao;
        this.estrela = estrela;
        this.descricao = descricao;
    }
}
class Sistema{
}

lista_reserva=[]
lista_quarto=[]
lista_cliente=[]
lista_avaliacao=[]