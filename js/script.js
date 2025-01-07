// gérer le responsif sur les pays

if (screen.width <= 620) {
    document.querySelector('#totaleurope').setAttribute('width', '103');
    document.querySelector('#totalafrique').setAttribute('width', '60');
    document.querySelector('#totalasie').setAttribute('width', '103');
    document.querySelector('#totalamériquenord').setAttribute('width', '101');
    document.querySelector('#totalamériquesud').setAttribute('width', '48');
    document.querySelector('#totalocéanie').setAttribute('width', '103');


    let memoire = document.querySelector('.nextandprev').innerHTML
    document.querySelector('.nextandprev').remove();
    document.querySelector('.mobilnextandprev').innerHTML = memoire
    let memoire2 = document.querySelector('.categoriecentre').innerHTML
    document.querySelector('.categoriecentre').remove();
    document.querySelector('.categoriecentre2').innerHTML = memoire2
}

document.querySelector('#stat_NCSI').addEventListener('mouseleave', leaveNCSI)
document.querySelector('#stat_dev').addEventListener('mouseleave', leavedev)
document.querySelector('#stat_ITC').addEventListener('mouseleave', leaveITC)
document.querySelector('#stat_prep').addEventListener('mouseleave', leaveprepITC)

let compter = 0;

let europeNCSI = [];
let afriqueNCSI = [];
let asieNCSI = [];
let nordNCSI = [];
let occeanieNCSI = [];
let sudNCSI = [];

let x = 53.5;
let x2 = 109;

Object.entries(pays).forEach(([key]) => {

    if (pays[key]['Continent'] == 'Europe') {
        europeNCSI.push(pays[key]['NCSI'])
    }
    if (pays[key]['Continent'] == 'Afrique') {
        afriqueNCSI.push(pays[key]['NCSI'])
    }
    if (pays[key]['Continent'] == 'Asie') {
        asieNCSI.push(pays[key]['NCSI'])
    }

    if (pays[key]['Continent'] == 'Amérique du nord') {
        nordNCSI.push(pays[key]['NCSI'])
    }
    if (pays[key]['Continent'] == 'Amérique du sud') {
        sudNCSI.push(pays[key]['NCSI'])
    }

    if (pays[key]['Continent'] == 'Océanie') {
        occeanieNCSI.push(pays[key]['NCSI'])
    }

    document.querySelector('#pays').innerHTML += "<p id='" + key + "'><b>" + key.split('-').join(' ').split('_').join(' ') + "</b></p>"

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

    document.querySelector('#Group6').innerHTML += '<rect id="' + key + '" x="' + x + '" y="38.5" width="111" height="' + (pays[key]['NCSI'] * 690) / 100 + '" fill="url(#paint0_linear_106_302)" stroke="white"></rect> <text x="' + x2 + '" y="15" font-family="Arial" font-size="20" text-anchor="middle" fill="white">' + splited + '</text>'
    x = x + 111 + 20;
    x2 = x2 + 111 + 20;

    compter = compter + 1
});


let moyenne_europe = Math.round((europeNCSI.reduce(moyenne) / europeNCSI.length) * 100) / 100
let moyenne_afrique = Math.round((afriqueNCSI.reduce(moyenne) / afriqueNCSI.length) * 100) / 100
let moyenne_asie = Math.round((asieNCSI.reduce(moyenne) / asieNCSI.length) * 100) / 100
let moyenne_nord = Math.round((nordNCSI.reduce(moyenne) / nordNCSI.length) * 100) / 100
let moyenne_sud = Math.round((sudNCSI.reduce(moyenne) / sudNCSI.length) * 100) / 100
let moyenne_occeanie = Math.round((occeanieNCSI.reduce(moyenne) / occeanieNCSI.length) * 100) / 100

function moyenne(first, nombre) {
    return first + nombre;
}


document.querySelectorAll('.continentsingle').forEach(e => {
    e.addEventListener('mouseover', changercouleur);
    e.addEventListener('mouseleave', returncouleur);

    function changercouleur() {
        e.querySelectorAll('path').forEach(couleur => {
            couleur.setAttribute('stroke', '#B7F4FF')
        })
    }
    function returncouleur() {
        e.querySelectorAll('path').forEach(couleur => {
            couleur.setAttribute('stroke', '#CEB9FF')
        })
    }

    e.addEventListener('click', continent);

    function continent() {
        document.querySelector('#Group6').innerHTML = '';
        x = 53.5
        let x2 = 109;
        compter = 0;
        document.querySelector('#Group6').style = "transform: translateX(0);"
        Object.entries(pays).forEach(([key]) => {

            if (e.querySelector('g').id == 'europe') {
                if (pays[key]['Continent'] == 'Europe') {
                    document.querySelector('#Group6').innerHTML += '<rect id="' + key + '" x="' + x + '" y="38.5" width="111" height="' + (pays[key]['NCSI'] * 690) / 100 + '" fill="url(#paint0_linear_106_302)" stroke="white"></rect> <text x="' + x2 + '" y="15" font-family="Arial" font-size="20" text-anchor="middle" fill="white">' + key + '</text>'
                    x = x + 111 + 20;
                    x2 = x2 + 111 + 20;
                    compter = compter + 1
                }
            }
            if (e.querySelector('g').id == 'afrique') {
                if (pays[key]['Continent'] == 'Afrique') {
                    document.querySelector('#Group6').innerHTML += '<rect id="' + key + '" x="' + x + '" y="38.5" width="111" height="' + (pays[key]['NCSI'] * 690) / 100 + '" fill="url(#paint0_linear_106_302)" stroke="white" /><text x="' + x2 + '" y="15" font-family="Arial" font-size="20" text-anchor="middle" fill="white">' + key + '</text>'
                    x = x + 111 + 20;
                    x2 = x2 + 111 + 20;
                    compter = compter + 1
                }
            }
            if (e.querySelector('g').id == 'asie') {
                if (pays[key]['Continent'] == 'Asie') {
                    document.querySelector('#Group6').innerHTML += '<rect id="' + key + '" x="' + x + '" y="38.5" width="111" height="' + (pays[key]['NCSI'] * 690) / 100 + '" fill="url(#paint0_linear_106_302)" stroke="white" /><text x="' + x2 + '" y="15" font-family="Arial" font-size="20" text-anchor="middle" fill="white">' + key + '</text>'
                    x = x + 111 + 20;
                    x2 = x2 + 111 + 20;
                    compter = compter + 1
                }
            }
            if (e.querySelector('g').id == 'amériquenord') {
                if (pays[key]['Continent'] == 'Amérique du nord') {
                    document.querySelector('#Group6').innerHTML += '<rect id="' + key + '" x="' + x + '" y="38.5" width="111" height="' + (pays[key]['NCSI'] * 690) / 100 + '" fill="url(#paint0_linear_106_302)" stroke="white" /><text x="' + x2 + '" y="15" font-family="Arial" font-size="20" text-anchor="middle" fill="white">' + key + '</text>'
                    x = x + 111 + 20;
                    x2 = x2 + 111 + 20;
                    compter = compter + 1
                }
            }
            if (e.querySelector('g').id == 'ameriquesud') {
                if (pays[key]['Continent'] == 'Amérique du sud') {
                    document.querySelector('#Group6').innerHTML += '<rect id="' + key + '" x="' + x + '" y="38.5" width="111" height="' + (pays[key]['NCSI'] * 690) / 100 + '" fill="url(#paint0_linear_106_302)" stroke="white" /><text x="' + x2 + '" y="15" font-family="Arial" font-size="20" text-anchor="middle" fill="white">' + key + '</text>'
                    x = x + 111 + 20;
                    x2 = x2 + 111 + 20;
                    compter = compter + 1
                }
            }
            if (e.querySelector('g').id == 'océanie') {
                if (pays[key]['Continent'] == 'Océanie') {
                    document.querySelector('#Group6').innerHTML += '<rect id="' + key + '" x="' + x + '" y="38.5" width="111" height="' + (pays[key]['NCSI'] * 690) / 100 + '" fill="url(#paint0_linear_106_302)" stroke="white" /><text x="' + x2 + '" y="15" font-family="Arial" font-size="20" text-anchor="middle" fill="white">' + key + '</text>'
                    x = x + 111 + 20;
                    x2 = x2 + 111 + 20;
                    compter = compter + 1
                }
            }
        });
    }
});

document.querySelector('#prev').addEventListener('click', reculer)
document.querySelector('#next').addEventListener('click', avancer)

let mooved = 0
function avancer() {

    mooved = mooved + 786;

    if (mooved >= compter * 131) {
        mooved = 0
    }
    document.querySelector('#Group6').style = "transform: translateX(-" + mooved + "px);"
}
function reculer() {
    mooved = mooved - 786;

    if (mooved < 0) {
        mooved = (compter - 6) * 131
    }
    document.querySelector('#Group6').style = "transform: translateX(-" + mooved + "px);"
}

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

let paysaffiche = 'France';

document.querySelectorAll('#pays>p').forEach(element => {
    element.addEventListener('click', changerpaysaffiche)

    function changerpaysaffiche() {
        paysaffiche = this.id;
        actualiser();
    }
});


function actualiser() {

    document.querySelector('#stat_NCSI').addEventListener('mouseover', alignementNCSI)
    document.querySelector('#stat_dev').addEventListener('mouseover', alignementdev)
    document.querySelector('#stat_ITC').addEventListener('mouseover', alignementITC)
    document.querySelector('#stat_prep').addEventListener('mouseover', alignementprepITC)

    // affichage en fonction des pays

    document.querySelector('#NCSIpourcent').innerHTML = pays[paysaffiche]['NCSI'] + " %";
    document.querySelector('#globalcontrib').innerHTML = pays[paysaffiche]['DigitalDéveloppement'] + " %";
    document.querySelector('#ITC').innerHTML = pays[paysaffiche]['DéveloppementTIC'] + " %";
    document.querySelector('#Préparationnewtech').innerHTML = pays[paysaffiche]['PréparationTIC'] + " %";
    document.querySelector('#affichagebon').innerHTML = paysaffiche.split('_').join(' ').split('-').join(' ');
    document.querySelector('#stat_pays').innerHTML = "Statistiques : " + paysaffiche;


    // affichage pour chaques domaines

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

actualiser();

document.querySelectorAll('.deroulant').forEach(e => {

    e.addEventListener('click', openned)

    function openned() {
        e.querySelector('.absoluteder').classList.toggle('ouvert')
    }
})

document.querySelector('.hamburger').addEventListener('click', ouvrirheader)


function ouvrirheader() {
    document.querySelector('.links').classList.toggle('openlinks')
}

document.querySelector('#europe2').innerHTML = '<b>' + moyenne_europe + ' %</b>'
document.querySelector('#afrique2').innerHTML = '<b>' + moyenne_afrique + ' %</b>'
document.querySelector('#asie2').innerHTML = '<b>' + moyenne_asie + ' %</b>'
document.querySelector('#amenord2').innerHTML = '<b>' + moyenne_nord + ' %</b>'
document.querySelector('#amesud2').innerHTML = '<b>' + moyenne_sud + ' %</b>'
document.querySelector('#occeanie2').innerHTML = '<b>' + moyenne_occeanie + ' %</b>'


for (let cle in infos) {
    let domaine = document.createElement("p");
    domaine.className = 'bold'
    domaine.innerText = cle;
    document.querySelector('#domainesder').appendChild(domaine);
}

document.querySelectorAll('#domainesder>p').forEach(element => {
    element.addEventListener('click', changerinfos)

    function changerinfos(){
        document.querySelector('#choosendomaine').innerHTML = element.innerHTML
        document.querySelector('.explains>ul').innerHTML = infos[element.innerText]
    }
});