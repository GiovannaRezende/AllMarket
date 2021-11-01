import db from '../db.js'

import { Router } from 'express'
const app = Router();

app.get('/', async (req, resp) => {
    try {
        let compra = await db.infoc_tct_compra.findAll({ 
            attributes: getFields(), 
            order: [['id_compra', 'desc' ]] 
        });
        resp.send(compra);

    } catch (e) {
        resp.send({ erro: e.toString()});
    }
});

app.post('/', async (req, resp) => {
    try {
        const { cliente, endereco, notaFiscal, pagamento, produtos } = req.body;

        const r = await db.infoc_tct_compra.create({
            id_cliente: cliente,
            id_endereco: endereco,
            ds_nota_fiscal: notaFiscal,
            ds_forma_pagamento: pagamento
        });

        for (var produto of produtos) {
            const { item } = produto.id_produto;
            const compraItem = await db.infoc_tct_compra_item.create({
                id_produto: item,
                id_compra: r.id_compra
            })

        }
        resp.send(r);

    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});

app.delete('/compra/:id', async (req, resp) => {
    try {
        let r = await db.infoc_tct_compra.destroy({ where: {id_compra: req.params.id }})
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});

app.get('/compraitem', async (req, resp) => {
    try {
        let compraItem = await db.infoc_tct_compra_item.findAll();
        resp.send(compraItem);

    } catch (e) {
        resp.send({ erro: e.toString()});
    }
});

function getFields() {
    return [
      ['id_cliente', 'id'],
      ['ds_nota_fiscal', 'nota_fiscal'],
      ['ds_forma_pagamento', 'pagamento']
    ]
  }
  
  
export default app;