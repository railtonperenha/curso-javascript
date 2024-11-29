// let fruits = ['Maça', 'Uva', 'Laranja', 'Banana'];

// fruits.sort(); //Ordena do maior pro menor
// fruits.reverse(); //Inverte a ordem dos elementos do array
// console.log(fruits);

let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'BMW', year: 2018},
    {brand: 'Ferrari', year: 2020}
]

// FORMA MAIS DIDÁTICA
cars.sort((a, b) => {
    if(a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else {
        return 0;
    }
});
console.log(cars);

//FORMA SIMPLIFICADA - ORDENAÇÃO DO MENOR PARA O MAIOR
cars.sort((a, b) => {
    return a.year - b.year;
});
console.log(cars);

//FORMA SIMPLIFICADA - ORDENAÇÃO DO MAIOR PARA O MENOR
cars.sort((a, b) => {
    return b.year - a.year;
})
console.log(cars);