import styled from 'styled-components'

const LoginUsuarioStyled = styled.div`
 
width: 100%;
height: 100%;



.cabecalho{
    display: flex;
    flex-direction: column;
    background-color: #14213D;
    align-items: center;
    padding: 1em;
    margin: 4em 28.5em;
    width: 28em;
    height: 32em;
    border-radius: .7em;
}

.titulo {
    font: 500 1.7em Roboto;
    color: white;
    margin: 1em 0em;
}

.logos img {
    width: 2.8em;
    height: 2.8em;
    margin: 1em .2em;
}

.corpo2 button {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: .8em;
}

.rodape {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
}

.esqueci-senha a {
    font: 500 .9em Roboto;
    text-decoration: underline;
    color: white;
    cursor: pointer;
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
    margin: 2.5em 0em;
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

export { LoginUsuarioStyled };