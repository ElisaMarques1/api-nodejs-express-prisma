//importando o pool de conexões com o banco de dados
const pool = require('../config/database');


//importando o Prisma
const { PrismaClient } = require('@prisma/client');

//inicializando o Prisma
const prisma = new PrismaClient();


// Função que retorna todos os itens armazenados
async function listItems() {
  //retorna a lista de itens
  const buscarItems = await prisma.items.findMany();

  return buscarItems;
};

// Função que cria um novo item e o adiciona à lista
async function createItem(name) {
  //adiciona um novo item a lista
  const newItem = await prisma.items.create({
    data: {
      name: name
    }
  });
    
    return newItem;

};


module.exports = {
  listItems,
  createItem
}
