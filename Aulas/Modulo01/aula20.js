let profession = "Atleta";

console.log(`Profissão: ${profession}`)
switch(profession) {
    case 'Fiscal':
        console.log("Sua camisa será VERDE");
    break;

    case 'Bombeiro':
        console.log("Sua camisa será VERMELHA");
    break;

    case 'Policial':
        console.log("Sua camisa será AZUL");
    break;

    default:
        console.log("Sua camisa será PRETA");
        break;
}