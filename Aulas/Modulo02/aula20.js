// let cores = [
//     'preto',
//     'branco',
//     'azul',
//     'vermelho'
// ]
// cores.push('verde');


//Exemplo 1
// for (let n = 0; n < cores.length; n ++) {
//     console.log(cores[n]);
// };

//Exemplo 2
// for (let i in cores) {
//     console.log(cores[i]);
// }

//Exemplo 3
// for (let cor of cores) {
//     console.log(cor);
// }

//Loop FOR em objetos
let cores = [
    {nome: 'preto', qt: 10},
    {nome: 'azul', qt: 0},
    {nome: 'vermelho', qt: 15},
    {nome: 'verde', qt: 0}
];

for (let cor of cores) {
    if (cor.qt === 0) {
        console.log(`Cor: ${cor.nome} - Quantidade: Acabou`);
    } else {
        console.log(`Cor: ${cor.nome} - Quantidade: ${cor.qt}`);
    }
};