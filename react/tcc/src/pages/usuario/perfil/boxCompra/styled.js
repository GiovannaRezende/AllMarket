import styled from 'styled-components'

const BoxCompraStyled = styled.div`
    padding: 1em 1.5em;
    width: 27em;

    color: white;
    background-color: #FB8500;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.6em;

    .titulo-pedido {
    font-size: 1.3em;
    font-weight: bold;

    margin-bottom: .3em;
    }

    .informacoes-pedido {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    }

    .cancelar-pedido {
        text-decoration: underline;
    }

    .informacoes-box {
    margin: .6em 0em;
    }

    .cancelar-detalhes {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;

    margin-top: 1em;
    }

`

export { BoxCompraStyled };