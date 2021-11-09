
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from './pages/inicial/';

import CadastroUsuario from './pages/usuario/cadastro/index';
import LoginUsuario from './pages/usuario/login/index';
import PerfilUsuario from './pages/usuario/perfil/index';
import Cartao from './pages/usuario/cadastro-cartao/index';
import Endereco from './pages/usuario/cadastro-endereco/index';
import Carrinho from './pages/usuario/carrinho/index';
import AprovarCompra from './pages/administrador/aprovar-compra/index';
import Chat from './components/outros/chat/chat';
import Pedidos from './pages/usuario/pedidos/index';

import PerfilAdm from './pages/administrador/perfil/index';
import ControleProduto from './pages/administrador/controle-produto/index';
import GerenciarEntregas from './pages/administrador/gerenciar-entregas/index';
import Mensagens from './pages/administrador/mensagens/index';

import PaginaPesquisa from './pages/inicial/pesquisa/';
import Navegacao from './pages/navegacao/index';
import Erro from './pages/usuario/erro404/index';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" exact={true} component={Index}/>

                <Route path="/cadastro" component={CadastroUsuario} />
                <Route path="/login" component={LoginUsuario} />
                <Route path="/perfil-usuario" component={PerfilUsuario} />
                <Route path="/cadastro-cartao" component={Cartao} />
                <Route path="/cadastro-endereco" component={Endereco} />
                <Route path="/aprovar-compra" component={AprovarCompra} />
                <Route path="/pedidos" component={Pedidos} />
                <Route path="/chat" component={Chat} />

                <Route path="/perfil-adm" component={PerfilAdm} />
                <Route path="/controle-produto" component={ControleProduto} />
                <Route path="/carrinho" component={Carrinho} />
                <Route path="/gerenciar-entregas" component={GerenciarEntregas} />
                <Route path="/mensagens" component={Mensagens} />

                <Route path="/pesquisa" exact={true} component={PaginaPesquisa} />
                <Route path="/" exact={true} component={Navegacao} />
                <Route path="*" component={Erro} />
            </Switch>
        </BrowserRouter>
    );
};