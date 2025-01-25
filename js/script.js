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

// quand la souris s'enlève de par dessus le graphique ou le pourcentage monte, ca enlève la barre violette.

document.querySelector('#stat_NCSI').addEventListener('mouseleave', leaveNCSI)
document.querySelector('#stat_dev').addEventListener('mouseleave', leavedev)
document.querySelector('#stat_ITC').addEventListener('mouseleave', leaveITC)
document.querySelector('#stat_prep').addEventListener('mouseleave', leaveprepITC)

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

// fonctions pour avancer et reculer avec le graphique

document.querySelector('#prev').addEventListener('click', reculer)
document.querySelector('#next').addEventListener('click', avancer)

// a chque clique on ajoute de la valeur a moover qui permet de faire un translate du nombre de fois ou on à appuyé
let mooved = 0
function avancer() {

    mooved = mooved + 786;
    // si mooved est plus grand que la taille de compter (calculé plus tot pour savoir combien en taille font toute les barres a la suite) alors on retourna au début 
    if (mooved >= compter * 131) {
        mooved = 0
    }
    // translate de moover px pour atteindre ce qu'on veux
    document.querySelector('#Group6').style = "transform: translateX(-" + mooved + "px);"
}
function reculer() {
    mooved = mooved - 786;
    // il est inferieur à compter, on va a la fin
    if (mooved < 0) {
        mooved = (compter - 6) * 131
    }
    // translate de moover px pour atteindre ce qu'on veux
    document.querySelector('#Group6').style = "transform: translateX(-" + mooved + "px);"
}


// quand on part du hover sur les barres de chargement en bas : stats globales par pays
function leaveNCSI() {
    document.querySelectorAll('#violet2_NCSI').forEach(e => {
        e.style = "stroke-dasharray: 0 100;";
    });
}
function leavedev() {
    document.querySelectorAll('#développement_digital').forEach(e => {
        e.style = "stroke-dasharray: 0 100;";
    });
}
function leaveITC() {
    document.querySelectorAll('#ITCsvg').forEach(e => {
        e.style = "stroke-dasharray: 0 100;";
    });
}
function leaveprepITC() {
    document.querySelectorAll('#préparationTIC').forEach(e => {
        e.style = "stroke-dasharray: 0 100;";
    });
}

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

    // lors du hover avec la barre de chargement, faire grandir la barre

    document.querySelector('#stat_NCSI').addEventListener('mouseover', alignementNCSI)
    document.querySelector('#stat_dev').addEventListener('mouseover', alignementdev)
    document.querySelector('#stat_ITC').addEventListener('mouseover', alignementITC)
    document.querySelector('#stat_prep').addEventListener('mouseover', alignementprepITC)

    // affichage en fonction des pays, stats globales pour chacun d'eux

    document.querySelector('#NCSIpourcent').innerHTML = pays[paysaffiche]['NCSI'] + " %";
    document.querySelector('#globalcontrib').innerHTML = pays[paysaffiche]['DigitalDéveloppement'] + " %";
    document.querySelector('#ITC').innerHTML = pays[paysaffiche]['DéveloppementTIC'] + " %";
    document.querySelector('#Préparationnewtech').innerHTML = pays[paysaffiche]['PréparationTIC'] + " %";
    document.querySelector('#affichagebon').innerHTML = paysaffiche.split('_').join(' ').split('-').join(' ');
    document.querySelector('#stat_pays').innerHTML = "Statistiques : " + paysaffiche;


    // affichage pour chaques domaines en fonction du pays choisi

    document.querySelector('#globalcontribution').style = "--taille : " + pays[paysaffiche]['AccomplissementsParDomaines']['ContributionGlobale'] / 100 + ';';
    document.querySelector('#Education').style = "--taille : " + pays[paysaffiche]['AccomplissementsParDomaines']['Education'] / 100 + ';';
    document.querySelector('#recherche_développement').style = "--taille : " + pays[paysaffiche]['AccomplissementsParDomaines']['RechercheDéveloppement'] / 100 + ';';
    document.querySelector('#infrastructures').style = "--taille : " + pays[paysaffiche]['AccomplissementsParDomaines']['Infrastructures'] / 100 + ';';
    document.querySelector('#Transactions').style = "--taille : " + pays[paysaffiche]['AccomplissementsParDomaines']['Utilisateurs'] / 100 + ';';
    document.querySelector('#cyber-attaques').style = "--taille : " + pays[paysaffiche]['AccomplissementsParDomaines']['RéponseMenaces'] / 100 + ';';
    document.querySelector('#perso_data').style = "--taille : " + pays[paysaffiche]['AccomplissementsParDomaines']['ProtectionDonnées'] / 100 + ';';
    document.querySelector('#cyber-crises').style = "--taille : " + pays[paysaffiche]['AccomplissementsParDomaines']['GestionCrise'] / 100 + ';';
    document.querySelector('#cybercrimes').style = "--taille : " + pays[paysaffiche]['AccomplissementsParDomaines']['PoliceCybercriminelle'] / 100 + ';';
    document.querySelector('#militaire').style = "--taille : " + pays[paysaffiche]['AccomplissementsParDomaines']['Militaire'] / 100 + ';';
    document.querySelector('#incidents').style = "--taille : " + pays[paysaffiche]['AccomplissementsParDomaines']['RéponseIncidents'] / 100 + ';';
    document.querySelector('#Politique').style = "--taille : " + pays[paysaffiche]['AccomplissementsParDomaines']['Politique'] / 100 + ';';


    // augmentation de la taille du trait de chargement lors du passage de la souris

    function alignementNCSI() {
        document.querySelectorAll('#violet2_NCSI').forEach(e => {
            e.style = "stroke-dasharray: " + Math.round(pays[paysaffiche]['NCSI'] * 100) / 100 + " " + Math.round((100 - pays[paysaffiche]['NCSI']) * 100) / 100 + ";";
        });
    }
    function alignementdev() {
        document.querySelectorAll('#développement_digital').forEach(e => {
            e.style = "stroke-dasharray: " + Math.round(pays[paysaffiche]['DigitalDéveloppement'] * 100) / 100 + " " + Math.round((100 - pays[paysaffiche]['DigitalDéveloppement']) * 100) / 100 + ";";
        });
    }
    function alignementITC() {
        document.querySelectorAll('#ITCsvg').forEach(e => {
            e.style = "stroke-dasharray: " + Math.round(pays[paysaffiche]['DéveloppementTIC'] * 100) / 100 + " " + Math.round((100 - pays[paysaffiche]['DéveloppementTIC']) * 100) / 100 + ";";
        });
    }
    function alignementprepITC() {
        document.querySelectorAll('#préparationTIC').forEach(e => {
            e.style = "stroke-dasharray: " + Math.round(pays[paysaffiche]['PréparationTIC'] * 100) / 100 + " " + Math.round((100 - pays[paysaffiche]['PréparationTIC']) * 100) / 100 + ";";
        });
    }
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