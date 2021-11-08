import axios from 'axios'
const api = new axios.create({
    baseURL: 'https://allmarket-tcc.herokuapp.com'
});

export default class Api {
    async listar() {
        let r = await api.get('/produtos');
        return r.data;
    };

    async inserir(categoria, produto, codigo, embalagem, marca, peso, descricao, preco) {
        let r = await api.post('/produtos', { categoria, produto, codigo, embalagem, marca, peso, descricao, preco } );
        return r.data;
    };

    async alterar(id, categoria, produto, codigo, embalagem, marca, peso, descricao, preco) {
        let r = await api.put('/produtos/'+ id, { categoria, produto, codigo, embalagem, marca, peso, descricao, preco } );
        return r.data;
    };

    async remover(id) {
        let r = await api.delete('/produtos/' + id);
        return r.data;
    };

    async listarEndereco() {
        let r = await api.get('/endereco');
        return r.data;
    };

    async alterarStatus(status) {
        let r = await api.put('/endereco/' + { status } );
        return r.data;
    };
    
    async adicionarEndereco(cep, estado, cidade, rua, numero, complemento, referencia) {
        let r = await api.post('/endereco', { cep, estado, cidade, rua, numero, complemento, referencia });
        return r.data;
    };

    async adicionarCartao(dono, cartao, tipo, validade, cvv) {
        let r = await api.post('/cartao', { dono, cartao, tipo, validade, cvv });
        return r.data;
    };

    async listarMensagem() {
        let r = await api.get('/chat');
        return r.data;
    };

    async finalizarCompra(cliente, endereco, notaFiscal, pagamento, produtos) {
        let r = await api.post('/compra', { cliente, endereco, notaFiscal, pagamento, produtos });
        return r.data;
    };

    async chat(cliente, administrador, mensagem) {
        let r = await api.post('/chat', { cliente, administrador, mensagem });
        return r.data;
    };

    async inserirUsuario(login, senha, cpf, email, ) {
        let r = await api.post('/clientes', { login, senha, cpf, email  });
        return r.data;
    }

    async login(usuario, senha) {
        let r = await api.post('/login', { usuario, senha })
        return r.data;
    }
    
};