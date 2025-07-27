class Reserva{
    constructor(id_reserva , id_cliente, nome_quarto, status, check_in, check_out){
        this.id_reserva = id_reserva;
        this.id_cliente = id_cliente;
        this.nome_quarto = nome_quarto;
        this.status = status;
        this.check_in = check_in;
        this.check_out = check_out;
    }

    verDados(){ //Função para exibir os dados da reserva
        console.log(`ID da reserva: ${this.id_reserva} | ID do cliente: ${this.id_cliente} | Nome do quarto: ${this.nome_quarto} | Status: ${this.status} | Data de entrada: ${this.check_in} | Data de saída: ${this.check_out}\n\n`);
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

    verDados(){ //Função para exibir os dados do quarto
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

    verDados(){ //Função para exibir os dados do funcionário
        console.log(`ID do funcionário: ${this.id_funcionario} | Nome de usuário: ${this.nome_usuario} | CPF: ${this.cpf} | E-mail: ${this.email} | Senha: ${this.senha}\n\n`);
    }
    
    verListaReserva(lista_reserva){ //Função para exibir todas as reservas
        if (lista_reserva.length == 0){ //Caso ainda não exista nenhuma reserva
            console.log('A lista de reservas está vazia.\n');
        }
        else{ //Vai exibir os dados de cada reserva
            for(let reserva = 0; reserva < lista_reserva.length; reserva++){
                lista_reserva[reserva].verDados();
            }
        }
        console.log('\n');
    }

    verListaQuarto(lista_quarto){ //Função para exibir todos os quartos
        if (lista_quarto.length == 0){ //Caso ainda não exista nenhum quarto
            console.log('A lista de quartos está vazia.\n');
        }
        else{ //Vai exibir os dados de cada quarto
            for(let quarto = 0; quarto < lista_quarto.length; quarto++){
                lista_quarto[quarto].verDados();
            }
        }
        console.log('\n');
    }

    verListaCliente(lista_cliente){ //Função para exibir todos os clientes
        if (lista_cliente.length == 0){ //Caso ainda não exista nenhum cliente
            console.log('A lista de clientes está vazia.\n');
        }
        else{ //Vai exibir os dados de cada cliente
            for(let cliente = 0; cliente < lista_cliente.length; cliente++){
                lista_cliente[cliente].verDados();
            }
        }
        console.log('\n');
    }

    mudarStatusReserva(lista_reserva){ //Função para mudar os status de uma reserva
        var requisicao = require('readline-sync');
        var id_escolhido = requisicao.question('Qual reserva você deseja mudar os status? (Digite o ID da Reserva): ');
        console.log('\n');
        const reserva = lista_reserva.find(indice => indice.id_reserva === id_escolhido);
        if (reserva == undefined){ // Caso a reserva não exista
            console.log(`O ID ${id_escolhido} não existe.\n\n`);
        }   
        else { //escolhida a reserva, vamos escolher o novo status
            var novo_status = requisicao.question(`Para qual status você deseja alterar a sua reserva ID ${id_escolhido}? (pendente, adiada, realizada, cancelada)\n`);
            console.log('\n');
            const lista_status = ['pendente','adiada','realizada','cancelada'];
            if (lista_status.includes(novo_status)){ //alteração de status da reserva
                console.log(`A reserva ID ${id_escolhido} foi alterada de ${reserva.status} para ${novo_status}\n\n`);
                reserva.status = novo_status;
            }
            else { //caso o tipo de status não exista
                console.log(`O status da reserva ID ${id_escolhido} não pode ser alterado, porque o status ${novo_status} não existe. Tente novamente.\n\n`);
            }      
        }
    }

    adicionarQuarto(lista_quarto){ //Função para adicionar um novo quarto
        var requisicao = require('readline-sync');
        var novo_nome = requisicao.question('Qual o nome do quarto que deseja adicionar?\n');
        const quarto = lista_quarto.find(indice => indice.nome === novo_nome);
        if (quarto != undefined){ //Caso o quarto já exista
            var nova_quantidade_disponivel = parseInt(requisicao.question('Esse quarto já existe. Caso deseja editar esse quarto, vá em "Editar quarto".\n'))
            console.log(`A quantidade disponível do quarto ${quarto.nome} aumentou para ${quarto.quantidade_disponivel}`);
        }
        else{ //Adicionando um novo quarto
            var novo_numero_cama = parseInt(requisicao.question('Quantas camas tem no novo quarto?\n'));
            var novo_preco = parseFloat(requisicao.question('Qual o preço por noite?\n'));
            var nova_quantidade_disponivel = parseInt(requisicao.question('Quantos quartos disponíveis tem nesse novo estilo de quarto?\n'));
            var nova_descricao = requisicao.question('Por fim, adicione uma descrição para o quarto: ');
            
            const novo_quarto = new Quarto(novo_numero_cama, novo_preco, nova_quantidade_disponivel, novo_nome, nova_descricao);
            lista_quarto.push(novo_quarto);
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

    verDados(){ //Função para exibir os dados do cliente
        console.log(`ID do cliente: ${this.id_cliente} | Nome: ${this.nome} | Data de nascimento: ${this.data_nascimento} | CPF: ${this.cpf} | E-mail: ${this.email} | Senha: ${this.senha}\n\n`);
    }

    verListaQuarto(lista_quarto){ //Função para exibir todos os quartos
        if (lista_quarto.length == 0){ //Caso ainda não exista nenhum quarto
            console.log('A lista de quartos está vazia.\n');
        }
        else{ //Vai exibir os dados de cada quarto
            for(let quarto = 0; quarto < lista_quarto.length; quarto++){
                lista_quarto[quarto].verDados();
            }
        }
        console.log('\n');
    }

    fazerReserva(lista_reserva, lista_quarto, contador_id_reserva){ //Função para fazer uma reserva
        var requisicao = require('readline-sync');
        var data_entrada = requisicao.question('Digite a data de entrada da reserva (DD/MM/AAAA): ');
        console.log('\n');
        var nome_escolhido = requisicao.question('Qual o nome do quarto que você deseja se hospedar?\n');
        console.log('\n');
        const quarto_escolhido = lista_quarto.find(indice => indice.nome === nome_escolhido);
        if (quarto_escolhido == undefined){ //Caso não exista o quarto
            mensagem = console.log(`O quarto de nome ${nome_escolhido} não existe. Tente novamente.\n\n`)
        }
        else if (quarto_escolhido.quantidade_disponivel == 0){ //Caso não possua nenhum quarto disponível
            mensagem = console.log(`O quarto de nome ${nome_escolhido} não possui quarto disponível.\n\n`);
        }
        else{ //Registro da reserva
            let id_reserva = String(contador_id_reserva).padStart(6,'0');
            contador_id_reserva++;
            quarto_escolhido.quantidade_disponivel--;
            const nova_reserva = new Reserva(id_reserva, this.id_cliente, nome_escolhido, "pendente", data_entrada, '');
            lista_reserva.push(nova_reserva);
            console_log(`Nova reserva ID ${nova_reserva.id_reserva} realizada com sucesso.\n\n`);
            mensagem = nova_reserva.verDados();
        }
        
        return mensagem;
    }

    finalizarReserva(lista_reserva){ //Função para finalizar uma reserva
        var requisicao = require('readline-sync');
        var id_escolhido = requisicao.question('Digite o ID da reserva que deseja finalizar: ');
        console.log('\n');
        const reserva_finalizada = lista_reserva.find(indice => indice.id_reserva === id_escolhido);
        if (reserva_finalizada == undefined){ //Caso não exista a reserva escolhida
            mensagem = console.log(`O ID ${id_escolhido} não existe.\n\n`);
        }
        else if (reserva_finalizada.id_cliente != this.id_cliente){ //Caso o ID do cliente seja o de outro cliente
            mensagem = console.log(`Você não pode finalizar a reserva ID ${id_escolhido} porque não é sua.\n\n`);
        }
        else if (reserva_finalizada.status == 'realizada'){ //Caso a reserva já tenha sido finalizada
            mensagem = console.log(`A reserva ID ${id_escolhido} já foi finalizada no dia ${reserva_finalizada.check_out}.\n\n`);
        }
        else{ //Finalizando a reserva
            var data_saida = requisicao.question('Digite a data de saída da reserva (DD/MM/AAAA): ');
            console.log('\n');
            reserva_finalizada.status = 'realizada';            
            reserva_finalizada.check_out = data_saida;
            console.log(`A reserva ID ${id_escolhido} realizada com sucesso no dia ${reserva_finalizada.check_in} e finalizada no dia ${reserva_finalizada.check_out}\n\n`);
            mensagem = reserva_finalizada.verDados();            
        }

        return mensagem;
    }

    cancelarReserva(lista_reserva,lista_quarto){ //Função para cancelar uma reserva
        var requisicao = require('readline-sync');
        var id_escolhido = requisicao.question('Digite o ID da reserva que deseja cancelar: ');
        console.log('\n');
        const reserva_cancelada = lista_reserva.find(indice => indice.id_reserva === id_escolhido);
        if (reserva_cancelada == undefined){ //Caso não exista a reserva escolhida
            mensagem = console.log(`O ID ${id_escolhido} não existe.\n\n`);
        }
        else if (reserva_cancelada.id_cliente != this.id_cliente){ //Caso o ID do cliente seja o de outro cliente
            mensagem = console.log(`Você não pode cancelar a reserva ID ${id_escolhido} porque não é sua.\n\n`);
        }
        else if (reserva_cancelada.status == 'cancelada'){ //Caso a reserva já tenha sido cancelada
            mensagem = console.log(`A reserva ID ${id_escolhido} já foi cancelada.\n\n`);
        }
        else{ //Cancelando a reserva
            reserva_cancelada.status = 'cancelada';
            const quarto_cancelado = lista_quarto.find(indice => indice.nome === reserva_cancelada.nome_quarto);
            quarto_cancelado.quantidade_disponivel++;
            mensagem = console.log(`A reserva ID ${id_escolhido} foi cancelada.\n\n`);
        }
        
        return mensagem;
    }
}

class Avaliacao{
    constructor(id_avaliacao, nome, estrela, descricao){
        this.id_avaliacao = id_avaliacao;
        this.nome = nome;
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
contador_id_reserva = 0;
contador_id_funcionario = 0;
contador_id_cliente = 0;
contador_id_avaliacao = 0;