import styled from 'styled-components'

const PedidosStyled = styled.div`
        font-family: Roboto;
    

    .conteudo {
        padding: 2em;
    }

    .numero-pedido {
        display: flex;
        flex-direction: row;
        align-items: center;

        margin-bottom: 0.7em;
    }

    .pedido {
        font: 2em Roboto-Bold;
    }

    .barra {
        width: 0.2em;
        height: 1.6em;

        border-radius: 50px;
        background-color: black;

        margin: 0em 1em;
    }

    .texto-lista {
        font-weight: 800;
        margin-bottom: 2em;
    }

    .box-lista {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .box-produto {
        display: flex;
        flex-direction: row;
        align-items: center;

        padding: 1em 1.2em;
        width: 45%;
        background-color: #F9F9F9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 15px;

        margin-bottom: 1.2em;
    }

    .imagem-produto {
        margin: 0em 1em 0em 0.6em;
    }

    .imagem-produto img {
        width: 17px;
        height: 60px;
    }

    .nome-produto {
        font: 1.3em Roboto-Bold;
    }

    .botao-voltar {
        display: flex;
        justify-content: end;
    }

    .botao-voltar > button {
        background-color: #219EBC;
        color: white;
        border-radius: 10px;

        font-size: 1.2em;
        text-align: center;
        padding: 0.5em 1.6em;

        outline: none;
        border: none;
    }

`

export { PedidosStyled };