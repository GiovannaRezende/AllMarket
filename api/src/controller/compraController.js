import db from '../db.js'

import Router from 'express'
const app = Router();

app.get('/', async (req, resp) => {
    try {
        let compra = await db.infoc_tct_compra.findAll({ 
            order: [['id_compra', 'desc' ]] 
        });
        resp.send(compra);

    } catch (e) {
        resp.send({ erro: e.toString()});
    }
});

app.get('/endereco/:idCompra', async (req, resp) => {
    try {
        let { idCompra } = req.params;

        let compra = await db.infoc_tct_compra.findOne({ 
            where: { 
                id_compra: idCompra  
            }
        });

        let endereco = await db.infoc_tct_endereco.findOne({
            where: { id_endereco: compra.id_endereco }
        })

        resp.send(endereco);

    } catch (e) {
        resp.send({ erro: e.toString()});
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


app.get('/pedidousu/:idCompra', async (req, resp) => {
    try {
        let { idCompra } = req.params;

        let compraItem = await db.infoc_tct_produto.findAll({ 
            where: { 
                '$infoc_tct_compra_items.id_compra$': idCompra 
            },
            include: [
                {
                    model: db.infoc_tct_compra_item,
                    as: 'infoc_tct_compra_items',
                    required: true,
                    attributes: []
                }
            ],
            attributes: [
                "id_produto",
                "id_categoria",
                "nm_produto",
                "nr_codigo",
                "vl_preco",
                "ds_embalagem",
                "nm_marca",
                "ds_peso",
                "ds_descricao",
                "bt_promocao",
                "img_produto"
            ]
        });

        resp.send(compraItem);

    } catch (e) {
        resp.send({ erro: e.toString()});
    }
});

app.get('/:idUsu', async (req, resp) => {
    try {
        let { idUsu } = req.params;

        let r = await db.infoc_tct_cliente.findOne({ where: { id_cliente: idUsu }});

        let compra = await db.infoc_tct_compra.findOne({ 
            where: { 
                id_cliente: r.id_cliente
            }
        });
        resp.send(compra);

    } catch (e) {
        resp.send({ erro: e.toString()});
    }
});

app.get('/entrega/:idCompra', async (req, resp) => {
    try {
        let { idCompra } = req.params;

        let r = await db.infoc_tct_compra.findOne({ where: { id_compra: idCompra }});

        resp.send(r);

    } catch (e) {
        resp.send({ erro: e.toString()});
    }
});

app.post('/', async (req, resp) => {
    try {
        const { cliente, endereco, notaFiscal, pagamento, produtos, valorTotal, qtd } = req.body;

        const r = await db.infoc_tct_compra.create({
            id_cliente: cliente.id_cliente,
            id_endereco: endereco.id_endereco,
            ds_nota_fiscal: notaFiscal,
            ds_forma_pagamento: pagamento,
            bt_aprovada: null,
            vl_total: valorTotal,
            qtd_quantidade: qtd
        });

        for (var produto of produtos) {

            let item = await db.infoc_tct_produto.findOne({ where: {id_produto: produto.id_produto }})

            const compraItem = await db.infoc_tct_compra_item.create({
                id_produto: item.id_produto,
                id_compra: r.id_compra
            })

        }
        resp.send(r);

    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});

app.delete('/:id', async (req, resp) => {
    try {
        let r = await db.infoc_tct_compra.destroy({ where: {id_compra: req.params.id }})
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
});


app.put('/aprovacao/:idCompra', async (req, resp) => {
    try {
        let { idCompra } = req.params;

        console.log(idCompra)

        const r = await db.infoc_tct_compra.update(
            {
                bt_aprovada: true
            },
            {
                where: { id_compra: idCompra }
            });        
        
        resp.send(r);

    } catch (e) {
        resp.send({ erro: e.toString()});
    }
});

app.put('/status/', async (req, resp) => {
    try {
        let { idCompra, status } = req.body;

        console.log(status)

        if (status === "A Caminho") {
            status = "Entregue"
        } else if (status === "Em Preparo") {
            status = "A Caminho"
        } else 
            status = "Em Preparo"
        

        const r = await db.infoc_tct_compra.update(
            {
                ds_status: status
            },
            {
                where: { id_compra: idCompra }
            });        
        
        resp.send(r);

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