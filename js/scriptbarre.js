// initialisation de test

let test = 'tout'



/************************************** */
/************************************** */
// initialisation des moyennes quand rien n'est séléctionné, je dois alors faire en sorte qu'une moyenen s'affiche par défaut.


let transcript = {
    "Europe": "europe2",
    "Amérique du sud": "amesud2",
    "Amérique du nord": "amenord2",
    "Asie": "asie2",
    "Océanie": "occeanie2",
    "Afrique": "afrique2",
}

let initialsomme = {};
let nbPays2 = {};

Object.entries(pays).forEach(([cléPays, dataPays]) => {
    document.querySelector("#" + cléPays).setAttribute("y", "38.5")
    document.querySelector("#" + cléPays).setAttribute("fill", "url(#paint0_linear_106_302)")
    if (initialsomme[dataPays.Continent] == undefined) {
        initialsomme[dataPays.Continent] = 0;
        nbPays2[dataPays.Continent] = 0;
    }
    initialsomme[dataPays.Continent] += dataPays.NCSI;
    nbPays2[dataPays.Continent]++;
})

Object.entries(initialsomme).forEach(([cléPays, nb]) => {
    document.querySelector(`#${transcript[cléPays]}`).innerHTML = `<b> ${(nb / nbPays2[cléPays]).toFixed(2)} %</b>`
});



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


/**********************************************************/
/**********************************************************/
/******POUR CHANGER ET AFFICHER QUE UN SEUL CONTINENT******/
/***LA VARIABLE TEST VA CHANGER EN FONCTION DU CONTINENT***/
/**********************************************************/
/**********************************************************/


document.querySelectorAll('.continentsingle').forEach(e => {

    /********************************/
    /********************************/
    /***NE CONCERNE PAS LES BARRES***/
    /********************************/
    /********************************/

    // changer l'attribue de la stroke au passage de la souris pour rendre joli

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

    /************************/
    /****CHANGEMENT DES BARRES AU CLIC****/
    /************************/

    e.addEventListener('click', continent);

    function continent() {
        /*************/
        /****PRE OPERATIONS****/
        /*************/
        // on vide tout le groupe 6 et on reinitialise les comptes 
        document.querySelector('#Group6').innerHTML = '';
        x = 53.5
        x2 = 109;
        compter = 0;

        console.log(compter)

        // réalisation d'un tableau afin de savoir comment transcrir le tout.

        let transcrire2 = {
            "europe": "Europe",
            "ameriquesud": "Amérique du sud",
            "amériquenord": "Amérique du nord",
            "asie": "Asie",
            "océanie": "Océanie",
            "afrique": "Afrique",
        }

        // on remet tout au début
        document.querySelector('#Group6').style = "transform: translateX(0);"
        let recupchoose = document.querySelector('#indexder').innerText
        test = transcrire2[e.querySelector('g').id]


        /*****************/
        /*****************/
        /*****************/

        Object.entries(pays).forEach(([key, valeur]) => {
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

            // vérifier ce qu'on veux

            if (recupchoose == 'Sécurité') {
                // ensuite on vérifie l'id du groupe sur lequel on a cliqué, si ce dernier est bon, on rajoute les pays, sinon on ne le fait pas, ainsi nous avons que les pays qui nous intéressent
                if (test == valeur.Continent) {
                    document.querySelector('#Group6').innerHTML += '<rect class="barbapapa" id="' + key + '" x="' + x + '" y="38.5" width="111" height="' + (valeur.NCSI * 690) / 100 + '" fill="url(#paint0_linear_106_302)" stroke="white"></rect> <text x="' + x2 + '" y="15" font-family="Arial" font-size="20" text-anchor="middle" fill="white">' + splited + '</text><rect id="' + key + 'hover" class="rectinfo" x="' + x2 + '" rx="5" y="' + (((valeur.NCSI * 690) / 100) + 55) + '" width="111" height="55" fill="#FDFDFD"/><text class="rectinfo2" id="' + key + 'texthover" x="' + x2 + '" y="' + ((786 - (((valeur.NCSI * 690) / 100) + 55)) - 23.5) + '" font-family="Arial" font-size="20" text-anchor="middle" fill="black">' + valeur.NCSI + '%</text>'
                    x = x + 111 + 20;
                    x2 = x2 + 111 + 20;
                    compter = compter + 1
                }
            }
            if (recupchoose == 'Développement') {
                // ensuite on vérifie l'id du groupe sur lequel on a cliqué, si ce dernier est bon, on rajoute les pays, sinon on ne le fait pas, ainsi nous avons que les pays qui nous intéressent
                if (test == valeur.Continent) {
                    document.querySelector('#Group6').innerHTML += '<rect class="barbapapa" id="' + key + '" x="' + x + '" y="38.5" width="111" height="' + (valeur.DigitalDéveloppement * 690) / 100 + '" fill="url(#paint0_linear_106_302)" stroke="white"></rect> <text x="' + x2 + '" y="15" font-family="Arial" font-size="20" text-anchor="middle" fill="white">' + splited + '</text><rect id="' + key + 'hover" class="rectinfo" x="' + x2 + '" rx="5" y="' + (((valeur.DigitalDéveloppement * 690) / 100) + 55) + '" width="111" height="55" fill="#FDFDFD"/><text class="rectinfo2" id="' + key + 'texthover" x="' + x2 + '" y="' + ((786 - (((valeur.DigitalDéveloppement * 690) / 100) + 55)) - 23.5) + '" font-family="Arial" font-size="20" text-anchor="middle" fill="black">' + valeur.DigitalDéveloppement + '%</text>'
                    x = x + 111 + 20;
                    x2 = x2 + 111 + 20;
                    compter = compter + 1
                }
            }
            if (recupchoose == 'Différence') {
                // ensuite on vérifie l'id du groupe sur lequel on a cliqué, si ce dernier est bon, on rajoute les pays, sinon on ne le fait pas, ainsi nous avons que les pays qui nous intéressent
                if (test == valeur.Continent) {
                    if ((((valeur.NCSI - valeur.DigitalDéveloppement) * 690) / 100) >= 0) {
                        document.querySelector('#Group6').innerHTML += '<rect class="barbapapa" id="' + key + '" x="' + x + '" y="38.5" width="111" height="' + ((valeur.NCSI - valeur.DigitalDéveloppement) * 345) / 100 + '" fill="url(#paint0_linear_106_302)" stroke="white"></rect><text x="' + x2 + '" y="15" font-family="Arial" font-size="20" text-anchor="middle" fill="white">' + splited + '</text><rect id="' + key + 'hover" class="rectinfo" x="' + x2 + '" rx="5" y="' + (403 + (((valeur.NCSI - valeur.DigitalDéveloppement) * 345) / 100)) + '" width="111" height="55" fill="#FDFDFD"/><text class="rectinfo2" id="' + key + 'texthover" x="' + x2 + '" y="' + (396 - (((valeur.NCSI - valeur.DigitalDéveloppement) * 345) / 100) - 35) + '" font-family="Arial" font-size="20" text-anchor="middle" fill="black">' + (valeur.NCSI - valeur.DigitalDéveloppement).toFixed(2) + '%</text>'
                        document.querySelector("#" + key).setAttribute("y", "383.5")
                    }
                    else {
                        document.querySelector('#Group6').innerHTML += '<rect class="barbapapa" id="' + key + '" x="' + x + '" y="38.5" width="111" height="0" fill="url(#paint0_linear_106_302)" stroke="white"></rect><text x="' + x2 + '" y="15" font-family="Arial" font-size="20" text-anchor="middle" fill="white">' + splited + '</text><rect id="' + key + 'hover" class="rectinfo" x="' + x2 + '" rx="5" y="403" width="111" height="55" fill="#FDFDFD"/><text class="rectinfo2" id="' + key + 'texthover" x="' + x2 + '" y="364" font-family="Arial" font-size="20" text-anchor="middle" fill="black">' + (valeur.NCSI - valeur.DigitalDéveloppement).toFixed(2) + '%</text>'
                        document.querySelector("#" + key).setAttribute("height", (0 - ((valeur.NCSI - valeur.DigitalDéveloppement) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("y", 383.5 - (0 - ((valeur.NCSI - valeur.DigitalDéveloppement) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("fill", "url(#négatifvalues)")
                    }
                    x = x + 111 + 20;
                    x2 = x2 + 111 + 20;
                    compter = compter + 1
                }
            }
        });
        actualisation();
    }
});

/************************************** */
/************************************** */


document.querySelectorAll('#deroulant_sécu>p').forEach(e => {
    e.addEventListener('click', graphmaj)


    function graphmaj() {
        document.querySelector('#indexder').innerHTML = e.id;

        /************************************** */
        /************************************** */
        let sommes = {};
        let nbPays = {};
        // vérifier ce sur quoi on a cliqué dans le graphique à barres, si c'est sécurité, on affiche les bonens valeurs, différences on fait un calcule ou développement et on affiche les bonnes valeurs aussi
        if (e.id == 'Sécurité') {


            // paramètres généraux :

            // reset position de la barre des absisses

            document.querySelector('#Line10').style = "transform: translateY(0);"

            // gradients changés

            document.querySelector('#gradientcolor1').setAttribute('stop-color', '#0C2473')
            document.querySelector('#gradientcolor2').setAttribute('stop-color', '#19002F')

            /*****************************************************************/
            /*****************************************************************/
            /*****************************************************************/
            /*****************************************************************/

            // lignes et calcules

            Object.entries(pays).forEach(([cléPays, dataPays]) => {
                document.querySelector("#" + cléPays).setAttribute("y", "38.5")
                document.querySelector("#" + cléPays).setAttribute("fill", "url(#paint0_linear_106_302)")
                if (sommes[dataPays.Continent] == undefined) {
                    sommes[dataPays.Continent] = 0;
                    nbPays[dataPays.Continent] = 0;
                }
                if (test == 'tout' || test == dataPays.Continent) {
                    document.querySelector("#" + cléPays).setAttribute("height", (pays[cléPays]['NCSI'] * 690) / 100)
                    document.querySelector('#' + cléPays + 'hover').setAttribute('y', (((pays[cléPays]['NCSI'] * 690) / 100) + 55))
                    document.querySelector('#' + cléPays + 'texthover').setAttribute('y', ((786 - (((pays[cléPays]['NCSI'] * 690) / 100) + 55)) - 23.5))
                    document.querySelector('#' + cléPays + 'texthover').innerHTML = pays[cléPays]['NCSI'] + " %"
                }
                sommes[dataPays.Continent] += dataPays.NCSI;
                nbPays[dataPays.Continent]++;
            })

            Object.entries(sommes).forEach(([cléPays, nb]) => {
                document.querySelector(`#${transcript[cléPays]}`).innerHTML = `<b> ${(nb / nbPays[cléPays]).toFixed(2)} %</b>`
            });
            // affichage des bonnes mesures

            document.querySelectorAll('.diff').forEach(e => {
                e.style = "display: none;"
            })
            document.querySelectorAll('.autre').forEach(e => {
                e.style = "display: block;"
            })
        }
        else if (e.id == 'Développement') {

            // si le choix est développement

            // reset position

            document.querySelector('#Line10').style = "transform: translateY(0);"

            // gradients changés

            document.querySelector('#gradientcolor1').setAttribute('stop-color', '#082122')
            document.querySelector('#gradientcolor2').setAttribute('stop-color', '#128084')

            /************************/
            /*****MODIFICATION DES BARRES****/
            /************************/

            Object.entries(pays).forEach(([cléPays, dataPays]) => {
                document.querySelector("#" + cléPays).setAttribute("y", "38.5")
                document.querySelector("#" + cléPays).setAttribute("fill", "url(#paint0_linear_106_302)")
                if (sommes[dataPays.Continent] == undefined) {
                    sommes[dataPays.Continent] = 0;
                    nbPays[dataPays.Continent] = 0;
                }
                if (test == 'tout' || test == dataPays.Continent) {
                    document.querySelector("#" + cléPays).setAttribute("height", (pays[cléPays]['DigitalDéveloppement'] * 690) / 100)
                    document.querySelector('#' + cléPays + 'hover').setAttribute('y', (((pays[cléPays]['DigitalDéveloppement'] * 690) / 100) + 55))
                    document.querySelector('#' + cléPays + 'texthover').setAttribute('y', ((786 - (((pays[cléPays]['DigitalDéveloppement'] * 690) / 100) + 55)) - 23.5))
                    document.querySelector('#' + cléPays + 'texthover').innerHTML = pays[cléPays]['DigitalDéveloppement'] + " %"
                }

                sommes[dataPays.Continent] += dataPays.DigitalDéveloppement;
                nbPays[dataPays.Continent]++;
            })

            Object.entries(sommes).forEach(([cléPays, nb]) => {
                document.querySelector(`#${transcript[cléPays]}`).innerHTML = `<b> ${(nb / nbPays[cléPays]).toFixed(2)} %</b>`
            });


            // affichage des bonnes mesures (les nombres sur le côté)

            document.querySelectorAll('.diff').forEach(e => {
                e.style = "display: none;"
            })
            document.querySelectorAll('.autre').forEach(e => {
                e.style = "display: block;"
            })

        } else if (e.id == 'Différence') {

            /************************/
            /*****GENERAL****/
            /************************/

            // bonnes mesures (nombres sur le côté)

            document.querySelectorAll('.diff').forEach(e => {
                e.style = "display: block;"
            })
            document.querySelectorAll('.autre').forEach(e => {
                e.style = "display: none;"
            })

            // changement couleur et placer l'axe des absisses au milieu

            document.querySelector('#gradientcolor1').setAttribute('stop-color', '#19002F')
            document.querySelector('#gradientcolor2').setAttribute('stop-color', '#0C2472')
            document.querySelector('#Line10').style = "transform: translateY(-345px);"


            /************************/
            /*****MODIFICATION DES BARRES****/
            /************************/

            Object.entries(pays).forEach(([cléPays, dataPays]) => {

                if (sommes[dataPays.Continent] == undefined) {
                    sommes[dataPays.Continent] = 0;
                    nbPays[dataPays.Continent] = 0;
                }
                if (test == 'tout' || test == dataPays.Continent) {
                    if ((((pays[cléPays]['NCSI'] - pays[cléPays]['DigitalDéveloppement']) * 690) / 100) >= 0) {
                        document.querySelector("#" + cléPays).setAttribute("height", ((pays[cléPays]['NCSI'] - pays[cléPays]['DigitalDéveloppement']) * 345) / 100)
                        document.querySelector("#" + cléPays).setAttribute("y", "383.5")
                        document.querySelector('#' + cléPays + 'hover').setAttribute('y', (403 + (((pays[cléPays]['NCSI'] - pays[cléPays]['DigitalDéveloppement']) * 345) / 100)))
                        document.querySelector('#' + cléPays + 'texthover').setAttribute('y', (396 - (((pays[cléPays]['NCSI'] - pays[cléPays]['DigitalDéveloppement']) * 345) / 100) - 35))
                        document.querySelector('#' + cléPays + 'texthover').innerHTML = (dataPays.NCSI - dataPays.DigitalDéveloppement).toFixed(2) + " %"
                    }
                    else {
                        document.querySelector("#" + cléPays).setAttribute("height", (0 - ((pays[cléPays]['NCSI'] - pays[cléPays]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + cléPays).setAttribute("y", 383.5 - (0 - ((pays[cléPays]['NCSI'] - pays[cléPays]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + cléPays).setAttribute("fill", "url(#négatifvalues)")
                        document.querySelector('#' + cléPays + 'hover').setAttribute('y', "403")
                        document.querySelector('#' + cléPays + 'texthover').setAttribute('y', "364")
                        document.querySelector('#' + cléPays + 'texthover').innerHTML = (dataPays.NCSI - dataPays.DigitalDéveloppement).toFixed(2) + " %"
                    }
                }
                sommes[dataPays.Continent] += (dataPays.NCSI - dataPays.DigitalDéveloppement);
                nbPays[dataPays.Continent]++;
            })

            Object.entries(sommes).forEach(([cléPays, nb]) => {
                document.querySelector(`#${transcript[cléPays]}`).innerHTML = `<b> ${(nb / nbPays[cléPays]).toFixed(2)} %</b>`
            });
        }
    }
});

/************************/
/*********RESET**********/
/************************/

document.querySelector('#reset').addEventListener('click', resetgraph)

function resetgraph() {

    /*************/
    /****PRE OPERATIONS****/
    /*************/
    // on vide tout le groupe 6 et on reinitialise les comptes 
    document.querySelector('#Group6').innerHTML = '';
    x = 53.5
    x2 = 109;
    compter = 0;

    // on remet tout au début
    document.querySelector('#Group6').style = "transform: translateX(0);"
    let recupchoose = document.querySelector('#indexder').innerText

    Object.entries(pays).forEach(([key, valeur]) => {
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

        // vérifier ce qu'on veux

        if (recupchoose == 'Sécurité') {
            // ensuite on vérifie l'id du groupe sur lequel on a cliqué, si ce dernier est bon, on rajoute les pays, sinon on ne le fait pas, ainsi nous avons que les pays qui nous intéressent
            document.querySelector('#Group6').innerHTML += '<rect class="barbapapa" id="' + key + '" x="' + x + '" y="38.5" width="111" height="' + (valeur.NCSI * 690) / 100 + '" fill="url(#paint0_linear_106_302)" stroke="white"></rect> <text x="' + x2 + '" y="15" font-family="Arial" font-size="20" text-anchor="middle" fill="white">' + splited + '</text><rect id="' + key + 'hover" class="rectinfo" x="' + x2 + '" rx="5" y="' + (((valeur.NCSI * 690) / 100) + 55) + '" width="111" height="55" fill="#FDFDFD"/><text class="rectinfo2" id="' + key + 'texthover" x="' + x2 + '" y="' + ((786 - (((valeur.NCSI * 690) / 100) + 55)) - 23.5) + '" font-family="Arial" font-size="20" text-anchor="middle" fill="black">' + valeur.NCSI + '%</text>'
            x = x + 111 + 20;
            x2 = x2 + 111 + 20;
            compter = compter + 1
        }
        if (recupchoose == 'Développement') {
            // ensuite on vérifie l'id du groupe sur lequel on a cliqué, si ce dernier est bon, on rajoute les pays, sinon on ne le fait pas, ainsi nous avons que les pays qui nous intéressent
            document.querySelector('#Group6').innerHTML += '<rect class="barbapapa" id="' + key + '" x="' + x + '" y="38.5" width="111" height="' + (valeur.DigitalDéveloppement * 690) / 100 + '" fill="url(#paint0_linear_106_302)" stroke="white"></rect> <text x="' + x2 + '" y="15" font-family="Arial" font-size="20" text-anchor="middle" fill="white">' + splited + '</text><rect id="' + key + 'hover" class="rectinfo" x="' + x2 + '" rx="5" y="' + (((valeur.DigitalDéveloppement * 690) / 100) + 55) + '" width="111" height="55" fill="#FDFDFD"/><text class="rectinfo2" id="' + key + 'texthover" x="' + x2 + '" y="' + ((786 - (((valeur.DigitalDéveloppement * 690) / 100) + 55)) - 23.5) + '" font-family="Arial" font-size="20" text-anchor="middle" fill="black">' + valeur.DigitalDéveloppement + '%</text>'
            x = x + 111 + 20;
            x2 = x2 + 111 + 20;
            compter = compter + 1
        }
        if (recupchoose == 'Différence') {
            // ensuite on vérifie l'id du groupe sur lequel on a cliqué, si ce dernier est bon, on rajoute les pays, sinon on ne le fait pas, ainsi nous avons que les pays qui nous intéressent
            if ((((valeur.NCSI - valeur.DigitalDéveloppement) * 690) / 100) >= 0) {
                document.querySelector('#Group6').innerHTML += '<rect class="barbapapa" id="' + key + '" x="' + x + '" y="38.5" width="111" height="' + ((valeur.NCSI - valeur.DigitalDéveloppement) * 345) / 100 + '" fill="url(#paint0_linear_106_302)" stroke="white"></rect><text x="' + x2 + '" y="15" font-family="Arial" font-size="20" text-anchor="middle" fill="white">' + splited + '</text><rect id="' + key + 'hover" class="rectinfo" x="' + x2 + '" rx="5" y="' + (403 + (((valeur.NCSI - valeur.DigitalDéveloppement) * 345) / 100)) + '" width="111" height="55" fill="#FDFDFD"/><text class="rectinfo2" id="' + key + 'texthover" x="' + x2 + '" y="' + (396 - (((valeur.NCSI - valeur.DigitalDéveloppement) * 345) / 100) - 35) + '" font-family="Arial" font-size="20" text-anchor="middle" fill="black">' + (valeur.NCSI - valeur.DigitalDéveloppement).toFixed(2) + '%</text>'
                document.querySelector("#" + key).setAttribute("y", "383.5")
            }
            else {
                document.querySelector('#Group6').innerHTML += '<rect class="barbapapa" id="' + key + '" x="' + x + '" y="38.5" width="111" height="0" fill="url(#paint0_linear_106_302)" stroke="white"></rect><text x="' + x2 + '" y="15" font-family="Arial" font-size="20" text-anchor="middle" fill="white">' + splited + '</text><rect id="' + key + 'hover" class="rectinfo" x="' + x2 + '" rx="5" y="403" width="111" height="55" fill="#FDFDFD"/><text class="rectinfo2" id="' + key + 'texthover" x="' + x2 + '" y="364" font-family="Arial" font-size="20" text-anchor="middle" fill="black">' + (valeur.NCSI - valeur.DigitalDéveloppement).toFixed(2) + '%</text>'
                document.querySelector("#" + key).setAttribute("height", (0 - ((valeur.NCSI - valeur.DigitalDéveloppement) * 345) / 100))
                document.querySelector("#" + key).setAttribute("y", 383.5 - (0 - ((valeur.NCSI - valeur.DigitalDéveloppement) * 345) / 100))
                document.querySelector("#" + key).setAttribute("fill", "url(#négatifvalues)")
            }
            x = x + 111 + 20;
            x2 = x2 + 111 + 20;
            compter = compter + 1
        }
    });
    actualisation();
}