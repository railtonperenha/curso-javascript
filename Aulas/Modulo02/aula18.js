let pessoa = {
    nome: 'Railton',
    sobrenome: 'Perenha',
    idade: 34,
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    }
};

console.log(pessoa.nomeCompleto());
