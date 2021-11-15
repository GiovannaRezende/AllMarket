import styled from 'styled-components'

const Container = styled.div`
    margin: 0.5em;
    padding: 2em;

    border: 1px solid #BBBBBB;
    border-radius: 20px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    max-width: 16em;

    .icones:hover {
        transition: 0.8s;
        box-shadow: 0px 6px 6px 6px rgba(0, 0, 0, 0.25);
    }

    .img1 {
        margin-left: 1.4em;
    }

    .img1 img {
        height: 8em;
        width: 8em;
    }

    .nome {
        font: 800 0.9em Roboto;
    }

    .marca {
        font: 800 0.9em Roboto;
    }

    .peso {
        font-size: 0.7em;
        margin-top: 0.5em;
        color: gray;
    }

    .preco {
        font-size: 0.9em;
    }

    .botao  {
        display: flex;
        justify-content: end;
        margin-top: 1em;
    }

    .botao img {
        height: 2.8em;
        width: 2.8em;
    }

    .botao button {
        border-radius: 2em;
        border: none;
        background-color: transparent;
    }
`

export { Container };