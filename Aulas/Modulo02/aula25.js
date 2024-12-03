let fruits = ['Banana', 'Laranja', 'Maçã', 'Pêra', 'Uva'];

//MÉTODO FILTER():
// let bigFruits = fruits.filter((item) => {
//     return item.length > 4; //FORMA SIMPLIFICADA: se item tiver mais que 4 caracteres, retorna true.
    
//     // if(item.length > 4) { //FORMA DETALHADA
//     //     return true;
//     // } else {
//     //     return false;
//     // }
// });
// ----------------------------------------------------------

//MÉTODO EVERY()'TODOS':
// let ok = fruits.every((value) => {
//     return value.length > 3;
// });

// if (ok) {
//     console.log('Todos são maiores que 3');
// } else {
//     console.log('Não são todos maiores que 3');
// };
// ----------------------------------------------------------

//MÉTODO SOME() 'ALGUM':
// let ok = fruits.some((value) => {
//     return value.length > 3;
// });

// if (ok) {
//     console.log('Algum item é maior que 3');
// } else {
//     console.log('Nenhum item é maior que 3');
// };

//MÉTODO INCLUDES():
if (fruits.includes('Uva')) {
    console.log('Tem uva sim!');
} else {
    console.log('Não tem uva!')
};
