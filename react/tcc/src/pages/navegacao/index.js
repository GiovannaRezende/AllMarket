import { Link } from "react-router-dom";

export default function Navegacao() {
    return (
        <div className="container-conjunto">
            <div className="titulo">Tela Inicial</div>
            <div className="link"><Link to='/home'><div>Inicial</div></Link></div>

            <div className="titulo">Telas de Usuário</div>
            <div className="link"><Link to='/cadastro-cartao'><div>Cadastro Cartão</div></Link></div>
            <div className="link"><Link to='/cadastrar-endereco'><div>Cadastro Endereço</div></Link></div>
            <div className="link"><Link to='/cadastro'><div>Cadastro Usuário</div></Link></div>
            <div className="link"><Link to='/login'><div>Login</div></Link> </div>
            <div className="link"><Link to='/carrinho'><div>Carrinho</div></Link></div>
            <div className="link"><Link to='/chat'><div>Chat Usuário</div></Link></div>
            <div className="link"><Link to='/pedidos'><div>Meus Pedidos</div></Link></div>
            <div className="link"><Link to='/perfil-usuario'><div>Perfil Usuário</div></Link></div>
            <div className="link"><Link to='/pesquisa'><div>Pesquisa</div></Link></div>

            <div className="titulo">Telas Administrador</div>
            <div className="link"><Link to='/aprovacao-compra'>Aprovar Compra<div></div></Link></div>
            <div className="link"><Link to='/controle-produto'><div>Controle Produto</div></Link></div>
            <div className="link"><Link to='/gerenciar-entregas'><div>Gerenciar Entregas</div></Link></div>
            <div className="link"><Link to='/mensagens'><div>Login</div></Link></div>
            <div className="link"><Link to='/perfil-adm'><div>Perfil Administrador</div></Link></div>
        </div>
    )
}

