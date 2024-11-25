let personagem = {
    nome: 'Railton',
    idade: 34,
    pais: 'Brasil',
    olhos: ['preto', 'azul'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
};

console.log(`${personagem.nome} tem ${personagem.idade} anos`);
console.log(`Seu nível de magia é: ${personagem.caracteristicas.magia}`);
console.log(`Seu olho direito é da cor: ${personagem.olhos[1]}`);