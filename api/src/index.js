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

app.listen(process.env.PORT, x => console.log(`> Server Up At Port ${process.env.PORT}`));