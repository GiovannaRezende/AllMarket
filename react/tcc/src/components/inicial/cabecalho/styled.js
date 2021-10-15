import styled from 'styled-components'

const CabInicial = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1em;

.cabecalho-esq,
.cabecalho-dir {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.logo img {
    height: 4em;
    width: 4em;
}

input {
    width: 450px;
    padding: 1em;
    margin-left: 2.5em;

    border-radius: 40px;
    border: none;
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.buscar button {
    padding: 1em 2em;
    margin-left: -7.1em;

    border-radius: 40px;
    border: none;
    outline: none;
    cursor: pointer;

    background-color: #FB8500;
    color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.buscar button:hover {
    transition: 0.8s;
    background-color: #f3a955;
}

.carrinho img {
    height: 4em;
    width: 4em;
}

.carrinho img:hover {
    transition: 0.2s;
    height: 4.3em;
    width: 4.3em;
}

.contador {
    padding: .1em .4em;

    background-color: #FB8500;
    color: white;
    border-radius: 50px;
}

.texto {
    margin-left: 2.8em;
}

.foto img {
    width: 4.5em;
    height: 4.5em;
    margin-left: .7em;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.foto img:hover {
    transition: 0.2s;
    width: 4.8em;
    height: 4.8em;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.45));
}
`

export { CabInicial };