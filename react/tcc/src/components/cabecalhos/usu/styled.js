import styled from 'styled-components'

const CabecalhoStyledUsu = styled.div`
    
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        padding: 0.5em 1em;

        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    

    .logo-allmarket img {
        width: 49px;
        height: 44px;
        cursor: pointer;
    }

    .cacebalho-direita img {
        width: 45px;
        height: 47px;
    }

    .cacebalho-direita {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .imagem-usuario {
        margin-left: .7em;
    }

    .imagem-usuario img {
        cursor: pointer;
    }
`

export { CabecalhoStyledUsu };