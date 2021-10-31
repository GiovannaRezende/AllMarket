import styled from 'styled-components'

const CabecalhoAdmStyled = styled.div `
    display: flex;
    flex-direction: row;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    padding: .8em;
    justify-content: space-between;

.itens-cab {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.nome-adm {
    font: 500 .9em Roboto;
}

.nome-adm span {
    font: 700 .9em Roboto;
    margin-right: .5em;
}

.foto-adm img {
    width: 3em;
    height: 3em;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-left: .3em;
    cursor: pointer;
}
`

export { CabecalhoAdmStyled };