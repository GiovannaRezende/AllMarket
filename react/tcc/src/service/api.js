import axios from 'axios'
const api = new axios.create({
baseURL: 'http://localhost:3030'
})


export default class Api {
    async listar() {
    let r = await api.get('/produtos');
    return r.data;
    }

    async inserir(categoria, produto, codigo, embalagem, marca, peso, descricao, preco, imagem) {
        let r = await api.post('/produtos', { categoria, produto, codigo, embalagem, marca, peso, descricao, preco, imagem } );
        return r.data;
    }

    async alterar(id, categoria, produto, codigo, embalagem, marca, peso, descricao, preco, imagem) {
        let r = await api.put('/produtos/'+ id, { categoria, produto, codigo, embalagem, marca, peso, descricao, preco, imagem } );
        return r.data;
    }

    async remover (id) {
        let r = await api.delete('/produtos/' + id);
        return r.data;
    }

    async listarEndereco() {
        let r = await api.get('/endereco');
        return r.data;
    }

    async alterarStatus(idCompra, status) {
        let r = await api.put('/compra/status/', { idCompra, status } );
        console.log(status)
        return r.data;
    }

    async adicionarEndereco(cep, estado, cidade, rua, numero, complemento, referencia, idCliente) {
        let r = await api.post('/endereco', { cep, estado, cidade, rua, numero, complemento, referencia, idCliente });
        return r.data;
    }

    async adicionarCartao(dono, cartao, tipo, validade, cvv, idCliente) {
        let r = await api.post('/cartao', { dono, cartao, tipo, validade, cvv, idCliente });
        return r.data;
    }

    async listarMensagem() {
        let r = await api.get('/chat');
        return r.data;
    }

    async finalizarCompra(cliente, endereco, notaFiscal, pagamento, produtos, valorTotal, qtd) {
        let r = await api.post('/compra', {cliente, endereco, notaFiscal, pagamento, produtos, valorTotal, qtd});
        return r.data;
    }

    async chat(cliente, administrador, mensagem) {
        let r = await api.post('/chat', { cliente, administrador, mensagem });
        return r.data
        ;
    }

    async inserirUsuario(login, senha, cpf, email, ) {
        let r = await api.post('/clientes', { login, senha, cpf, email  });
        return r.data;
    }

    async login(login, senha) {
        let r = await api.post('/login', { login, senha })
        return r.data;
    }

    async listarUsuLogado(loginUsu) {
        let r = await api.get(`/clientes/${loginUsu}`)
        return r.data;
    }

    async editarUsu(id, nome, email, senha, genero, nascimento, telefone, cpf) {
        let r = await api.put('/clientes/'+ id, { nome, email, senha, genero, nascimento, telefone, cpf })
        return r.data;
    }

    async listarEndereco(idUsu) {
        let r = await api.get(`/clientes/endereco/${idUsu}`)
        return r.data
    }

    async listarCartao(idUsu) {
        let r = await api.get(`/clientes/cartao/${idUsu}`)
        return r.data
    }

    async listarCompra(idUsu) {
        let r = await api.get(`/compra/${idUsu}`)
        return r.data;
    }

    async listarCompraEntrega(idCompra) {
        let r = await api.get(`/compra/entrega/${idCompra}`)
        return r.data;
    }

    async listarPedido() {
        let r = await api.get('/compra');
        return r.data;
    }

    async listarAprovacao() {
        let r = await api.get('/compra');
        return r.data;
    }

    async aprovarCompra(idCompra) {
        let r = await api.put(`/compra/aprovacao/${idCompra}`);
        return r.data;
    }

    async produtosPedido(idCompra) {
        let r = await api.get(`/compra/pedidousu/${idCompra}`);
        return r.data;
    }

    async enderecoPedido(idCompra) {
        let r = await api.get(`/compra/endereco/${idCompra}`);
        return r.data;
    }

    async clientePedido(idCompra) {
        let r = await api.get(`/compra/cliente/${idCompra}`);
        return r.data;
    }

}
