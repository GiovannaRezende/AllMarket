import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());

app.get('/produtos', async (req, resp) => {
    try {
        let produtos = await db.infoc_tct_produto.findAll();
        resp.send(produtos);
    } catch (e) {
        resp.send({ erro: e.toString()})
    }
})

app.post('/produtos', async (req, resp) => {
    try {
        let m = await db.infoc_tct_produto.findOne({ where: { nm_produto: produto }});

        if (m != null)
            return resp.send({ erro: 'Produto já existe!' });

        let r = await db.infoc_tct_produto.create({
            nm_categoria: categoria,
            nm_produto: produto,
            nr_codigo: codigo,
            ds_setor: setor,
            ds_embalagem: embalagem,
            nm_marca: marca,
            ds_peso: peso,
            ds_descricao: descricao,
            vl_preco: preco
        })
        resp.send(r);
    } catch (e) {
        resp.send({erro: e.toString()})
    }
})



app.listen(process.env.PORT, x => console.log(`Server up at port ${process.env.PORT}`));