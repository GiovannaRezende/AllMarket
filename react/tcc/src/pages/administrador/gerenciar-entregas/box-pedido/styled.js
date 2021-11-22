import styled from 'styled-components'

const BoxPedidoGerenciamentoStyled = styled.div`
  
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    border-radius: 1em;
    padding: 1em;
    width: 98%;
    height: 7em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: .5em 0em;


.pedido {
    font: 900 1em Roboto;
    margin: 0em 0em .3em 0em;
}

.foto-texto-botao {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.foto-textos {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.foto img {
    height: 2.8em;
    width: 2.8em;
}

.foto {
    background-color: #FB8500;
    border-radius: 4em;
    padding: .4em .6em;
    margin-right: .7em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.textos {
    display: flex;
    flex-direction: column;
}

.texto-destino {
    font: 500 1em Roboto;
}
.texto-destino span {
    font: 600 1em Roboto;
}

.texto-status {
    font: 500 1em Roboto;
}
.texto-status span{
    font: 600 1em Roboto;
}


.botoes-gerenciamento {
    display: flex;
    flex-direction: row;
    align-self: flex-end;
}

.botao {
    margin-right: 0.6em;
} 
`

export { BoxPedidoGerenciamentoStyled };