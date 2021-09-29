import styled from 'styled-components'

const CadastroUsuarioStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 3.5em;
    border-radius: 1em;

.entrar {
    display: flex;
    flex-direction: column;
    background-color: #023047;
    width: 27%;
    height: 75vh;
    border-radius: 1em;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: space-evenly;
    text-align: center;
    padding: 1em;
}

.titulo-bem-vindo {
    color: white;
    font: 900 1.8em Roboto;
}

.texto-login {
    color: white;
    font: 500 1.4em Roboto;
}

.botao-entrar button {
    background-color: #FB8500;
    color: white;
    border: none;
    outline: none;
    padding: .7em 1.5em;
    border-radius: .8em;
    font: 700 1em Roboto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.cadastrar {
    display: flex;
    flex-direction: column;
    background-color: #FB8500;
    width: 35%;
    height: 80vh;
    border-radius: 0em 1em 1em 0em;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.criar-conta {
    color: white;
    font: 700 1.6em Roboto;
    margin-bottom: .4em;
}

.logos {
    display: flex;
    flex-direction: row;
}

.logo img {
    width: 2.8em;
    height: 2.8em;
    margin: 0em .3em;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.inputs input {
    display: flex;
    flex-direction: column;
    border: none;
    outline: none;
    border-radius: .7em;
    width: 20em;
    height: 3em;
    padding: 0em .5em;
    margin: 1em 0em;
    font: 700 1em Roboto;
    color: #ADA5A5;
    background-color: #f9f9f9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.botao-cadastrar button {
    background-color: #023047;
    color: white;
    border: none;
    outline: none;
    padding: .7em 1em;
    border-radius: .8em;
    font: 700 1em Roboto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`

export { CadastroUsuarioStyled };