const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const pool = require('../config/database');

async function listarContatos() {
    const buscarContatos = await prisma.contatos.findMany();
    return buscarContatos;
}

async function criarContato(nome, telefone) {
    const novoContato = await  prisma.contatos.create({
        data: {
            name: nome,
            telefone: telefone
        }   
    });
        return novoContato;
    }



module.exports = { 
    listarContatos,
     criarContato 
    };