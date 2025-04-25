import { db } from "../db.js";

export const getProducts = (_, res) => {
  const q = "SELECT * FROM produtos";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
}

export const createProduct = (req, res) => {
    const query = "INSERT INTO produtos (`nome`, `descricao`, `preco`, `peso`, `dataValidade`) VALUES (?)";

    if (!req.body.dataValidade || !req.body.descricao || !req.body.preco || !req.body.peso || !req.body.dataValidade) {
        return res.status(400).json("Todos os campos são obrigatórios!");
    }

    const values = [ req.body.nome, req.body.descricao, req.body.preco, req.body.peso, req.body.dataValidade ];

    db.query(query, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
}

export const updateProduct = (req, res) => {
    const productId = req.params.id;
    const query = "UPDATE produtos SET `nome` = ?, `descricao` = ?, `preco` = ?, `peso` = ?, `dataValidade` = ? WHERE `id` = ?";

    if (!req.body.nome || !req.body.descricao || !req.body.preco || !req.body.peso || !req.body.dataValidade) {
        return res.status(400).json("Todos os campos são obrigatórios!");
    }

    const values = [ req.body.nome, req.body.descricao, req.body.preco, req.body.peso, req.body.dataValidade, productId ];
    
    db.query(query, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
}

export const deleteProduct = (req, res) => {
    const productId = req.params.id;
    const query = "DELETE FROM produtos WHERE `id` = ?";
    
    db.query(query, [productId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
}