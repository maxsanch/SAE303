// gérer le responsif sur les pays

if (screen.width <= 620) {
    // resize des différents pays
    document.querySelector('#totaleurope').setAttribute('width', '103');
    document.querySelector('#totalafrique').setAttribute('width', '60');
    document.querySelector('#totalasie').setAttribute('width', '103');
    document.querySelector('#totalamériquenord').setAttribute('width', '101');
    document.querySelector('#totalamériquesud').setAttribute('width', '48');
    document.querySelector('#totalocéanie').setAttribute('width', '103');

    // garder en mémoire le contenu des boutons next et previous afin de les mettre dans un autre endroit sur mobile

    let memoire2 = document.querySelector('.categoriecentre').innerHTML
    document.querySelector('.categoriecentre').remove();
    document.querySelector('.categoriecentre2').innerHTML = memoire2
}
