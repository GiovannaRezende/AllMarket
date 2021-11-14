import styled from 'styled-components'

const CarrinhoStyled = styled.div`
        font-family: Roboto;
    

    .conteudo {
        padding: 2em;
    }

    .conteudo {
        display: flex;
        flex-direction: row;
        justify-content: center;

        padding: 1em 2em;
    }

    .box-esquerda {
        margin-right: 2em;
    }

    .topo-box-esq {
        padding: 2.5em 2em;
        background: #14213D;
        color: white;

        border-radius: 20px;

        font: 1.2em Roboto;
    }

    .lista-produtos {
        display: flex;
        flex-direction: column;

        padding: 1.5em 1.3em;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;

        height: 27em;

        overflow-y: auto;
    }

    .lista-produtos::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #8ECAE6;
    }

    .lista-produtos::-webkit-scrollbar
    {
        width: 7px;
        background-color: #219EBC;
        border-radius: 10px;
    }

    .lista-produtos::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #219EBC;
    }

    .box-direita {
        padding: 1.5em 1em;
        flex-grow: 1;

        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
    }

    .box-endereco {
        padding: .8em 1.4em;

        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }

    .titulo-endereco {
        font-size: 1.3em;
        font-weight: bold;

        margin-bottom: .5em;
    }

    .nome-bairro {
        margin: .7em 0em .3em 0em; 
    }

    .cidade-botao {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .cidade-botao > button {
        color: white;
        background: #219EBC;

        padding: .7em 1.4em;

        border-radius: 10px;
        outline: none;
        border: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
    }

    .box-pagamento {
        padding: 1em 1.3em;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;

        margin: 1em 0em;
    }

    .titulo-pagamento {
        font-size: 1.3em;
        font-weight: bold;
        text-align: center;

        margin-bottom: .5em;
    }

    .box-botoes {
        display: flex;
        justify-content: space-between;
    }

    .box-botoes > button { 
        color: white;
        background: #219EBC;

        padding: .5em 0em;
        width: 9em;

        border-radius: 7px;
        outline: none;
        border: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
    }

    .box-total {
        font-size: 1.3em;
        text-align: center;

        padding: 1em 0em;

        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }

    .botao-finalizar {
        display: flex;
        justify-content: end;

        margin-top: 2em;
    }

    .botao-finalizar > button {
        font-size: 1.2em;
        color: white;
        background: #219EBC;

        padding: .8em 0em;
        width: 9em;

        border-radius: 15px;
        outline: none;
        border: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
    }

    span {
        font-weight: bold;
    }
`

export { CarrinhoStyled };