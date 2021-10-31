import styled from 'styled-components'

const PerfilAdmStyled = styled.div`
.conteudo {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.admin-infos {
    display: flex;
    flex-direction: column;
    background-color: #FB8500;
    margin: 1em;
    padding: 1em;
    border-radius: 1em;
    align-items: center;
    height: 25em;
    width: 20em;
    justify-content: center;
}

.cab.infos {
    background-color: #14213D;
    width: 3em;
}

.foto-perfil img {
    width: 4em;
    height: 4em;
}

.info {
    display: flex;
    color: white;
    background-color: #219EBC;
    font: 500 1em Roboto;
    margin: .7em 0em;
    padding: .6em;
    border-radius: .5em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 15em;
    text-align: center;
    cursor: pointer;
    align-items: center;
}

.info span {
    font: 600 1em Roboto;
}

.editar {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    
}

img {
    width: auto;
    height: 1.5em;
}

.admin-funcoes {
    display: flex;
    flex-direction: column;
    background-color: #FB8500;
    margin: 1em;
    padding: 1em 1em 0em 1em;
    border-radius: 1em;
    align-items: center;
    height: 25em;
    width: 20em;
    justify-content: center;
}

.funcoes button {
    color: white;
    background-color: #219EBC;
    border: none;
    outline: none;
    padding: .5em 1em;
    border-radius: .5em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 1em 0em;
    font: 500 1em Roboto;
    width: 15em;
    cursor: pointer;
}
a, button, img {
    cursor: pointer;
}
`

export { PerfilAdmStyled };