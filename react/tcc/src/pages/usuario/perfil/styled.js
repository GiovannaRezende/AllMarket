import styled from 'styled-components'

const PerfilUsuarioStyled = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Roboto;

.cabecalho {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .6em 1em;
}

.cabecalho-esquerdo {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.logo-empresa img {
    width: 4em;
    height: 4em;
}

.titulo-cabecalho {
    font-size: 2em;
    font-weight: bold;
    margin-left: .6em;
}

.icone-sair img {
    width: 3em;
    height: 3em;
}

.container {
    display: flex;
    flex-direction: row;

    padding: 1em 2em;
}

.detalhes-usuario {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;

    margin-right: 3em;

    background-color: #FB8500;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1em;
}


.background {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 5em;

    background-color: #14213D;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 1em;
    border-radius: 1em;
}

.imagem-usu {
    margin-top: -2.5em;
}

.box-informacoes {
    padding: 0em 1em;
    width: 100%;
}


.informacoes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0.5em;
    margin: 1em 0em;

    background-color: #219EBC;
    color: white;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 0.6em;
}

.icone-editar,
.icone-seta,
.seta-pedido {
    width: 2em;
    height: 2em;
}


.box-enderecos,
.box-contas,
.box-pedidos {
    padding: 1em 1.5em;
    width: 27em;

    color: white;
    background-color: #FB8500;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.6em;
}

.box-enderecos,
.box-contas {
    margin-bottom: 1em;
}

.titulo-enderecos, 
.titulo-contas,
.titulo-pedido {
    font-size: 1.3em;
    font-weight: bold;

    margin-bottom: .3em;
}

.informacoes-box {
    margin: .6em 0em;
}

.informacoes-endereco, 
.informacoes-conta,
.informacoes-pedido {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.editar {
    display: flex;
    justify-content: end;
}

.cancelar-detalhes {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;

    margin-top: 1em;
}

.cancelar-pedido {
    text-decoration: underline;
}

button {
    font: 800 1.1em Roboto;

    padding: 1em;
    margin-left: 1em;

    border: none;
    outline: none;

    background: #219EBC;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
}

::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #8ECAE6;
}

::-webkit-scrollbar
{
    width: 7px;
    background-color: #219EBC;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #219EBC;
}
`

export { PerfilUsuarioStyled };