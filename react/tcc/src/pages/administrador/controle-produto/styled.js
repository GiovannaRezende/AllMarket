import styled from 'styled-components'

const ControleProdutosStyled = styled.div`
.corpo {
    display: flex;
    flex-direction: column;
    padding: 2em;
}

.corpo-pt1 {
    font: 1.5em Roboto;
    font-weight: bold;
    padding: 0em 0em .8em 0em;
}

.corpo-pt2 {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.box {
    display: flex;
    flex-direction: row;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    border-radius: .7em;
    background-color: #f9f9f9;
    padding: 1em;
    justify-content: space-between;
    height: 4.8em;
    margin: .5em 0em;
}

.esquerda {
    display: flex;
    flex-direction: row;
}

.imagem img {
    width: 3em;
    height: 3.2em;
    margin-right: .7em;
}

.textos {
    display: flex;
    flex-direction: column;

}

.produto {
    font: 900 1em Roboto;
    line-height: 1.6em;
}

.peso {
    font: 500 .8em Roboto;
}

.botoes {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.botao1 button {
    border: none;
    color: white;
    background-color: #00F90A;
    padding: .7em 1.5em;
    border-radius: .7em;
    font: 800 .8em Roboto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.botao2 button {
    border: none;
    color: white;
    background-color: #F90000;
    padding: .7em 1.5em;
    border-radius: .7em;
    font: 800 .8em Roboto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-left: .7em;
}

`

export { ControleProdutosStyled };