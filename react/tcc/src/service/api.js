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
}