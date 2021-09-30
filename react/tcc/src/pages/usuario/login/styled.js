import styled from 'styled-components'

const LoginUsuarioStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 3.5em;
    border-radius: 1em;

.login {
    display: flex;
    flex-direction: column;
    background-color: #FB8500;
    align-items: center;
    justify-content: space-evenly;
    width: 35%;
    height: 75vh;
    border-radius: 1em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.titulo-login {
    color: white;
    font: 900 1.8em Roboto;
}

.inputs {
    display: flex;
    flex-direction: column;
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
    font: 700 1em Roboto;
    color: #ADA5A5;
    background-color: #f9f9f9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.botao button {
    background-color: #023047;
    color: white;
    border: none;
    outline: none;
    padding: .7em 1em;
    border-radius: .8em;
    font: 700 1em Roboto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.login-com {
    display: flex;
    flex-direction: column;
    background-color: #023047;
    align-items: center;
    width: 27%;
    height: 75vh;
    border-radius: 1em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: center;
}

.titulo-login-com {
    color: white;
    font: 900 1.8em Roboto;
}

.logos {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3em 0em 0em 0em;
}

.google img, .facebook img, .twitter img {
    width: 3em;
    height: 3em;
}

.google {
    color: white;
    font: 900 .9em Roboto;
    margin: 0em .5em;
}

.facebook {
    color: white;
    font: 900 .9em Roboto;
    margin: 0em .5em;
}

.twitter {
    color: white;
    font: 900 .9em Roboto;
    margin: 0em .5em;
}
`

export { LoginUsuarioStyled };