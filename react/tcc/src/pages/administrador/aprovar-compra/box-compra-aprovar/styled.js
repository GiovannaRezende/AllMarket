import styled from 'styled-components'

const BoxAprovarCompraStyled = styled.div`

  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: #f9f9f9;
  border-radius: 1em;
  width: 30%;
  height: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 1em;


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

.botao {
  display: flex;
  justify-content: flex-end;

  margin-top: 0.3em;
}
`

export { BoxAprovarCompraStyled };