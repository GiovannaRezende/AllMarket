import styled from 'styled-components'

const GerenciarEntregasStyled = styled.div`
.conteudo-entregas {
    display: flex;
    flex-direction: column;
    padding: 1em;
}

.cab-conteudo {
    font: 600 1.7em Roboto;
    margin: .5em .5em;
}

.box-entregas {
    display: flex;
    flex-direction: column;
    background-color: #f9f9f9;
    border-radius: 1em;
    padding: 1em;
    width: 98%;
    height: 7em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: .5em 0em;
}

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

.botao button {
    background-color: #FB8500;
    border: none;
    outline: none;
    padding: .7em 1em;
    border-radius: .8em;
    color: white;
    font: 500 .9em Roboto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}

.botao {
    align-self: flex-end;
}
`

export { GerenciarEntregasStyled };