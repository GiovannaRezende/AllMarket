import styled from 'styled-components'

const InputBranco = styled.input`
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
`

const InputCinza = styled.input`
    background: #F9F9F9;
    border: 1px solid #E5E5E5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1.1em;
    height: 3.5em;
    width: 18em;
    outline: none;
`

const InputCadastro = styled.input`
    background: #F9F9F9;
    border: 1px solid #E5E5E5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1.1em;
    height: 3em;
    width: 21em;
    outline: none;
`

export { InputBranco, InputCinza, InputCadastro };