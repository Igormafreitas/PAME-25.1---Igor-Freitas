var requisicao = require('readline-sync');


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
        console.log(`Quantidade de camas: ${this.numero_cama} | Preço por noite: R$${this.preco} | Quantidade disponível: ${this.quantidade_disponivel}\nNome: ${this.nome} | Descrição: ${this.descricao}`);
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
            console.log('A lista de reservas está vazia.\n\n');
        }
        else{ //Vai exibir os dados de cada reserva
            for(let reserva = 0; reserva < lista_reserva.length; reserva++){
                lista_reserva[reserva].verDados();
            }
        }
    }

    verListaQuarto(lista_quarto){ //Função para exibir todos os quartos
        if (lista_quarto.length == 0){ //Caso ainda não exista nenhum quarto
            console.log('A lista de quartos está vazia.\n\n');
        }
        else{ //Vai exibir os dados de cada quarto
            for(let quarto = 0; quarto < lista_quarto.length; quarto++){
                lista_quarto[quarto].verDados();
            }
        }
    }

    verListaCliente(lista_cliente){ //Função para exibir todos os clientes
        if (lista_cliente.length == 0){ //Caso ainda não exista nenhum cliente
            console.log('A lista de clientes está vazia.\n\n');
        }
        else{ //Vai exibir os dados de cada cliente
            for(let cliente = 0; cliente < lista_cliente.length; cliente++){
                lista_cliente[cliente].verDados();
            }
        }
    }

    mudarStatusReserva(lista_reserva){ //Função para mudar os status de uma reserva
        var id_escolhido = requisicao.question('Qual reserva você deseja mudar os status? (Digite o ID da Reserva): ');
        const reserva = lista_reserva.find(indice => indice.id_reserva === id_escolhido);
        if (reserva == undefined){ // Caso a reserva não exista
            console.log(`\nO ID ${id_escolhido} não existe.\n\n`);
        }   
        else { //escolhida a reserva, vamos escolher o novo status
            var novo_status = requisicao.question(`\nPara qual status você deseja alterar a sua reserva ID ${id_escolhido}? (pendente, adiada, realizada, cancelada)\n`);
            const lista_status = ['pendente','adiada','realizada','cancelada'];
            if (lista_status.includes(novo_status)){ //alteração de status da reserva
                console.log(`\nA reserva ID ${id_escolhido} foi alterada de ${reserva.status} para ${novo_status}\n\n`);
                reserva.status = novo_status;
            }
            else { //caso o tipo de status não exista
                console.log(`\nO status da reserva ID ${id_escolhido} não pode ser alterado, porque o status ${novo_status} não existe. Tente novamente.\n\n`);
            }      
        }
    }

    adicionarQuarto(lista_quarto){ //Função para adicionar um novo quarto
        var novo_nome = requisicao.question('Qual o nome do quarto que deseja adicionar?\n');
        const quarto = lista_quarto.find(indice => indice.nome === novo_nome);
        if (quarto != undefined){ //Caso o quarto já exista
            console.log('Esse quarto já existe. Caso deseja editar esse quarto, vá em "Editar quarto".\n');
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
            console.log('A lista de quartos está vazia.\n\n');
        }
        else{ //Vai exibir os dados de cada quarto
            for(let quarto = 0; quarto < lista_quarto.length; quarto++){
                lista_quarto[quarto].verDados();
            }
        }
    }

    fazerReserva(lista_reserva, lista_quarto, contador_id_reserva){ //Função para fazer uma reserva
        var data_entrada = requisicao.question('Digite a data de entrada da reserva (DD/MM/AAAA): ');
        const validacao_data = validarData(data_entrada);
        if (validacao_data == false){ //Caso a data não exista
            console.log(' Tente novamente.\n\n')
        }
        else{
            var nome_escolhido = requisicao.question('\nQual o nome do quarto que você deseja se hospedar?\n');
            const quarto_escolhido = lista_quarto.find(indice => indice.nome === nome_escolhido);
            if (quarto_escolhido == undefined){ //Caso não exista o quarto
                console.log(`\nO quarto de nome ${nome_escolhido} não existe. Tente novamente.\n\n`)
            }
            else if (quarto_escolhido.quantidade_disponivel == 0){ //Caso não possua nenhum quarto disponível
                console.log(`\nO quarto de nome ${nome_escolhido} não possui quarto disponível.\n\n`);
            }
            else{ //Registro da reserva
                let id_reserva = String(contador_id_reserva).padStart(6,'0');
                contador_id_reserva++;
                quarto_escolhido.quantidade_disponivel--;
                const nova_reserva = new Reserva(id_reserva, this.id_cliente, nome_escolhido, "pendente", data_entrada, '');
                lista_reserva.push(nova_reserva);
                console.log(`\nNova reserva ID ${nova_reserva.id_reserva} realizada com sucesso.\n\n`);
                nova_reserva.verDados();
            }
        }
    }

    finalizarReserva(lista_reserva){ //Função para finalizar uma reserva
        var id_escolhido = requisicao.question('Digite o ID da reserva que deseja finalizar: ');
        const reserva_finalizada = lista_reserva.find(indice => indice.id_reserva === id_escolhido);
        if (reserva_finalizada == undefined){ //Caso não exista a reserva escolhida
            console.log(`\nO ID ${id_escolhido} não existe.\n\n`);
        }
        else if (reserva_finalizada.id_cliente != this.id_cliente){ //Caso o ID do cliente seja o de outro cliente
            console.log(`\nVocê não pode finalizar a reserva ID ${id_escolhido} porque não é sua.\n\n`);
        }
        else if (reserva_finalizada.status == 'realizada'){ //Caso a reserva já tenha sido finalizada
            console.log(`\nA reserva ID ${id_escolhido} já foi finalizada no dia ${reserva_finalizada.check_out}.\n\n`);
        }
        else{ //Indicar a data de saída
            var data_saida = requisicao.question('Digite a data de saída da reserva (DD/MM/AAAA): ');
            const validacao_data = validarData(data_saida);
            if (validacao_data == false){ // Caso a data não exista
                console.log(' Tente novamente.\n\n');
            }
            else{ //Comparar as datas de check-in e check-out
                const validacao = validarCheckInCheckOut(reserva_finalizada.check_in, data_saida);
                if (validacao == false){ //Caso a o check-out não seja compatível com o check-in
                    console.log(' Tente novamente.\n\n');
                }
                else{ //Finalizando a reserva
                    reserva_finalizada.status = 'realizada';            
                    reserva_finalizada.check_out = data_saida;
                    console.log(`\nA reserva ID ${id_escolhido} realizada com sucesso no dia ${reserva_finalizada.check_in} e finalizada no dia ${reserva_finalizada.check_out}\n\n`);
                    reserva_finalizada.verDados();                   
                }
            }
        }
    }

    cancelarReserva(lista_reserva,lista_quarto){ //Função para cancelar uma reserva
        var id_escolhido = requisicao.question('Digite o ID da reserva que deseja cancelar: ');
        const reserva_cancelada = lista_reserva.find(indice => indice.id_reserva === id_escolhido);
        if (reserva_cancelada == undefined){ //Caso não exista a reserva escolhida
            console.log(`\nO ID ${id_escolhido} não existe.\n\n`);
        }
        else if (reserva_cancelada.id_cliente != this.id_cliente){ //Caso o ID do cliente seja o de outro cliente
            console.log(`\nVocê não pode cancelar a reserva ID ${id_escolhido} porque não é sua.\n\n`);
        }
        else if (reserva_cancelada.status == 'cancelada'){ //Caso a reserva já tenha sido cancelada
            console.log(`\nA reserva ID ${id_escolhido} já foi cancelada.\n\n`);
        }
        else{ //Cancelando a reserva
            reserva_cancelada.status = 'cancelada';
            const quarto_cancelado = lista_quarto.find(indice => indice.nome === reserva_cancelada.nome_quarto);
            quarto_cancelado.quantidade_disponivel++;
            console.log(`\nA reserva ID ${id_escolhido} foi cancelada.\n\n`);
        }
    }

    verReserva(lista_reserva){ //Função para mostrar todas as reservas do cliente
        const reserva_cliente = lista_reserva.filter(reserva => reserva.id_cliente === this.id_cliente);
        if(reserva_cliente.length == 0){ //Caso o cliente não tenha reservas
            console.log('Você ainda não possui nenhuma reserva registrada.\n\n');
        }
        else { //Exibindo cada reserva do cliente
            for(let minha_reserva = 0; minha_reserva < reserva_cliente.length; minha_reserva++){
                reserva_cliente[minha_reserva].verDados();
            }
        }
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
    constructor(lista_reserva, lista_quarto, lista_cliente, lista_avaliacao, contador_id_reserva, contador_id_funcionario, contador_id_cliente, contador_id_avaliacao){
        this.lista_reserva = [];
        this.lista_quarto = [];
        this.lista_cliente = [];
        this.lista_avaliacao = [];
        this.contador_id_reserva = 0;
        this.contador_id_funcionario = 0;
        this.contador_id_cliente = 0;
        this.contador_id_avaliacao = 0;
    }

    fazerCadastro(){ //Função para fazer cadastro no sistema
        var cadastro_escolhido = requisicao.question('Você deseja fazer cadastro como:\n1) Cliente\n2) Funcionário\n');
        if(cadastro_escolhido == '1'){ //Cadastrar como cliente
            fazerCadastroCliente();
        }
        else if(cadastro_escolhido == '2'){ //Cadastrar como funcionário
            fazerCadastroFuncionario();
        }
        else{ //Caso o usuário escreva algo sem sentido
            console.log(`\n${cadastro_escolhido} não funciona. Por favor, escreva "1" para cliente ou "2" para funcionario.\n\n`);
        }        
    }

    fazerCadastroCliente(){ //Função para fazer o cadastro do cliente
        var nome_cadastrado = requisicao.question('\nInsira o seu nome: ');
        const validacao_nome = /^[a-zA-Z\s]+$/.test(nome_cadastrado);
        if (validacao_nome == false){ //Caso seja um nome inválido
            console.log(`\nO nome ${nome_cadastrado} não é um nome válido. Insira apenas letras e espaços. Tente novamente.\n\n`);
        }
        else{
            var data_nascimento = requisicao.question('\nInsira a sua data de nascimento (DD/MM/AAAA): ');
            const validacao_data = validarData(data_nascimento);
            if (validacao_data == false){ //Caso seja uma data de nascimento inválida
                console.log(' Tente novamente.\n\n');
            }
            else{
                var cpf_cadastrado = requisicao.question('\nInsira o seu CPF (apenas número): ');
                const validacao_cpf = validarCpf(cpf_cadastrado, this.lista_cliente, this.contador_id_cliente);
                if (validacao_cpf == false){
                    console.log(' Tente novamente.\n\n');
                }
                else{
                    var email_cadastrado = requisicao.question('\nInsira o seu email: ');
                    const validacao_email = validarEmail(email_cadastrado, this.lista_cliente, this.contador_id_cliente);
                    if (validacao_email == false){
                        console.log(' Tente novamente.\n\n');                    
                    }
                    else{
                        var senha_cadastrada = requisicao.question('\nInsira uma senha: ');
                        let id_cliente = String(this.contador_id_cliente).padStart(5,'0');
                        this.contador_id_cliente++;
                        const novo_cliente = new Cliente(id_cliente, nome_cadastrado, data_nascimento, cpf_cadastrado, email_cadastrado, senha_cadastrada);
                        this.lista_cliente.push(novo_cliente);
                        console.log('\nSua conta foi cadastrada com sucesso.\n\n');                                              
                    }
                } 
            }        
        }                                       
    }

    fazerCadastroFuncionario(){ //Função para fazer o cadastro do funcionario
        var nome_usuario = requisicao.question('\nInsira o seu nome de usuário: ');
        var cpf_cadastrado = requisicao.question('\nInsira o seu CPF (apenas número): ');
        const validacao_cpf = validarCpf(cpf_cadastrado, this.lista_funcionario, this.contador_id_funcionario);
        if (validacao_cpf == false){
            console.log(' Tente novamente.\n\n');
        }
        else{
            var email_cadastrado = requisicao.question('\nInsira o seu email: ');
            const validacao_email = validarEmail(email_cadastrado, this.lista_funcionario, this.contador_id_funcionario);
            if (validacao_email == false){
                console.log(' Tente novamente.\n\n');
            }
            else{
                var senha_cadastrada = requisicao.question('\nInsira uma senha: ');
                let id_funcionario = String(this.contador_id_funcionario).padStart(4,'0');
                this.contador_id_funcionario++;
                const novo_funcionario = new Funcionario(id_funcionario, nome_usuario, cpf_cadastrado, email_cadastrado, senha_cadastrada);
                this.lista_funcionario.push(novo_funcionario);
                console.log('\nSua conta foi cadastrada com sucesso.\n\n');                                              
            }     
        }        
    }
    
    fazerLogin(){ //Função de fazer login no sistema
        var login_escolhido = requisicao.question('Você deseja fazer o login como:\n1) Cliente\n2) Funcionário\n')
        if (login_escolhido == '1'){ //Caso o usuário logue como cliente
            var email = requisicao.question('\nInsira o seu email: ');
            const cliente = this.lista_cliente.find(indice => indice.email === email);
            if (cliente == undefined){ //Caso o email não exista
                console.log(`\nO email ${email} não existe no sistema.\n\n`);
            }
            else{
                var senha = requisicao.question('\nInsira a sua senha: ');
                if (senha != cliente.senha){ //Caso a senha esteja incorreta
                    console.log(`\nA senha ${senha} está incorreta.\n\n`)
                }
                else{
                    return cliente;
                }
            }    
        }
        else if (login_escolhido == '2'){ //Caso o usuário logue como funcionário
            var email = requisicao.question('\nInsira o seu email: ');
            const funcionario = this.lista_funcionario.find(indice => indice.email === email);
            if (funcionario == undefined){ //Caso o email não exista
                console.log(`\nO email ${email} não existe no sistema.\n\n`);
            }
            else{
                var senha = requisicao.question('\nInsira a sua senha: ');
                if (senha != funcionario.senha){ //Caso a senha esteja incorreta
                    console.log(`\nA senha ${senha} está incorreta.\n\n`)
                }
                else{
                    return funcionario;
                }
            }            
        }
        else{ //Caso o usuário escreva algo sem sentido
            console.log(`\n${login_escolhido} não funciona. Por favor, escreva "1" para cliente ou "2" para funcionario.\n\n`);
        }
    }

    sairPrograma(opcao){
        var confirmacao = requisicao.question('Deseja realmente sair do programa? Todos os dados serão perdidos permanente. (s -> sim / n -> não)\n');
        let sucesso = 0;
        let opcao_final = opcao;
        while (sucesso == 0){
            if(confirmacao == 's'){
                console.log('\nSistema finalizado. Volte sempre!');
                sucesso = 1;
                opcao_final = '3';
            }
            else if(confirmacao == 'n'){
                sucesso = 1;
                opcao_final = '';
            }
            else{
                console.log(`\n${confirmacao} não funciona. Por favor, responda com "s" para sim ou "n" para não.\n\n`);
            }
        }
        
        return opcao_final;
    }
}


function validarData(data){ //função para verificar se uma data existe
    let validacao;
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(data)){ // Verifica se o formato está correto: DD/MM/AAAA
        console.log(`\nA data ${data} não está no formato válido. (DD/MM/AAAA)`);       
        validacao = false;
    }
    else {
        const [dia, mes, ano] = data.split('/').map(Number);
        if (mes < 1 || mes > 12 || dia < 1 || ano < 2024 || ano > 9999) { //Verifica se os números fazem sentido
            console.log(`\nA data ${data} não faz sentido.`);
            validacao = false;
        }
        else{
            const data_escolhida = new Date(ano, mes - 1, dia); //Verifica se realmente existe
            validacao = data_escolhida.getDate() === dia && data_escolhida.getMonth() === mes - 1 && data_escolhida.getFullYear() === ano;
            if (validacao == false){
                console.log(`\nA data ${data} não existe.`)
            }
        }
    }

    return validacao;
}

function validarCheckInCheckOut(data_check_in,data_check_out){ //função para verificar se pode existir o check-out dependendo do check-in
    let validacao;
    const [dia_check_in, mes_check_in, ano_check_in] = data_check_in.split('/').map(Number);
    const [dia_check_out, mes_check_out, ano_check_out] = data_check_out.split('/').map(Number);
    const check_in = new Date(ano_check_in, mes_check_in - 1, dia_check_in);
    const check_out = new Date(ano_check_out, mes_check_out - 1, dia_check_out);
    if(check_out < check_in){ //Caso a data de saída venha antes da data de entrada
        console.log(`\nA data de saída ${data_check_out} não pode vir antes da data de entrada ${data_check_in}.`);
        validacao = false;
    }
    else if(check_out == check_in){ //Caso as datas sejam no mesmo dia
        console.log(`\nA data de saída não pode ser a mesma da data de entrada (${data_check_out}).`);
        validacao = false;
    }
    else{
        validacao = true;
    }

    return validacao;
}

function validarCpf(cpf,lista,contador){ //função para validar o CPF
    let validacao;
    const cpf_escolhido = lista.find(indice => indice.cpf === cpf);            
    const validacao_cpf = /^[0-9]+$/.test(cpf);
    if (validacao_cpf == false){ //Caso o CPF não tenha apenas número
        console.log(`\nO CPF ${cpf} não é um CPF válido, porque não contem apenas número.`);
        validacao = false;
    }
    else if (cpf.length != 11){ //Caso o tamanho do CPF não esteja no padrão
        console.log(`\nO CPF ${cpf} não é um CPF válido.`);
        validacao = false;
    }
    else if (cpf_escolhido != undefined){ //Caso o CPF já tenha sido cadastrado
        console.log(`\nO CPF ${cpf} já foi cadastrado.`);
        validacao = false;
    }
    else{
        validacao = true;
    }
    
    return validacao;
}

function validarEmail(email,lista,contador){ //função para validar o email
    let validacao;
    const email_escolhido = lista.find(indice => indice.email === email);
    const validacao_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    if (validacao_email == false){ //Caso seja um email inválido
        console.log(`\nO email ${email} não é um email válido.`);
    }
    else if (email_escolhido != undefined){ //Caso o email já tenha sido cadastrado
        console.log(`\nO email ${email} já foi cadastrado.`);
    }
    else{
        validacao = true;
    }

    return validacao;
}

const sistema = new Sistema();

let opcao = '';
while (opcao != '3'){
    console.log('\n1) Fazer Login\n2)Fazer Cadastro\n3)Sair do programa\n\n');
    opcao = requisicao.question('Escolha uma opção: ');
    switch (opcao){
        case '1':
            var login = sistema.fazerLogin();
            if (login instanceof Cliente){
                let opcao_cliente = '';
                while (opcao_cliente != '7'){
                    console.log('\n1) Ver meus Dados\n2) Ver Lista de Quartos\n3) Fazer Reserva\n4)Finalizar Reserva\n5) Cancelar Reserva\n6)Ver minhas Reservas\n7)Deslogar\n');
                    opcao_cliente = requisicao.question('Escolha uma opção: ');
                    switch (opcao_cliente){
                        case '1':
                            
                    }
                }
            }
            else if (login instanceof Funcionario){
                let opcao_funcionario = '';
                while (opcao_funcionario != '7'){
                    console.log('\n1)Ver meus Dados\n2)Ver Lista de Reservas\n3)Ver Lista de Quartos\n4)Ver Lista de Clientes\n5)Mudar Status da Reserva\n6)Adicionar Quarto\n7)Deslogar\n');
                    opcao_funcionario = requisicao.question('Escolha uma opção: ');
                    switch (opcao_funcionario){
                        case '1':
                        
                    }
                }
            }
        case '2':
            sistema.fazerCadastro();
        case '3':
            opcao = sistema.sairPrograma();
        default:
            console.log(`${opcao} não é uma opcao válida. Escolha apenas o número de uma das opções.`);
    }
}