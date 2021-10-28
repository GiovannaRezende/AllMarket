import axios from 'axios'
const api = new axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    async listar() {
        let r = await api.get('/produtos');
        return r.data;
    }

    async inserir(categoria, produto, codigo, setor, embalagem, marca, peso, descricao, preco) {
        let r = await api.post('/produtos', { categoria, produto, codigo, setor, embalagem, marca, peso, descricao, preco } );
        return r.data;
    }

    async alterar(id, categoria, produto, codigo, setor, embalagem, marca, peso, descricao, preco) {
        let r = await api.put('/produtos/'+ id, { categoria, produto, codigo, setor, embalagem, marca, peso, descricao, preco } );
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

    async alterarStatus(status) {
        let r = await api.put('/endereco/' + { status } );
        return r.data;
    }
    
    async adicionar_end(cep, estado, cidade, rua, numero, complemento, referencia) {
        let r = await api.post('/endereco', {cep, estado, cidade, rua, numero, complemento, referencia});
        return r.data;
    }

    async adicionar_cartao(dono, cartao, tipo, validade, cvv) {
        let r = await api.post('/cartao', {dono, cartao, tipo, validade, cvv});
        return r.data;
    }

}
