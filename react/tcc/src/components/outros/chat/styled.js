import styled from 'styled-components'

const ChatStyled = styled.div`
        display: flex;
        flex-direction: column;
        background-color: #FB8500;
        width: 26em;
        height: 28em;
        border-radius: 1em;
        position: fixed;
        bottom: 0px;
        right: 0px;

    .cab-chat {
        display: flex;
        flex-direction: row;
        background-color: #14213D;
        height: 9em;
        width: 30em;
        border-radius: 10px 10px 1em 1em;
        padding: 1em;
        align-items: center;
    }

    .foto-perfil img {
        height: 3em;
        width: 3em;
        margin-right: .6em;
    }

    .nome {
        color: white;
        font: 500 1em Roboto;
    }

    .conteudo-chat {
        display: flex;
        flex-direction: column;
        padding: .6em 1.3em 0em 0em;
        margin: 0em 0em 4em 0em;
        height: 40em;
        width: 40em;
    }

    .mensagem-hora {
        display: flex;
        flex-direction: column;
        background-color: #14213D;
        width: 16em;
        padding: 1em;
        margin: .6em 0em 9em 0em;
        border-radius: 0em 2em 2em 0em;
    }

    .mensagem {
        color: white;
        font: 100 1em Roboto;
        line-height: 1.7em;
    }

    .hora {
        display: flex;
        justify-content: flex-end;
        margin-right: 1.2em;
        color: white;
        font: 200 .7em Roboto;
    }

    .enviar {
        display: flex;
        flex-direction: row;
        margin-top: 18em;
    }

    .caixa-texto input {
        font-size: 13px;
        border: none;
        outline: none;
        border-radius: 15px;
        height: 3.5em;
        width: 25em;
        margin: 0em 1.1em 0em .8em;
    }

    .botao-enviar button {
        border-radius: 2em;
        border: none;
        background-color: white;
        padding: .6em;
    }

    .botao-enviar img {
        height: 2em;
        width: 2em;
    }
`

export { ChatStyled };