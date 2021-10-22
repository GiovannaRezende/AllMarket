import { useEffect, useState } from 'react'
import { Container } from './styled'

export default function Contador(props) {
    const [qtd, setQtd] = useState(props.quantidade);

    function incrementar() {
        if (qtd >= 15)
            return; 
        setQtd(qtd + 1);
    }

    function decrementar() {
        if (qtd <= 1)
            return; 
        setQtd(qtd - 1);
    }

    // Falta o useEffect

    return (
        <Container> 
            <button class="botao-diminuir" onClick={decrementar}> - </button>
            <div class="qtd-produto"> {qtd} </div>
            <button class="botao-aumentar" onClick={incrementar}> + </button>
        </Container>
    )
}