import { Link } from "react-router-dom";

export default function Navegacao() {
    return (
        <div class="container-conjunto">
        <div class="titulo"> Telas de Usuário </div>
        <div className="link"> <Link to='/cadastro-cartao'><div>Cadastro Cartão</div></Link> </div>
        <div class="link"> <Link to='/cadastrar-endereco'><div>Cadastro Endereço</div></Link> </div>
        <div class="link"> <Link to='/cadastro'><div>Cadastro Usuário</div></Link>  </div>
        <div class="link"> <Link to='/login'><div>Login</div></Link> </div>

        <div class="link"> <a href="./usuario/confirmacao-compra.html"> Carrinho </a> </div>
        <div class="link"> <a href="./usuario/chat-usuario.html"> Chat-Usuario </a> </div>
        <div class="link"> <a href="./usuario/meus-pedidos.html"> Meus Pedidos </a> </div>
        <div class="link"> <a href="./usuario/perfil-usuario.html"> Perfil Usuário </a> </div>

        <div class="titulo"> Telas Administrador </div>
        <div class="link"> <a href="./administrador/aprovacao-compra.html"> Aprovar Compra </a> </div>
        <div class="link"> <Link to="/controle-produto"><div>Controle Produto</div></Link>  </div>
        <div class="link"> <Link to="/gerenciar-entregas"><div>Gerenciar Entregas</div></Link>  </div>
        <div class="link"> <Link to='/mensagens'><div>Login</div></Link> </div>
        <div class="link"> <Link to='/perfil-adm'><div>Perfil Administrador</div></Link> </div>
    </div>
    )
}

