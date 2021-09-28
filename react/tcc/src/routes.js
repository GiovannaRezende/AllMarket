import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Carrinho from './pages/usuario/carrinho/'
import Pedidos from './pages/usuario/pedidos/'
import Chat from './components/outros/chat/'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/carrinho"  component={Carrinho} />
                <Route path="/pedidos"  component={Pedidos} />
                <Route path="/chat"  component={Chat} />
            </Switch>
        </BrowserRouter>
    )
}