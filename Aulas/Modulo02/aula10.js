// Prmeira forma: Usado sempre que o código tem mais de uma linha pra ser executado.
const somar = (x, y) => {
    return x + y;
}

console.log(somar(10, 5));

// Segunda forma: Quando o código usa apenas uma linha para executar.
const somando = (a, b) => a + b;
console.log(somando(10, 5));

// Terceira forma: Quando a função tem apenas um parâmetro.
const sobrenome = (sob) => 'Railton ' + sob;
console.log(sobrenome('Perenha'));