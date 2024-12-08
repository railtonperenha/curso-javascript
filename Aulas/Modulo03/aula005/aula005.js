function clicou () {
    let teste = document.querySelector('#teste');
    // console.log(teste.children[0].children);
    const ul = teste.querySelector('ul');
    ul.innerHTML += '<li>Item alterado</li>'
}