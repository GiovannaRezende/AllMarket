
import { useState } from 'react';
import { BoxCompraStyled } from './styled'

import { Link } from 'react-router-dom'

export default function BoxCompra(props) {
    const [compra] = useState(props.info)
    const [idCompra] = useState(compra.id_compra)

    return (
        <BoxCompraStyled>
                <div class="titulo-pedido">Meus pedidos</div>
                <div class="informacoes-pedido">
                    <div class="box-esq">
                        <div class="informacoes-box">Código da Compra: {compra.id_compra} </div>
                        <div class="informacoes-box">Valor total: R$180,67</div>
                        <div class="informacoes-box">Status: A caminho</div>
                    </div>
                </div>
                <div class="cancelar-detalhes">
                    <div class="cancelar-pedido">Cancelar o pedido</div>
                    <div className="pedidos-detalhe">
                        <Link to={{
                                pathname: '/pedidos',
                                state: idCompra
                        }}>
                            <button>Ver detalhes</button>
                        </Link>
                    </div>
                </div>
        </BoxCompraStyled>
    )
}