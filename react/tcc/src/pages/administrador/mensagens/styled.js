import styled from 'styled-components'

const MensagensStyled = styled.div`
.conteudo {
    display: flex;
    flex-direction: column;
    margin: 1em 0em 0em 1em;
}

.titulo-mensagem {
    font: 600 1.7em Roboto;
    margin: .5em .5em;
}

.box-mensagem {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #f9f9f9;
    height: 4.7em;
    width: 99%;
    border-radius: 1em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: .6em 0em;
    justify-content: space-between;
    padding: .6em;
    cursor: pointer;
}

.foto-texto {
    display: flex;
    flex-direction: row;
}

.foto-usuario img {
    width: 3.3em;
    height: 3.3em;
    margin: 0em .5em 0em 0em;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
}

.nome-usuario {
    font: 600 1.1em Roboto;
    color: #525050;
    line-height: 1.5em;
}

.mensagem-usuario {
    font: 500 .9em Roboto;
    color: #525050;
}

.contador {
    display: flex;
    flex-direction: row;
}

.circulo {
    background-color: #fb8500;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 25px;
    color: white;
    font: 500 .8em Roboto;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
`

export { MensagensStyled };