import db from './db.js';
import express from 'express';
import cors from 'cors';
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
        let { produtos, codigo, setor, embalagem, marca, peso, descricao, preco } = req.body;
        
        let r = await db.infoc_tct_produto.create({
            nm_produto: produtos,
            nr_codigo: codigo,
            ds_setor: setor,
            ds_embalagem: embalagem,
            nm_marca: marca,
            ds_peso: peso,
            ds_descricao: descricao,
            vl_preco: preco
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
                nm_produto: p.produtos,
                nr_codigo: p.codigo,
                ds_setor: p.setor,
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

app.listen(process.env.PORT, x => console.log(`> Server Up At Port ${process.env.PORT}`));