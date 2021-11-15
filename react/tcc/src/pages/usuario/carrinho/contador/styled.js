import styled from "styled-components";

const Container = styled.div`
        display: flex;
        justify-content: end;
        flex-direction: row;
        align-items: center;

    .qtd-produto {
        font-size: 0.8em;
        margin: 0em .6em;
        text-align: center;
    }

    .botao-diminuir, 
    .botao-aumentar {
        background-color: #FFFFFF;
        color: #219ebc;
        border: 1px solid #AAA5A5;
        border-radius: 5px;

        width: 34px;
        height: 19px;
        cursor: pointer;
    }

`

export { Container };