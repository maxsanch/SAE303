// faire en sorte que l'on puisse avoir un hover sur les statistiques

// créer une div qui va accueillir la donnée

function actualisation() {
    document.querySelectorAll('.barbapapa').forEach(e => {

        // vérifier quelle est la catégorie séléctionnée

        // sécurité, Développement et différence sont présents simplement pour comprendre quelle statistique le graphique doit afficher, le Hover s'adapte alors en conséquence.

        e.addEventListener('mouseover', afficherdiv)

        function afficherdiv() {
            document.querySelector('#' + e.id + 'hover').classList.add('ouverturehover')
            document.querySelector('#' + e.id + 'texthover').classList.add('ouverturehover')
        }

        e.addEventListener('mouseleave', fermer)

        function fermer() {
            document.querySelector('#' + e.id + 'hover').classList.remove('ouverturehover')
            document.querySelector('#' + e.id + 'texthover').classList.remove('ouverturehover')
        }
    })
}

// x par défaut pour le début de la ImageBitmapRenderingContext, x2 par défaut pour le début du texte

let x = 53.5;
let x2 = 109;

// créer un compteur pour le retour au début lors ce que l'utilisateur arrive au bout des pays disponibles pour le graphique à barres

let compter = 0;

Object.entries(pays).forEach(([key]) => {

    // ici on met dans le menu déroulant tout les pays qui existent avec des split pour rendre le tout plus logique et beau

    document.querySelector('#pays').innerHTML += "<p id='" + key + "'><b>" + key.split('-').join(' ').split('_').join(' ') + "</b></p>"

    // ici on définis splited en vide qui va accueillir le nom des pays de manière splitée si ils ont des tirets du 8
    let splited = "";

    if (key.split('_').length >= 2) {
        splited = '<tspan x=' + x2 + ' dy="0">' + key.split('_')[0] + '</span><tspan x=' + x2 + ' dy="25">' + key.split('_')[1] + '</tspan>';
        if (key.split('_').length >= 3) {
            splited = '<tspan x=' + x2 + ' dy="0">' + key.split('_')[0] + '</span><tspan x=' + x2 + ' dy="25">' + key.split('_')[1] + ' ' + key.split('_')[2] + '</tspan>';
        }
    }
    else {
        splited = key;
    }

    // on inclut ensuite le tout dans le group6 du svg (le nom est l'original de figma) afin d'avoir tout le graphique qui s'affiche
    document.querySelector('#Group6').innerHTML += '<rect class="barbapapa" id="' + key + '" x="' + x + '" y="38.5" width="111" height="' + (pays[key]['NCSI'] * 690) / 100 + '" fill="url(#paint0_linear_106_302)" stroke="white"></rect><text x="' + x2 + '" y="15" font-family="Arial" font-size="20" text-anchor="middle" fill="white">' + splited + '</text><rect id="' + key + 'hover" class="rectinfo" x="' + x2 + '" rx="5" y="' + (((pays[key]['NCSI'] * 690) / 100) + 55) + '" width="111" height="55" fill="#FDFDFD"/><text class="rectinfo2" id="' + key + 'texthover" x="' + x2 + '" y="' + ((786 - (((pays[key]['NCSI'] * 690) / 100) + 55)) - 23.5) + '" font-family="Arial" font-size="20" text-anchor="middle" fill="black">' + pays[key]['NCSI'] + '%</text>'
    // on ajout la taille de chaque barres a chaque itération et on a le tout
    x = x + 111 + 20;
    x2 = x2 + 111 + 20;
    // ajouter 1 a compter afin que si il arrive au bout tout soit reset vers le début
    compter = compter + 1

    actualisation();
});

// pays par défaut

let paysaffiche = 'France';

// changement de pays au clique sur l'un d'eux dans le menu déroulant
document.querySelectorAll('#pays>p').forEach(element => {
    element.addEventListener('click', changerpaysaffiche)

    function changerpaysaffiche() {
        paysaffiche = this.id;
        actualiser();
    }
});


function actualiser() {

    // affichage en fonction des pays, stats globales pour chacun d'eux

    document.querySelector('#NCSIpourcent').innerHTML = pays[paysaffiche]['NCSI'] + " %";
    document.querySelector('#globalcontrib').innerHTML = pays[paysaffiche]['DigitalDéveloppement'] + " %";
    document.querySelector('#ITC').innerHTML = pays[paysaffiche]['DéveloppementTIC'] + " %";
    document.querySelector('#Préparationnewtech').innerHTML = pays[paysaffiche]['PréparationTIC'] + " %";
    document.querySelector('#affichagebon').innerHTML = paysaffiche.split('_').join(' ').split('-').join(' ');
    document.querySelector('#stat_pays').innerHTML = "Statistiques : " + paysaffiche;


    // affichage pour chaques domaines en fonction du pays choisi

    Object.entries(pays[paysaffiche]['AccomplissementsParDomaines']).forEach(([cléPays, dataPays]) => {
        document.querySelector('#' + cléPays).style = "--taille : " + dataPays / 100 + ';';
    })

    // lors du hover avec la barre de chargement, faire grandir la barre

    document.querySelectorAll('.heightpourcentage').forEach(e => {
        e.addEventListener('mouseover', grandir)

        function grandir() {
            splitid = e.id.split('_')[1]
            document.querySelectorAll('#violet2_' + splitid + '').forEach(e => {
                e.style = "stroke-dasharray: " + Math.round(pays[paysaffiche][splitid] * 100) / 100 + " " + Math.round((100 - pays[paysaffiche][splitid]) * 100) / 100 + ";";
            });
        }

        e.addEventListener('mouseleave', enlever)

        function enlever() {
            splitid = e.id.split('_')[1]
            document.querySelectorAll('#violet2_' + splitid + '').forEach(e => {
                e.style = "stroke-dasharray: 0 100;";
            });
        }
    })
}

// fonction par défaut en France.

actualiser();

document.querySelectorAll('.deroulant').forEach(e => {
    // ouverture du menu déroulant
    e.addEventListener('click', openned)

    function openned() {
        e.querySelector('.absoluteder').classList.toggle('ouvert')
    }
})


// fonctions du menu hamburger sur mobile

document.querySelector('.hamburger').addEventListener('click', ouvrirheader)


function ouvrirheader() {
    document.querySelector('.links').classList.toggle('openlinks')
}

// mettre dans le menu déroulant des domaiens les différents domaines 

for (let cle in infos) {
    let domaine = document.createElement("p");
    domaine.className = 'bold'
    domaine.innerText = cle;
    document.querySelector('#domainesder').appendChild(domaine);
}

// mettre les informations

document.querySelectorAll('#domainesder>p').forEach(element => {
    element.addEventListener('click', changerinfos)

    function changerinfos() {
        document.querySelector('#choosendomaine').innerHTML = element.innerHTML
        document.querySelector('.explains>ul').innerHTML = infos[element.innerText]
    }
});


/*****************************/
/*********ANIMATIONS**********/
/*****************************/



window.addEventListener('scroll', scrollanimation)

function scrollanimation() {
    // document.querySelectorAll('.labarresurletéco').forEach(e => {
    //     console.log(e.getBoundingClientRect().top+" < "+window.innerHeight)

    //     if (e.getBoundingClientRect().top < window.innerHeight) {
    //         e.style = "height: 100%;";
    //     }
    //     else{
    //         e.style = "height: 0%;";
    //     }
    // })

    let graphique = document.querySelectorAll('.graphique')

    graphique.forEach(e => {
        if (e.getBoundingClientRect().top < (window.innerHeight - 40)) {
            e.style = "transform: translateX(0);";
        }
        else {
            e.style = "transform: translateX(-150%);";
        }
    })

    let explains = document.querySelectorAll('.explains')

    explains.forEach(e => {
        if (e.getBoundingClientRect().top < (window.innerHeight - 40)) {
            e.style = "transform: translateX(0);";
        }
        else {
            e.style = "transform: translateX(150%);";
        }
    })
    let bout = document.querySelectorAll('.Nextgr')

    bout.forEach(e => {
        if (e.getBoundingClientRect().top < (window.innerHeight)) {
            e.classList.add('anim')
        }
        else {
            e.classList.remove('anim')
        }
    })

    document.querySelectorAll('.leftpour').forEach(e =>{
        if (e.getBoundingClientRect().top < (window.innerHeight)) {
            e.style='transform: translateX(0)';
        }
        else {
            e.style='transform: translateX(-150%)';
        }
    })
    document.querySelectorAll('.rightpour').forEach(e =>{
        if (e.getBoundingClientRect().top < (window.innerHeight)) {
            e.style='transform: translateX(0)';
        }
        else {
            e.style='transform: translateX(150%)';
        }
    })
    
    document.querySelectorAll('.cont').forEach(e=>{
        if (e.getBoundingClientRect().top < (window.innerHeight)) {
            e.classList.add('anim')
        }
        else {
            e.classList.remove('anim')
        }
    })
    document.querySelectorAll('.domainesingle').forEach(e=>{
        if (e.getBoundingClientRect().top < (window.innerHeight)) {
            e.classList.add('anim')
        }
        else {
            e.classList.remove('anim')
        }
    })
}
