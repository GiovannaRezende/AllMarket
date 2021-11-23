import styled from 'styled-components'

const CadastroEnderecoStyled = styled.div`
.container {
    display: flex;
    flex-direction: column;

    padding: 1em;
}

.container-texto {
    font: 700 1.5em Roboto;

    margin-top: .6em;
}

.container-input {
    display: flex;
    flex-direction: row;
    margin: 1em 2em;
}

.container-conteudo-1 {
    display: flex;
    flex-direction: column;

    margin-right: 3em;
}

.input-1, .input-2, .input-3, .input-4, .input-5 {
    margin: 1em 0em;
}

.input-6, .input-7 {
    margin: 2em 0em;
}

.input-texto {
    color: #525050;
}

input {
    width: 340px;
    height: 45px;
    padding: 0em .6em;

    background: #F9F9F9;
    border: 1px solid #E5E5E5;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1em;
    outline: none;
}

.botao-cadastro {
    position:absolute;
    top: 80%;
    left: 86%;
}

`

export { CadastroEnderecoStyled };