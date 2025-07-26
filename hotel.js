class Reserva{
    constructor(id_reserva , id_cliente, status, check_in, check_out){
        this.id_reserva = id_reserva;
        this.id_cliente = id_cliente;
        this.status = status;
        this.check_in = check_in;
        this.check_out = check_out;
    }

    verDados(){
        console.log(`ID da reserva: ${this.id_reserva} | ID do cliente: ${this.id_cliente} | Status: ${this.status} | Data de entrada: ${this.check_in} | Data de saída: ${this.check_out}\n\n`);
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

    verDados(){
        console.log(`Quantidade de camas: ${this.numero_cama} | Preço por noite: R$${this.numero_cama} | Quantidade disponível: ${quantidade_disponivel}\nNome: ${this.nome} | Descrição: ${this.descricao}`);
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
        console.log(`ID do funcionário: ${this.id_funcionario} | Nome de usuário: ${this.nome_usuario} | CPF: ${this.cpf} | E-mail: ${this.email} | Senha: ${this.senha}\n\n`);
    }
    
    verListaReserva(lista_reserva){
        if (lista_reserva.length == 0){
            console.log('A lista de reservas está vazia.');
        }
        else{
            for(let reserva = 0; reserva < lista_reserva.length; reserva++){
                lista_reserva[reserva].verDados();
            }
        }
        console.log('\n');
    }

    verListaQuarto(lista_quarto){
        if (lista_quarto.length == 0){
            console.log('A lista de quartos está vazia.');
        }
        else{
            for(let quarto = 0; quarto < lista_quarto.length; quarto++){
                lista_quarto[quarto].verDados();
            }
        }
        console.log('\n');
    }

    verListaCliente(lista_cliente){
        if (lista_cliente.length == 0){
            console.log('A lista de clientes está vazia.');
        }
        else{
            for(let cliente = 0; cliente < lista_cliente.length; cliente++){
                lista_cliente[cliente].verDados();
            }
        }
        console.log('\n');
    }

    mudarStatusReserva(lista_reserva){
        var requisicao = require('readline-sync');
        var id_escolhido = requisicao.question('Qual reserva você deseja mudar os status? (Digite o ID da Reserva): ');
        const reserva = lista_reserva.find(indice => indice.id_reserva === id_escolhido);
        if (id_escolhido == undefined){
            console.log(`O ID ${id_escolhido} não existe.`);
        }
        else {
            var novo_status = requisicao.question(`Para qual status você deseja alterar a sua reserva ID ${id_escolhido}? (pendente, adiada, realizada, cancelada)`);
            if (novo_status == "pendente" || novo_status == "adiada" || novo_status == "realizada" || novo_status == "cancelada"){
                console.log(`A reserva ID ${id_escolhido} foi alterada de ${reserva.status} para ${novo_status}`);
                reserva.status = novo_status;
            }
            else {
                console.log(`O status da reserva ID ${id_escolhido} não pode ser alterado, porque o status ${novo_status} não existe. Tente novamente.`);
            }      
        }
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
        console.log(`ID do cliente: ${this.id_cliente} | Nome: ${this.nome} | Data de nascimento: ${this.data_nascimento} | CPF: ${this.cpf} | E-mail: ${this.email} | Senha: ${this.senha}\n\n`);
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

lista_reserva=[];
lista_quarto=[];
lista_cliente=[];
lista_avaliacao=[];