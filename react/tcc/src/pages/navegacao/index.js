import { Link } from "react-router-dom";
import { Container } from './styled';
import { BotaoLaranja } from '../../components/outros/botoes/styled';

export default function Navegacao() {
    return (
        <Container> 
            <div className="titulo">Tela Inicial</div>
            <div className="link"> <Link to='/home'> <BotaoLaranja>Inicial</BotaoLaranja> </Link> </div>

            <div className="titulo">Telas de Usuário</div>
            <div className="link"><Link to='/cadastro'> <BotaoLaranja>Cadastro Usuário</BotaoLaranja> </Link> </div>
            <div className="link"><Link to='/login'> <BotaoLaranja>Login</BotaoLaranja> </Link> </div>
            <div className="link"><Link to='/perfil-usuario'> <BotaoLaranja>Perfil Usuário</BotaoLaranja> </Link> </div>
            <div className="link"><Link to='/cadastro-cartao'> <BotaoLaranja>Cadastro Cartão</BotaoLaranja> </Link> </div>
            <div className="link"><Link to='/cadastro-endereco'><BotaoLaranja>Cadastro Endereço</BotaoLaranja> </Link> </div>
            <div className="link"><Link to='/carrinho'> <BotaoLaranja>Carrinho</BotaoLaranja> </Link> </div>
            <div className="link"><Link to='/chat'> <BotaoLaranja>Chat Usuário</BotaoLaranja> </Link> </div>
            <div className="link"><Link to='/pedidos'> <BotaoLaranja>Meus Pedidos</BotaoLaranja> </Link> </div>
            <div className="link"><Link to='/pesquisa'> <BotaoLaranja>Pesquisa</BotaoLaranja> </Link> </div>

            <div className="titulo">Telas Administrador</div>
            <div className="link"><Link to='/perfil-adm'> <BotaoLaranja>Perfil Administrador</BotaoLaranja> </Link> </div>
            <div className="link"><Link to='/controle-produto'> <BotaoLaranja>Controle Produto</BotaoLaranja> </Link> </div>
            <div className="link"><Link to='/aprovar-compra'> <BotaoLaranja>Aprovar Compra</BotaoLaranja> </Link> </div>
            <div className="link"><Link to='/gerenciar-entregas'> <BotaoLaranja>Gerenciar Entregas</BotaoLaranja> </Link> </div>
            <div className="link"><Link to='/mensagens'> <BotaoLaranja>Mensagens</BotaoLaranja> </Link> </div>
        </Container>
    );
};