import styled from 'styled-components'

const PerfilAdmStyled = styled.div`
.conteudo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5em 0em;
    justify-content: space-evenly;
}
.cab.infos {
    background-color: #14213D;
    width: 3em;
}
.foto-perfil img {
    width: 4em;
    height: 4em;
}
.admin-infos {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.info {
    display: flex;
    background: #F9F9F9;
    border: 1px solid #E5E5E5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1.1em;
    height: 3em;
    width: 18em;
    outline: none;
    align-items: center;
    justify-content: space-between;
    margin: .5em 0em;
    padding: 0em .5em;
}
.botao {
    margin: .7em 0em;
}
.info button {
    background-color: transparent;
    border: none;
}
.info img {
    width: 2em;
    height: 2em;
}
.admin-funcoes {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
a, button, img {
    cursor: pointer;
}
a {
   color: white;
}

input {
    border: none;
    outline: none;
    background-color: transparent;
    color: black;
    font: 500 1em Roboto; 
}
`

export { PerfilAdmStyled };