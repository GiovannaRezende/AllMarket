import db from './db.js';
import express from 'express';
import cors from 'cors';
import multer from 'multer'
import path from 'path'


const app = express();
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})


const upload = multer({ storage: storage })

app.get('/produtos', async (req, resp) => {
    try {
        let produtos = await db.infoc_tct_produto.findAll({ order: [['id_produto', 'desc' ]] });
        resp.send(produtos);

    } catch (e) {
        resp.send({ erro: e.toString()});
    }
});

app.get('/produto', async (req, resp) => {
    let dirname = path.resolve();
    resp.sendFile(req.query.imagem, { root: path.join(dirname) });
});

app.post('/produtos', upload.single('imagem'), async (req, resp) => {
    try {
        let { categoria, produto, codigo, preco, embalagem, marca, peso, descricao } = req.body;
        let { path } = req.file;
        
        let r = await db.infoc_tct_produto.create({
            id_categoria: categoria,
            nm_produto: produto,
            nr_codigo: codigo,
            ds_embalagem: embalagem,
            nm_marca: marca,
            ds_peso: peso,
            ds_descricao: descricao,
            vl_preco: preco,
            img_produto: path
        });
        resp.send(r);

    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});

app.put('/produtos/:id', async (req, resp) => {
    try {

        let id = req.params.id;
        let p = req.body;
        
        let r = await db.infoc_tct_produto.update(
            {
                id_categoria: p.categoria,
                nm_produto: p.produtos,
                nr_codigo: p.codigo,
                ds_embalagem: p.embalagem,
                nm_marca: p.marca,
                ds_peso: p.peso,
                ds_descricao: p.descricao,
                vl_preco: p.preco
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

app.post('/clientes', async (req, resp) => {
    try {
        let { endereco, cartao, nome, email, senha, genero, nascimento, telefone, cpf } = req.body;
        
        let r = await db.infoc_tct_cliente.create({
            id_endereco: endereco,
            id_cartao: cartao,
            nm_nome: nome,
            ds_email: email,
            ds_senha: senha,
            ds_genero: genero,
            dt_nascimento: nascimento,
            ds_telefone: telefone,
            ds_cpf: cpf
        });
        resp.send(r);

    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});

app.put('/clientes/:id', async (req, resp) => {
    try {

        let id = req.params.id;
        let c = req.body;
        
        let r = await db.infoc_tct_cliente.update(
            {
                nm_nome: c.nome,
                ds_email: c.email,
                ds_senha: c.senha,
                ds_genero: c.genero,
                dt_nascimento: c.nascimento,
                ds_telefone: c.telefone,
                ds_cpf: c.cpf
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
        let { dono, cartao, tipo, validade, cvv } = req.body;
        
        let r = await db.infoc_tct_cartao.create({
            nm_dono: dono,
            nr_cartao: cartao,
            tp_tipo: tipo,
            dt_validade: validade,
            ds_cvv: cvv
        });
        resp.send(r);

    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});

app.put('/cartao/:id', async (req, resp) => {
    try {

        let id = req.params.id;
        let c = req.body;
        
        let r = await db.infoc_tct_cartao.update(
            {
                nm_dono: c.dono,
                nr_cartao: c.cartao,
                tp_tipo: c.tipo,          
                dt_validade: c.validade,
                ds_cvv: c.cvv
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
        let { cep, estado, cidade, rua, numero, complemento, referencia } = req.body;
        
        let r = await db.infoc_tct_endereco.create({
            ds_cep: cep,
            ds_estado: estado,
            nm_cidade: cidade,
            nm_rua: rua,
            ds_numero: numero,
            ds_complemento: complemento,
            nm_ponto_referencia: referencia
        });
        resp.send(r);

    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});

app.put('/endereco/:id', async (req, resp) => {
    try {

        let id = req.params.id;
        let e = req.body;
        
        let r = await db.infoc_tct_endereco.update(
            {
                ds_cep: e.cep,
                ds_estado: e.estado,
                nm_cidade: e.cidade,
                nm_rua: e.rua,
                ds_numero: e.numero,
                ds_complemento: e.complemento,
                nm_ponto_referencia: e.referencia
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

app.get('/administrador', async (req, resp) => {
    try {
        let administrador = await db.infoc_tct_administrador.findAll({ order: [['id_administrador', 'desc' ]] });
        resp.send(administrador);

    } catch (e) {
        resp.send({ erro: e.toString()});
    }
});

app.post('/administrador', async (req, resp) => {
    try {
        let { nome, login, senha } = req.body;
        
        let r = await db.infoc_tct_administrador.create({
            nm_nome: nome,
            ds_login: login,
            ds_senha: senha
        });
        resp.send(r);

    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});

app.put('/administrador/:id', async (req, resp) => {
    try {

        let id = req.params.id;
        let a = req.body;
        
        let r = await db.infoc_tct_administrador.update(
            {
                nm_nome: a.nome,
                ds_login: a.login,
                ds_senha: a.senha
            },
            {
                where: { id_administrador: id }
            });
            
            resp.sendStatus(200);
            
    } catch(e) {
        resp.send({ erro: e.toString()});
    }
});

app.delete('/administrador/:id', async (req, resp) => {
    try {
        let r = await db.infoc_tct_administrador.destroy({ where: {id_administrador: req.params.id }})
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
        let c = req.body;
        
        let r = await db.infoc_tct_categorias.update(
            {
                nm_categoria: c.categoria,
            },
            {
                where: { id_categoria: id }
            });
            
            resp.sendStatus(200);
            
    } catch(e) {
        resp.send({ erro: e.toString()});
    }
});



app.listen(process.env.PORT, x => console.log(`> Server Up At Port ${process.env.PORT}`));