import styled from "styled-components";

const Container = styled.div`
        display: flex;
        flex-direction: row;

        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;

        padding: 1em;
        margin-bottom: 0.6em;

    .imagem-produto { 
        margin-right: 1em;
    }

    .imagem-produto img { 
        width: 80px;
        height: 92px;
    }

    .medida-produto {
        font-size: 0.8em;
        color: #7D7B7B;
        margin: 0.3em 0em;
    }

    .remover-produto {
        display: flex;
        justify-content: end;

        font-size: 0.9em;
        text-decoration: underline;

        margin-bottom: 0.3em;
        cursor: pointer;
    }
`

export { Container };