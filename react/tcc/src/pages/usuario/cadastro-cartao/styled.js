import styled from 'styled-components'

const CadastroCartaoStyled = styled.div`
    height: 100vh;

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

select {
    width: 340px;
    height: 45px;
    padding: 0em .6em;

    background: #F9F9F9;
    border: 1px solid #E5E5E5;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1em;
    outline: none;
    font: 500 1em Roboto;
    color: #525050;
}

.botao-cadastro {
    position:absolute;
    top: 90%;
    left: 87%;
}

button {
    background-color: #FB8500;
    color: white;

    border-radius: 0.7em;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font: 500 1em Roboto;

    padding: .7em 1em;
}
`

export { CadastroCartaoStyled };