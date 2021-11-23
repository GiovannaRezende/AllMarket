import db from './db.js';
import express from 'express';
import cors from 'cors';
import multer from 'multer'
import path from 'path'
import crypto from 'crypto-js'

import compraController from './controller/compraController.js'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/produtos', async (req, resp) => {
    try {
        let produtos = await db.infoc_tct_produto.findAll({ order: [['id_produto', 'desc' ]] });
        resp.send(produtos);

    } catch (e) {
        resp.send({ erro: e.toString()});
    }
});


app.post('/produtos', async (req, resp) => {
    try {
        let { categoria, produto, codigo, preco, embalagem, marca, peso, descricao, imagem } = req.body;
        
        let r = await db.infoc_tct_produto.create({
            id_categoria: categoria,
            nm_produto: produto,
            nr_codigo: codigo,
            ds_embalagem: embalagem,
            nm_marca: marca,
            ds_peso: peso,
            ds_descricao: descricao,
            vl_preco: preco,
            img_produto: imagem
        });
        resp.send(r);

    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});

app.put('/produtos/:id', async (req, resp) => {
    try {

        let id = req.params.id;
        let { categoria, produto, codigo, preco, embalagem, marca, peso, descricao, imagem } = req.body;
        
        let r = await db.infoc_tct_produto.update(
            {
                id_categoria: categoria,
                nm_produto: produto,
                nr_codigo: codigo,
                ds_embalagem: embalagem,
                nm_marca: marca,
                ds_peso: peso,
                ds_descricao: descricao,
                vl_preco: preco,
                img_produto: imagem
            },
            {
                where: { id_produto: id }
            });
            
            resp.sendStatus(200);
            
    } catch(e) {
        resp.send({ erro: e.toString()});
    }
});

app.delete('/produtos/:id', async (req, resp) => {
    try {
        let r = await db.infoc_tct_produto.destroy({ where: {id_produto: req.params.id }})
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});

app.get('/clientes', async (req, resp) => {
    try {
        let clientes = await db.infoc_tct_cliente.findAll({ order: [['id_cliente', 'desc' ]] });
        resp.send(clientes);

    } catch (e) {
        resp.send({ erro: e.toString()});
    }
});

app.get('/clientes/:loginUsu', async (req, resp) => {
    try {
        let { loginUsu } = req.params;
        let clientes = await db.infoc_tct_cliente.findOne({ 
            where: { 
                ds_login: loginUsu
            }
        });
        resp.send(clientes);

    } catch (e) {
        resp.send({ erro: e.toString()});
    }
});



app.post('/clientes', async (req, resp) => {
    try {
        let { endereco, cartao, nome, email, senha, genero, nascimento, telefone, cpf, login } = req.body;
        
        let r = await db.infoc_tct_cliente.create({
            id_endereco: endereco,
            id_cartao: cartao,
            nm_nome: nome,
            ds_email: email,
            ds_senha: crypto.SHA256(senha).toString(crypto.enc.Base64),
            ds_genero: genero,
            dt_nascimento: nascimento,
            ds_telefone: telefone,
            ds_cpf: cpf,
            ds_login: login  
        });
        resp.send(r);

    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});

app.put('/clientes/:id', async (req, resp) => {
    try {

        let id = req.params.id;
        let { nome, email, senha, genero, nascimento, telefone, cpf, login } = req.body;
        
        let r = await db.infoc_tct_cliente.update(
            {
                nm_nome: nome,
                ds_email: email,
                ds_senha: senha,
                ds_genero: genero,
                dt_nascimento: nascimento,
                ds_telefone: telefone,
                ds_cpf: cpf,
                ds_login: login
            },
            {
                where: { id_cliente: id }
            });
            
            resp.sendStatus(200);
            
    } catch(e) {
        resp.send({ erro: e.toString()});
    }
});

app.delete('/clientes/:id', async (req, resp) => {
    try {
        let r = await db.infoc_tct_cliente.destroy({ where: {id_cliente: req.params.id }})
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});

app.get('/clientes/cartao/:idUsu', async (req, resp) => {
    try {
        let { idUsu } = req.params;

        let r = await db.infoc_tct_cliente.findOne({ where: { id_cliente: idUsu }});

        let endereco = await db.infoc_tct_cartao.findOne({ 
            where: { 
                id_cliente: r.id_cliente
            }
        });
        resp.send(endereco);

    } catch (e) {
        resp.send({ erro: e.toString()});
    }
});

app.get('/cartao', async (req, resp) => {
    try {
        let cartao = await db.infoc_tct_cartao.findAll({ order: [['id_cartao', 'desc' ]] });
        resp.send(cartao);

    } catch (e) {
        resp.send({ erro: e.toString()});
    }
});

app.post('/cartao', async (req, resp) => {
    try {
        let { dono, cartao, tipo, validade, cvv, idCliente } = req.body;

        let usu = await db.infoc_tct_cliente.findOne({ where: {id_cliente: idCliente }})
        
        if ( dono === "" )
           return resp.send ({ erro: 'Usuário não preenchido!' })
        
        if (!cartao === Number || cartao === "" )
        return resp.send ({ erro: 'Cartão não preenchido!' })   

        if ( tipo === "" )
        return resp.send ({ erro: 'Tipo de cartão não preenchido!' }) 
        
        if ( validade === "" )
        return resp.send ({ erro: 'Validade não preenchido!' }) 

        if ( cvv > 3 && cvv < 3)
        return resp.send ({ erro: 'Número de CVV inválido!' }) 


        let r = await db.infoc_tct_cartao.create({
            nm_dono: dono,
            nr_cartao: cartao,
            tp_tipo: tipo,
            dt_validade: validade,
            ds_cvv: cvv,
            id_cliente: usu.id_cliente
        });

        resp.send(r);
        } catch (e) {
        resp.send({ erro: e.toString() });
    }
});

app.put('/cartao/:id', async (req, resp) => {
    try {

        let id = req.params.id;
        let { dono, cartao, tipo, validade, cvv } = req.body;
        
        let r = await db.infoc_tct_cartao.update(
            {
                nm_dono: dono,
                nr_cartao: cartao,
                tp_tipo: tipo,          
                dt_validade: validade,
                ds_cvv: cvv
            },
            {
                where: { id_cartao: id }
            });
            
            resp.sendStatus(200);
            
    } catch(e) {
        resp.send({ erro: e.toString()});
    }
});

app.delete('/cartao/:id', async (req, resp) => {
    try {
        let r = await db.infoc_tct_cartao.destroy({ where: {id_cartao: req.params.id }})
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});

app.get('/clientes/endereco/:idUsu', async (req, resp) => {
    try {
        let { idUsu } = req.params;

        let r = await db.infoc_tct_cliente.findOne({ where: { id_cliente: idUsu }});

        let endereco = await db.infoc_tct_endereco.findOne({ 
            where: { 
                id_cliente: r.id_cliente
            }
        });
        resp.send(endereco);

    } catch (e) {
        resp.send({ erro: e.toString()});
    }
});

app.get('/endereco', async (req, resp) => {
    try {
        let endereco = await db.infoc_tct_endereco.findAll({ order: [['id_endereco', 'desc' ]] });
        resp.send(endereco);

    } catch (e) {
        resp.send({ erro: e.toString()});
    }
});

app.post('/endereco', async (req, resp) => {
    try {
        let { cep, estado, cidade, rua, numero, complemento, referencia, idCliente } = req.body;
        
        let usu = await db.infoc_tct_cliente.findOne({ where: { id_cliente: idCliente }})

        let r = await db.infoc_tct_endereco.create({
            ds_cep: cep,
            ds_estado: estado,
            nm_cidade: cidade,
            nm_rua: rua,
            ds_numero: numero,
            ds_complemento: complemento,
            nm_ponto_referencia: referencia,
            bt_status: 0,
            id_cliente: usu.id_cliente
        });
        resp.send(r);

    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});

app.put('/endereco/:id', async (req, resp) => {
    try {

        let id = req.params.id;
        let{ cep, estado, cidade, rua, numero, complemento, referencia} = req.body;
        
        let r = await db.infoc_tct_endereco.update(
            {
                ds_cep: cep,
                ds_estado: estado,
                nm_cidade: cidade,
                nm_rua: rua,
                ds_numero: numero,
                ds_complemento: complemento,
                nm_ponto_referencia: referencia
            },
            {
                where: { id_endereco: id }
            });
            
            resp.sendStatus(200);
            
    } catch(e) {
        resp.send({ erro: e.toString()});
    }
});

app.delete('/endereco/:id', async (req, resp) => {
    try {
        let r = await db.infoc_tct_endereco.destroy({ where: {id_endereco: req.params.id }})
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});


app.get('/chat', async (req, resp) => {
    try {
        let chat = await db.infoc_tct_chat.findAll({ order: [['id_chat', 'desc' ]] });
        resp.send(chat);

    } catch (e) {
        resp.send({ erro: e.toString()});
    }
});

app.post('/chat', async (req, resp) => {
    try {
        let { cliente, administrador, mensagem } = req.body;
        
        let r = await db.infoc_tct_chat.create({
            id_cliente: cliente,
            id_administrador: administrador,
            ds_mensagem: mensagem,
            dt_mensagem: new Date()
        });
        resp.send(r);

    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});

app.get('/categorias', async (req, resp) => {
    try {
        let categoria = await db.infoc_tct_categorias.findAll({ order: [['id_categoria', 'desc' ]] });
        resp.send(categoria);

    } catch (e) {
        resp.send({ erro: e.toString()});
    }
});

app.post('/categorias', async (req, resp) => {
    try {
        let { categoria } = req.body;
        
        let r = await db.infoc_tct_categorias.create({
            nm_categoria: categoria,
        });
        resp.send(r);

    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});

app.put('/categorias/:id', async (req, resp) => {
    try {

        let id = req.params.id;
        let { categoria } = req.body;
        
        let r = await db.infoc_tct_categorias.update(
            {
                nm_categoria: categoria,
            },
            {
                where: { id_categoria: id }
            });
            
            resp.sendStatus(200);
            
    } catch(e) {
        resp.send({ erro: e.toString()});
    }
});

app.post('/login', async (req, resp) => {
    const { login, senha } = req.body;
    const cryptoSenha = crypto.SHA256(senha).toString(crypto.enc.Base64);

    let r = await db.infoc_tct_cliente.findOne(
        { 
            where: { 
                ds_login: login,
                ds_senha: cryptoSenha
            },
            raw: true
    });
    
    if (r == null)
        return resp.send({ erro: "Credenciais Inválidas" });

    delete r.ds_senha;
    resp.send(r);
});

app.use('/compra', compraController);


app.listen(process.env.PORT, x => console.log(`> Server Up At Port ${process.env.PORT}`));