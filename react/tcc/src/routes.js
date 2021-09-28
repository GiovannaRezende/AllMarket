import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AprovarCompra from './pages/administrador/aprovar-compra/index.js';
import ControleProduto from './pages/administrador/controle-produto/index.js';
import GerenciarEntregas from './pages/administrador/gerenciar-entregas/index.js';
import Mensagens from './pages/administrador/mensagens/index.js';
import NovoProduto from './pages/administrador/novo-produto/index.js';

import Carrinho from './pages/usuario/carrinho/index'
import Pedidos from './pages/usuario/pedidos/index'
import Chat from './components/outros/chat/chat'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/aprovar-compra" component={AprovarCompra} />
                <Route path="/controle-produto" component={ControleProduto} />
                <Route path="/gerenciar-entregas" component={GerenciarEntregas} />
                <Route path="/mensagens" component={Mensagens} />
                <Route path="/novo-produto" component={NovoProduto} />

                <Route path="/carrinho" component={Carrinho} />
                <Route path="/pedidos" component={Pedidos} />
                <Route path="/chat" component={Chat} />
            </Switch>
        </BrowserRouter>
    )
}
