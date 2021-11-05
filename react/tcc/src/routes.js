import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/inicial/index';

import AprovarCompra from './pages/administrador/aprovar-compra/index';
import ControleProduto from './pages/administrador/controle-produto/index';
import GerenciarEntregas from './pages/administrador/gerenciar-entregas/index';
import Mensagens from './pages/administrador/mensagens/index';
import PerfilAdm from './pages/administrador/perfil/index';
import Index from './pages/inicial/'
import Carrinho from './pages/usuario/carrinho/index';
import Pedidos from './pages/usuario/pedidos/index';
import Chat from './components/outros/chat/chat';
import Cartao from './pages/usuario/cadastro-cartao/index';
import Endereco from './pages/usuario/cadastro-endereco/index';
import Cadastro from './pages/usuario/cadastro/index';
import Login from './pages/usuario/login/index';
import PerfilUsuario from './pages/usuario/perfil/index';
import Erro from './pages/usuario/erro404/index';
import PaginaPesquisa from './pages/inicial/pesquisa/'
import Navegacao from './pages/navegacao/index';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/aprovar-compra" component={AprovarCompra} />
                <Route path="/controle-produto" component={ControleProduto} />
                <Route path="/gerenciar-entregas" component={GerenciarEntregas} />
                <Route path="/mensagens" component={Mensagens} />
                <Route path="/perfil-adm" component={PerfilAdm} />
                
                <Route path="/" exact={true} component={Index} />
                <Route path="/pesquisa" exact={true} component={PaginaPesquisa} />
                <Route path="/carrinho" component={Carrinho} />
                <Route path="/pedidos" component={Pedidos} />
                <Route path="/chat" component={Chat} />
                <Route path="/cadastro-cartao" component={Cartao} />
                <Route path="/cadastro-endereco" component={Endereco} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/login" component={Login} />
                <Route path="/perfil-usuario" component={PerfilUsuario} />
                <Route path="*" component={Erro} />

                <Route path="/home" exact={true} component={Home}/>
                <Route path="/navegacao" exact={true} component={Navegacao}/>
            </Switch>
        </BrowserRouter>
    )
}
