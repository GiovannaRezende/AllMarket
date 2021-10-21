import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { ControleProdutosStyled }  from './styled';

import { useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

import Api from '../../../service/api'
const api = new Api();

export default function ControleProduto() {

    const [produtos, setProdutos] = useState([]);

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

    return(
        <ControleProdutosStyled>
            <CabecalhoAdm/>
                <div class="corpo">
                    <div class="corpo-pt1">Controle de Produtos</div>
                    <div class="corpo-pt2">
                        <div class="box">
                            <div class="esquerda">
                                <div class="imagem"><img src="/assets/images/Imagem-Produto.svg" alt=""/></div>
                                <div class="textos">
                                    <div class="produto">Desodorante - Rexona</div>
                                    <div class="peso">400ml</div>
                                </div>
                            </div>
                            <div class="botoes">
                                <div class="botao1"><button>Editar</button></div>
                                <div class="botao2"><button onClick={remover}>Deletar</button></div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="esquerda">
                                <div class="imagem"><img src="/assets/images/imagem-produto.svg" alt=""/></div>
                                <div class="textos">
                                    <div class="produto">Desodorante - Rexona</div>
                                    <div class="peso">400ml</div>
                                </div>
                            </div>
                            <div class="botoes">
                                <div class="botao1"><button>Editar</button></div>
                                <div class="botao2"><button>Deletar</button></div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="esquerda">
                                <div class="imagem"><img src="/assets/images/imagem-produto.svg" alt=""/></div>
                                <div class="textos">
                                    <div class="produto">Desodorante - Rexona</div>
                                    <div class="peso">400ml</div>
                                </div>
                            </div>
                            <div class="botoes">
                                <div class="botao1"><button>Editar</button></div>
                                <div class="botao2"><button>Deletar</button></div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="esquerda">
                                <div class="imagem"><img src="/assets/images/imagem-produto.svg" alt=""/></div>
                                <div class="textos">
                                    <div class="produto">Desodorante - Rexona</div>
                                    <div class="peso">400ml</div>
                                </div>
                            </div>
                            <div class="botoes">
                                <div class="botao1"><button>Editar</button></div>
                                <div class="botao2"><button>Deletar</button></div>
                            </div>
                        </div>
                        <div class="box">
                            <div class="esquerda">
                                <div class="imagem"><img src="/assets/images/imagem-produto.svg" alt=""/></div>
                                <div class="textos">
                                    <div class="produto">Desodorante - Rexona</div>
                                    <div class="peso">400ml</div>
                                </div>
                            </div>
                            <div class="botoes">
                                <div class="botao1"><button>Editar</button></div>
                                <div class="botao2"><button>Deletar</button></div>
                            </div>
                        </div>
                    </div>
                </div>
        </ControleProdutosStyled>  
    ) 
}