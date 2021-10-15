import styled from "styled-components";

const Container = styled.div`

        font-family: Roboto;

    img {
        cursor: pointer;
    }

    .cabecalho {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1em;
    }

    .cabecalho-esq,
    .cabecalho-dir {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .logo img {
        height: 4em;
        width: 4em;
    }

    input {
        width: 450px;
        padding: 1em;
        margin-left: 2.5em;

        border-radius: 40px;
        border: none;
        outline: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .buscar button {
        padding: 1em 2em;
        margin-left: -7.1em;

        border-radius: 40px;
        border: none;
        outline: none;
        cursor: pointer;

        background-color: #FB8500;
        color: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .buscar button:hover {
        transition: 0.8s;
        background-color: #f3a955;
    }

    .carrinho img {
        height: 4em;
        width: 4em;
    }

    .carrinho img:hover {
        transition: 0.2s;
        height: 4.3em;
        width: 4.3em;
    }

    .contador {
        padding: .1em .4em;

        background-color: #FB8500;
        color: white;
        border-radius: 50px;
    }

    .texto {
        margin-left: 2.8em;
    }

    .foto img {
        width: 4.5em;
        height: 4.5em;
        margin-left: .7em;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .foto img:hover {
        transition: 0.2s;
        width: 4.8em;
        height: 4.8em;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.45));
    }

    .conteudo {
        padding: 1em;
    }

    .banner img {
        width: 100%;
        height: 21em;

        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .container-pontos {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .pontos {
        width: 1.2em;
        height: 1.2em;
        margin: 5px;

        border-radius: 10px;
        background-color: #FB8500;
        cursor: pointer;
    }

    .container-titulo {
        font-size: 2em;
        margin: 2em;
        text-align: center;
    }

    .categorias {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .categorias-icones {
        padding: 1em;
        margin-right: 2em;

        border: 1px solid #BBBBBB;
        border-radius: 20px;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
    }

    .categorias-icones:hover {
        transition: 0.8s;
        box-shadow: 0px 3px 3px 3px rgba(0, 0, 0, 0.25);
    }

    .img-categorias img {
        height: 5em;
        width: 6em;
    }

    .texts {
        font-size: 0.9em;
        text-align: center;
    }

    .titulo2 {
        font-size: 2em ;
        margin: 1.5em;
        text-align: center;
    }


    .container-2 {
        display: flex;
        flex-direction: column;
    }

    .colunas {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }


    .direita img,
    .esquerda img {
        width: 2em;
        height: 2em;
    }


    .liquidacao {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        padding: 0.5em;
    }

    .venda {
        width: 100%;
        margin-top: 1em;
        background-color: #FB8500;
        border-radius: 18px;
        padding: 2em 1em;
    }

    .titulo-promocao {
        color: white; 
        text-align: center;
        font-size: 2em;
        font-weight: bold;

        margin-bottom: 1em;
    }

    .final {
        margin-top: 3em;
        background-color: #023047;

        padding: 2em;
    }

    .informacoes {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .classes-produtos,
    .atendimento,
    .redes,
    .rodape {
        color: white;
    }

    .titulo-categoria,
    .titulo-atendimento,
    .titulo-redes {
        font-weight: 800;
    }

    .nomes-categorias {
        display: flex;
        flex-direction: column;
        margin-left: .5em;
    }

    .congela, .laticinios, .hort, .carnes, .limpeza, .higiene {
        margin-top: .5em;
    } 

    .atendimento {
        text-align: center;
    }

    .horario-normal,
    .horario-feriado {
        margin-top: .6em;
    }


    .redes-sociais {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: .7em 0em 5em 0em;
    }

    .facebook img,
    .twitter img,
    .instagram img,
    .whats img {
        width: 3em;
        height: 3em;
    }

    .linha {
        width: 100%;
        height: 0.11em;
        margin: 1em 0em 2em 0em;
        background-color: #FB8500;
    }

    .img2 img {
        width: 4em;
        height: 4em;
    }

    .texto-final {
        color: #D3D3D3;
        text-align: center;
    }


`

export { Container };