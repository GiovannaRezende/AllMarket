import CabecalhoAdm from '../../../components/cabecalhos/admin/cabecalho-admin';
import { AprovarCompraStyled }  from './styled';

import BoxCompraAprovar from './box-compra-aprovar'

import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'

import Api from '../../../service/api';
const api = new Api();

function lerUsuarioLogado(navigation) {
    let logado = Cookies.get('usuario-logado')
    if (logado === null)
        navigation.push('/login');

    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
}

export default function AprovarCompra() {

    const navigation = useHistory();
    let usuarioLogado = lerUsuarioLogado(navigation);

    const [admin, setAdmin] = useState(usuarioLogado);

    const [aprovacao, setAprovacao] = useState([]);
    const [compras, setCompras] = useState([]);
    const [aprovado, setAprovado] = useState([]);

    if (admin.bt_administrador === null)
        navigation.push('/home')

    async function listarAprovacao() {
        let r = await api.listarAprovacao();
        let comprasAprovar = r.filter(c => c.bt_aprovada === null)
        console.log(comprasAprovar)
        setCompras(comprasAprovar);

    }

    useEffect(() => {
        listarAprovacao();
    }, [])

    useEffect(() => {
        listarAprovacao();
    }, [compras])

    return(
        <AprovarCompraStyled>
            <ToastContainer />
            <CabecalhoAdm/>
            <div className="conteudo-aprovacao">
                <div className="cab-conteudo">Aprovar Compras</div>
            <div class="corpo-conteudo">
                {compras.map((item, i) =>
                    <BoxCompraAprovar 
                        key={item.id_compra}
                        info={item} />
                )}
            </div>
            </div>
        </AprovarCompraStyled>  
    ) 
}