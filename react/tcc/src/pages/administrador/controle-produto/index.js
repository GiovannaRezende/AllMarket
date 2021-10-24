import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { ControleProdutosStyled }  from './styled';

import { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

import Api from '../../../service/api'
const api = new Api();

export default function ControleProduto() {

    const [produtos, setProdutos] = useState([]);
    const [peso, setPeso] = useState([]);


    async function listar() {
        let r = await api.listar();
        setProdutos(r);
        listar();
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
        setProdutos(item.nm_produto);
        setPeso(item.ds_peso);
    }
    
    useEffect(() => {
        listar();
    }, [])

    return(
        <ControleProdutosStyled>
            <CabecalhoAdm/>
                <div class="corpo">
                    <div className="corpo-pt1">Controle de Produtos</div>
                    <div className="corpo-pt2">
                        {produtos.map((item, i) =>
                        <div className="box">
                            <div className="esquerda">
                                <div className="imagem"><img src="/assets/images/Imagem-Produto.svg" alt=""/></div>
                                <div className="textos">
                                    <div className="produto">{item.nm_produto}</div>
                                    <div className="peso">{item.ds_peso}</div>
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
    ) 
}