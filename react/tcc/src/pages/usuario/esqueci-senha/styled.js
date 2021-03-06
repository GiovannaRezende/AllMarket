import styled from 'styled-components'

const EsqueciSenhaStyled = styled.div`
.container-senha {
    display: flex;
    flex-direction: column;
    background-color: #14213D;
    align-items: center;
    padding: 1.5em;
    width: 24em;
    height: 17.5em;
    border-radius: .7em;
}

.titulo {
    font: 500 1.7em Roboto;
    color: white;
    margin: .8em 0em;
}

.aviso {
    font: 500 .9em Roboto;
    color: white;
    text-align: center;
}

.confirmar-email input {
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
    margin-bottom: 1.6em;
}

.botao button {
    background-color: #FB8500;
    color: white;
    border: none;
    outline: none;
    padding: .7em 1em;
    border-radius: .8em;
    font: 500 1em Roboto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.container-codigo {
    display: flex;
    flex-direction: column;
    background-color: #14213D;
    align-items: center;
    padding: 1.5em;
    width: 24em;
    height: 14em;
    border-radius: .7em;
}

.numeros input{
    background-color: transparent;
    outline: 2px solid white;
    width: 2.3em;
    height: 2.5em;
    border: none;
    margin: 1.3em .5em;
}
`

export { EsqueciSenhaStyled };