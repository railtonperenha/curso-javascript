/*
Calcule o preço do imovel
- m² = R$ 3.000
- Se tiver 1 quarto, o m² é x1
- Se tiver 2 quartos, o m² é x1.2
- Se tiver 3 quartos, o m² é x1.5
*/

function calcularImovel (metragem, quartos) {
    let m2 = 3000;
    if (quartos === 1) {
        let preco = metragem * m2;
        console.log(`A casa custa R$ ${preco}`);
    } else if (quartos === 2) {
        let preco = metragem * (m2 * 1.2);
        console.log(`A casa custa R$ ${preco}`);
    } else if (quartos === 3) {
        let preco = metragem * (m2 * 1.5);
        console.log(`A casa custa R$ ${preco}`);
    } else {
        let mensagem = 'Quantidade de quartos indisponível.';
        console.log(mensagem);
    }
}

let metragem = 123;
let quartos = 2;
let preco = calcularImovel(metragem, quartos);