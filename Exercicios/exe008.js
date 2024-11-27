// 1. Faça um loop que mostre todas as frutas let fruits = ['Maçã', 'Uva', 'Banana'];
// let fruits = ['Maçã', 'Uva', 'Banana'];
//USANDO WHILE
// while (counter < fruits.length) {
//     console.log(fruits[counter]);
//     counter ++;
// }

//USANDO FOR
// for (let counter = 0; counter < fruits.length; counter ++) {
//     console.log(`Fruta: ${fruits[counter]}`);
// };

//USANDO FUNÇÃO + WHILE
// function counterFruits (fruits) {
//     fruits = ['Maçã', 'Uva', 'Banana'];
//     let counter = 0;
//     while (counter < fruits.length) {
//         console.log(`Fruta: ${fruits[counter]}`);
//         counter ++;
//     }
// }

// counterFruits();

//USANDO FUNÇÃO + FOR
function counterFruits (fruits) {
    fruits = ['Maçã', 'Uva', 'Banana'];
    for (let counter = 0; counter < fruits.length; counter ++) {
        console.log(`Fruta: ${fruits[counter]}`);
    }
};

counterFruits();

console.log('---------------------------------------------------');

//2. CONTE DE 1 ATÉ 100 COM UM WHILE

// //USANDO SINTAXE BÁSICA DE WHILE
// let contador = 1;
// while (contador <= 100) {
//     console.log(`Número: ${contador}`);
//     contador ++;
// }

//USANDO FUNÇÃO + WHILE
function countNumbers (count) {
    count = 1;
    while(count <= 100) {
        console.log(`Número: ${count}`);
        count ++;
    }
};

countNumbers();