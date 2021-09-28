import styled from 'styled-components'

const ChatStyled = styled.div`
        display: flex;
        flex-direction: column;
        background-color: #FB8500;
        width: 18em;
        height: 21em;
        border-radius: .5em;

    .cab-chat {
        display: flex;
        flex-direction: row;
        background-color: #14213D;
        height: 3em;
        border-radius: 0em 0em .7em .7em;
        padding: .7em;
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
    }

    .mensagem-hora {
        display: flex;
        flex-direction: column;
        background-color: #14213D;
        padding: .5em;
        margin: .6em 0em 9em 0em;
        border-radius: 0em 2em 2em 0em;
    }

    .mensagem {
        color: white;
        font: 500 1em Roboto;
        line-height: 1.7em;
    }

    .hora {
        color: white;
        font: 200 .7em Roboto;
    }

    .enviar {
        display: flex;
        flex-direction: row;
    }

    .caixa-texto input {
        border: none;
        outline: none;
        border-radius: .6em;
        height: 2.5em;
        width: 16.5em;
        margin: 0em 1.1em 0em .8em;
    }

    .botao-enviar button {
        border-radius: 2em;
        border: none;
        background-color: white;
        padding: .3em;
    }

    .botao-enviar img {
        height: 2em;
        width: 2em;
    }
`

export { ChatStyled };