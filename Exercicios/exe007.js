//1. No array abaixo, qual numero pega a Ferrari ?
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1;
console.log(`1. ${carros[x]}`);

//2. Troque a Ferrari pro Audi
carros.splice(1, 1, 'Audi');
console.log(`2. Lista com Audi: ${carros}`);

//3. Adicione Volvo a lista
carros.push('Volvo');
console.log(`3. Lista com Volvo: ${carros}`);

//4. Mostre quantos itens tem no array.
console.log(`4. Itens no Array: ${carros.length}`);
