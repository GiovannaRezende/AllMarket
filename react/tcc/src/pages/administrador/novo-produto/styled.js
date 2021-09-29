import styled from 'styled-components'

const NovoProduto = styled.div`
.corpo {
    display: flex;
    flex-direction: column;
    padding: 1.3em;
}

.corpo-cab {
    padding: .8em 0em;
    font: 600 1.6em Roboto;
}

.inputs {
    display: flex;
    flex-direction: row;
    justify-content: space-around ;
}

.corpo-pt1 {
    display: flex;
    flex-direction: column;
}

.form1, .form2, .form3, .form4, .form5, .form6, .form7, .form8 {
    padding: .5em 0em;
}

.form9 {
    padding: 1em 0em 2em 0em;
}

.corpo-pt2 {
    display: flex;
    flex-direction: column;
}

.corpo-pt2 {
    display: flex;
    flex-direction: column;
}

.item {
    margin: .3em;
    color: #525050;
    font: 600 1em Roboto;
}

input {
    background: #F9F9F9;
    border: 1px solid #E5E5E5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1.1em;
    height: 3.5em;
    width: 18em;
    outline: none;
}

textarea {
    background: #F9F9F9;
    border: 1px solid #E5E5E5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1.1em;
    height: 8em;
    width: 18em;
    outline: none;
}

button {
    border: none;
    background-color: #FB8500;
    color: white;
    padding: 1em 1.4em;
    border-radius: .8em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font: 600 1em Roboto;
    margin-left: 4em;
}
`

export { NovoProduto };