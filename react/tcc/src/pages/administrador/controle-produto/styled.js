import styled from 'styled-components'

const NovoProdutoStyled = styled.div`
.corpo {
    display: flex;
    flex-direction: column;
    padding: .3em 1.3em;
}

.corpo-cab {
    padding: .8em 0em;
    font: 600 1.6em Roboto;
}

.inputs {
    display: flex;
    flex-direction: row;
    justify-content: space-around ;
}

.corpo-pt1 {
    display: flex;
    flex-direction: column;
}

.form1, .form2, .form3, .form4, .form5, .form6, .form7, .form8 {
    padding: .5em 0em;
}

.form9 {
    padding: 1em 0em 2em 0em;
}

.corpo-pt2 {
    display: flex;
    flex-direction: column;
}

.corpo-pt2 {
    display: flex;
    flex-direction: column;
}

.item {
    margin: .3em;
    color: #525050;
    font: 600 1em Roboto;
}

input {
    background: #F9F9F9;
    border: 1px solid #E5E5E5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1.1em;
    height: 3.5em;
    width: 18em;
    outline: none;
}

textarea {
    background: #F9F9F9;
    border: 1px solid #E5E5E5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1.1em;
    height: 8em;
    width: 18em;
    outline: none;
    padding: .7em;
}

button {
    border: none;
    background-color: #FB8500;
    color: white;
    padding: 1em 1.4em;
    border-radius: .8em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font: 600 1em Roboto;
    margin-left: 4em;
    cursor: pointer;
}
`

const ControleProdutosStyled = styled.div`
.corpo {
    display: flex;
    flex-direction: column;
    padding: .7em 2em;
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
    height: 6.6em;
    margin: .5em 0em;
}

.esquerda {
    display: flex;
    flex-direction: row;
    align-items: center;
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

.peso, .preco, .descricao {
    font: 500 .9em Roboto;
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
    cursor: pointer;
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
    cursor: pointer;
}

`

export { NovoProdutoStyled, ControleProdutosStyled };