const contatoModel = require('../models/contato.models');


async function listarContatos(req, res) {
    const contatos = await contatoModel.listarContatos();
    res.json(contatos);
}


async function criarContato(req, res) {
    const {nome, telefone} = req.body;

    if (!nome) {
        return res.status(400).json({message: 'Nome é obrigatório!'});
    }

    if (!telefone) {
        return res.status(400).json({message: 'Telefone é obrigatório!'});
    }

    const novoContato = await contatoModel.criarContato(nome, telefone);

    if (novoContato) {
        return res.status(201).json({message: 'Contato criado com sucesso!'});
    } else {
        return res.status(500).json({message: 'Erro ao criar o contato!'});
    }
}

module.exports = {
    listarContatos,
    criarContato
}