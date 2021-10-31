import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { NovoProdutoStyled } from './styled';
import { ControleProdutosStyled } from './styled';
import { BotaoLaranja } from '../../../components/outros/botoes/styled';
import { InputCinza } from '../../../components/outros/inputs/input';

import { useState, useEffect } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import Api from '../../../service/api';
const api = new Api();

export default function NovoProduto() {

    const [produtos, setProdutos] = useState([]);
    const [categoria, setCategoria] = useState('');
    const [produto, setProduto] = useState('');
    const [codigo, setCodigo] = useState('');
    const [preco, setPreco] = useState('');
    const [embalagem, setEmbalagem] = useState('');
    const [marca, setMarca] = useState('');
    const [peso, setPeso] = useState('');
    const [descricao, setDescricao] = useState('');
    const [idAlterando, setIdAlterando] = useState(0);

    async function inserir() {
 
         if(idAlterando === 0) {
             let r = await api.inserir(categoria, produto, codigo, preco, embalagem, marca, peso, descricao);
 
             if(r.erro) {
                 toast.error(`${r.erro}`);
                 console.log(r);
             }
 
             else {
                 toast.success('Produto inserido!');
                 limparCampos();
                 listar();             }
         }

         else {
            let r = await api.alterar(idAlterando, categoria, produto, codigo, preco, embalagem, marca, peso, descricao);
            if(r.erro) 
                toast.error(`${r.erro}`); 
            else {
                toast.success('Produto alterado!');
                limparCampos();
            }
            
        }
         
     }

     function limparCampos() {
        setCategoria('');
        setProduto('');
        setCodigo('');
        setPreco('');
        setEmbalagem('');
        setMarca('');
        setPeso('');
        setDescricao('');
        setIdAlterando(0);
    }

     async function listar() {
        let r = await api.listar();
        setProdutos(r);
    }

     async function remover(id) {
        confirmAlert({
            title: 'Remover produto',
            message: `Tem certeza que deseja remover o produto ${id}?`,
            buttons: [
                {
                    label:'Cancelar'
                },
                {
                    label: 'Confirmar',
                    onClick: async() => {
                        let r = await api.remover(id);
                        if(r.erro)
                            toast.error(`${r.erro}`);
                        else {
                            toast.success('Produto removido!');
                            listar();
                            
                        }
                    }
                }
            ]
        
        })
    }

    async function alterar(item){

        setCategoria(item.id_categoria);
        setProduto(item.nm_produto);
        setCodigo(item.nr_codigo);
        setPreco(item.vl_preco);
        setEmbalagem(item.ds_embalagem);
        setMarca(item.nm_marca);
        setPeso(item.ds_peso);
        setDescricao(item.ds_descricao);
        setIdAlterando(item.id_produto);
    
    }

    useEffect(() => {
        listar();
    }, [])


    return(
        <NovoProdutoStyled>
            <ToastContainer/>
            <CabecalhoAdm/>
            <div class="corpo">
                <div className="corpo-cab">Controle de Produtos</div>
                <div className="inputs">
                <div className="corpo-pt1">
                    <div className="form1">
                        <div className="item">Categoria:</div>
                        <InputCinza value={categoria} onChange={e => setCategoria(e.target.value)}/>
                    </div>
                    <div className="form2">
                        <div className="item">Produto:</div>
                        <InputCinza value={produto} onChange={e => setProduto(e.target.value)}/>
                    </div>
                    <div className="form3">
                        <div className="item">Código do produto:</div>
                        <InputCinza value={codigo} onChange={e => setCodigo(e.target.value)}/>
                    </div>
                    <div class="form4">
                        <div className="item">Preço:</div>
                        <InputCinza value={preco} onChange={e => setPreco(e.target.value)}/>
                    </div>
                </div>
                <div className="corpo-pt2">
                    <div className="form5">
                        <div className="item">Embalagem:</div>
                        <InputCinza value={embalagem} onChange={e => setEmbalagem(e.target.value)}/>
                    </div>
                    <div className="form6">
                        <div className="item">Marca:</div>
                        <InputCinza value={marca} onChange={e => setMarca(e.target.value)}/>
                    </div>
                    <div className="form7">
                        <div className="item">Peso:</div>
                        <InputCinza value={peso} onChange={e => setPeso(e.target.value)}/>
                    </div>
                </div>
                <div className="corpo-pt3">
                    <div className="form8">
                        <div className="item">Imagem:</div>
                        <input type="text"/>
                    </div>
                    <div className="form9">
                        <div className="item">Descrição:</div>
                        <textarea style={{"resize": "none"}} value={descricao} onChange={e => setDescricao(e.target.value)}></textarea>
                    </div>
                    <BotaoLaranja onClick={inserir}>{idAlterando === 0 ? "Adicionar produto" : "Alterar produto"}</BotaoLaranja>
                </div>
            </div>
           </div>
           <ControleProdutosStyled>
            <div class="corpo">
                <div className="corpo-pt1">  </div>
                <div className="corpo-pt2">
                    {produtos.map((item, i) =>
                    <div className="box">
                        <div className="esquerda">
                            <div className="imagem"><img src="/assets/images/coca-cola.svg" alt=""/></div>
                            <div className="textos">
                                <div className="produto">{item.nm_produto}</div>
                                <div className="peso">{item.ds_peso}</div>
                                <div className="preco">R${item.vl_preco}</div>
                            </div>
                        </div>
                        <div className="botoes">
                            <div className="botao1"><button onClick={() => alterar(item)}>Editar</button></div>
                            <div className="botao2"><button onClick={() => remover(item.id_produto)}>Deletar</button></div>
                    </div>
                </div>
                )}
                </div>
            </div>
        </ControleProdutosStyled>  
        </NovoProdutoStyled>
    
    ) 
}