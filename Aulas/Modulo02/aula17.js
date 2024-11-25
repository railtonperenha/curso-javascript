let personagem = {
    nome: 'Railton',
    idade: 34,
    carros: [
        {marca: 'Nissan', modelo: 'Kicks', cor: 'Dourado'},
        {marca: 'Honda', modelo: 'CRV', cor: 'Prata'}
    ]
};

console.log(`Meu carro é um ${personagem.carros[0].marca} ${personagem.carros[0].modelo}.`);
console.log(`E ele é ${personagem.carros[0].cor}!`);
