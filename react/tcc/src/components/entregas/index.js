import { Container } from './styled';

export default function Index(props) {

    const [item, setItem] = props.info;

function alterarStatus(id){
    props.Caminho(id)

}

    return (
        <Container>
        <div class="box-entregas">
            <div class="pedido">{item.ds_cep}</div>
            <div class="foto-texto-botao">
                <div class="foto-textos">
                    <div class="foto"><img src="/assets/images/em-preparo.svg" alt="" /></div>
                    <div class="textos">
                        <div class="texto-destino"><span>Destino:</span> {item.nm_rua}, {item.ds_numero} - {item.nm_cidade}</div>
                        <div class="texto-status"><span>Status:</span> {item.id_endereco === 0 ? "Em preparo" : "A caminho"}</div>
                    </div>
                </div>
                <div class="botao"><BotaoLaranja onClick={() => alterarStatus(item.id_endereco)}>Atualizar status</BotaoLaranja></div>
            </div>
        </div>
        </Container>
    )
}