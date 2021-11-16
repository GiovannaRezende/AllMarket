import styled from 'styled-components'

const CadastroUsuarioStyled = styled.div`
    background-image: url("/assets/images/Background-Login.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

.container{
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1em;
    width: 26em;
    height: 29em;
    border-radius: .7em;

    background-color: #14213D;
}

.titulo {
    font: 500 1.7em Roboto;
    color: white;
    margin: .7em 0em;
}

.logos img {
    width: 2.8em;
    height: 2.8em;
    margin: 0em .2em;
}

.corpo2  {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1em;
}

.rodape {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
}

.conta {
    font: 500 .9em Roboto;
    text-decoration: underline;
    color: white;
}

input {
    display: flex;
    flex-direction: column;
    border: none;
    outline: none;
    border-radius: .7em;
    width: 20em;
    height: 3em;
    padding: 0em .5em;
    margin: 1em 0em;
    font: 500 1em Roboto;
    color: #ADA5A5;
    background-color: #f9f9f9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

button {
    background-color: #FB8500;
    color: white;
    border: none;
    outline: none;
    padding: .7em 1em;
    border-radius: .8em;
    font: 500 1em Roboto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`

export { CadastroUsuarioStyled };