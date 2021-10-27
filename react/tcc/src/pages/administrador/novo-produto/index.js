import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { NovoProdutoStyled } from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';
import { InputCinza } from '../../../components/outros/inputs/input';

import { useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../../service/api';
const api = new Api();

export default function NovoProduto() {

    const [produtos, setProdutos] = useState([]);
    const [produto, setProduto] = useState('');
    const [categoria, setCategoria] = useState('');
    const [codigo, setCodigo] = useState('');
    const [setor, setSetor] = useState('');
    const [embalagem, setEmbalagem] = useState('');
    const [marca, setMarca] = useState('');
    const [peso, setPeso] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [idAlterando, setIdAlterando] = useState(0);

    async function inserir() {
 
         if(idAlterando === 0) {
             let r = await api.inserir(categoria, produtos, codigo, setor, embalagem, marca, peso, descricao, preco);
 
             if(r.erro) {
                 toast.error(`${r.erro}`); 
                 console.log(r);
             }
 
             else {
                 toast.success('Produto inserido!');
             }
         }
         
      else {
         let r = await api.alterar(idAlterando, categoria, produtos, codigo, setor, embalagem, marca, peso, descricao, preco);
         if(r.erro) 
             toast.error(`${r.erro}`); 
         else {
             toast.success('Produto alterado!');
         }
         
     }
         
     }


    return(
        <NovoProdutoStyled>
            <CabecalhoAdm/>
            <div class="corpo">
                <div class="corpo-cab">Novo produto</div>
                <div class="inputs">
                <div class="corpo-pt1">
                    <div class="form1">
                        <div class="item">Produto:</div>
                        <InputCinza value={produto} onChange={e => setProduto(e.target.value)}></InputCinza>
                    </div>
                    <div class="form2">
                        <div class="item">Categoria:</div>
                        <InputCinza value={categoria} onChange={e => setCategoria(e.target.value)}></InputCinza>
                    </div>
                    <div class="form3">
                        <div class="item">Código do produto:</div>
                        <InputCinza value={codigo} onChange={e => setCodigo(e.target.value)}></InputCinza>
                    </div>
                    <div class="form4">
                        <div class="item">Preço:</div>
                        <InputCinza value={preco} onChange={e => setPreco(e.target.value)}></InputCinza>
                    </div>
                </div>
                <div class="corpo-pt2">
                    <div class="form5">
                        <div class="item">Embalagem:</div>
                        <InputCinza value={embalagem} onChange={e => setEmbalagem(e.target.value)}></InputCinza>
                    </div>
                    <div class="form6">
                        <div class="item">Marca/Fabricante:</div>
                        <InputCinza value={marca} onChange={e => setMarca(e.target.value)}></InputCinza>
                    </div>
                    <div class="form7">
                        <div class="item">Peso:</div>
                        <InputCinza value={peso} onChange={e => setPeso(e.target.value)}></InputCinza>
                    </div>
                </div>
                <div class="corpo-pt3">
                    <div class="form8">
                        <div class="item">Imagem:</div>
                        <input type="text"/>
                    </div>
                    <div class="form9">
                        <div class="item">Descrição:</div>
                        <textarea style={{"resize": "none;"}} value={descricao} onChange={e => setDescricao(e.target.value)}> </textarea>
                    </div>
                    <BotaoLaranja onClick={inserir}>Adicionar Produto</BotaoLaranja>
                </div>
            </div>
           </div>
        </NovoProdutoStyled>
    ) 
}