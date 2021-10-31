import styled from 'styled-components'

const AprovarCompraStyled = styled.div`
.conteudo-aprovacao {
  display: flex;
  flex-direction: column;
  padding: 1em;
}

.cab-conteudo {
  font: 600 1.7em Roboto;
  margin: .5em .5em;
}

.corpo-conteudo {
  display: flex;
  flex-direction: column;
}

.box-ckeck-conteudo {
  display: flex;
  flex-direction: row;
  margin: .8em 0em;
}

.checkbox {
 margin-right: 1em;
}

.box-aprovacao {
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: #f9f9f9;
  border-radius: 1em;
  width: 30%;
  height: 13em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.foto-nome-usuario {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0em 0em .7em 0em;
}

.foto-usuario img {
  width: 3.5em;
  height: 3.5em;
  margin-right: .5em;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
}

.nome-usuario {
  font: 600 1.1em Roboto;
  color: #525050;
}

.textos {
  display: flex;
  flex-direction: column;
}

.status, .itens, .valor, .destino {
  font: 400 1.1em Roboto;
  color: #525050;
  line-height: 1.5em;
}
.status span {
  font: 600 1em Roboto;
  color: #525050;
}

.itens span {
  font: 600 1em Roboto;
  color: #525050;
}

.valor span {
  font: 600 1em Roboto;
  color: #525050;
}

.destino span {
  font: 600 1em Roboto;
  color: #525050;
}

.botao button {
  background-color: #FB8500;
  border: none;
  outline: none;
  padding: .7em 1em;
  border-radius: .8em;
  color: white;
  font: 500 .9em Roboto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.botao {
  align-self: flex-end;
}
`

export { AprovarCompraStyled };