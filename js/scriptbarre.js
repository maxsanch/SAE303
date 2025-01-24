document.querySelectorAll('#deroulant_sécu>p').forEach(e => {
    e.addEventListener('click', graphmaj)

    function graphmaj() {
        document.querySelector('#indexder').innerHTML = e.id;

        let transcript = {
            "Europe": "europe2",
            "Amérique du sud": "amesud2",
            "Amérique du nord": "amenord2",
            "Asie": "asie2",
            "Océanie": "occeanie2",
            "Afrique": "afrique2",
        }

        /************************************** */
        /************************************** */
        let sommes = {};
        let nbPays = {};

        let test = 'tout'

        // vérifier ce sur quoi on a cliqué dans le graphique à barres, si c'est sécurité, on affiche les bonens valeurs, différences on fait un calcule ou développement et on affiche les bonnes valeurs aussi
        if (e.id == 'Sécurité') {

            // reset position

            document.querySelector('#Line10').style = "transform: translateY(0);"

            // gradients changés

            document.querySelector('#gradientcolor1').setAttribute('stop-color', '#082122')
            document.querySelector('#gradientcolor2').setAttribute('stop-color', '#128084')

            Object.entries(pays).forEach(([cléPays, dataPays]) => {
                document.querySelector("#" + cléPays).setAttribute("y", "38.5")
                document.querySelector("#" + cléPays).setAttribute("fill", "url(#paint0_linear_106_302)")
                if (sommes[dataPays.Continent] == undefined) {
                    sommes[dataPays.Continent] = 0;
                    nbPays[dataPays.Continent] = 0;
                }
                if (test == 'tout' || test == cléPays) {
                    console.log(cléPays)
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

            Object.entries(pays).forEach(([cléPays, dataPays]) => {
                document.querySelector("#" + cléPays).setAttribute("y", "38.5")
                document.querySelector("#" + cléPays).setAttribute("fill", "url(#paint0_linear_106_302)")
                if (sommes[dataPays.Continent] == undefined) {
                    sommes[dataPays.Continent] = 0;
                    nbPays[dataPays.Continent] = 0;
                }
                if (test == 'tout' || test == cléPays) {
                    console.log(cléPays)
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
            // affichage des bonnes mesures

            document.querySelectorAll('.diff').forEach(e => {
                e.style = "display: none;"
            })
            document.querySelectorAll('.autre').forEach(e => {
                e.style = "display: block;"
            })

        } else if (e.id == 'Différence') {

            // bonnes mesures

            document.querySelectorAll('.diff').forEach(e => {
                e.style = "display: block;"
            })
            document.querySelectorAll('.autre').forEach(e => {
                e.style = "display: none;"
            })

            // reset tableaux

            let europeNCSI = [];
            let afriqueNCSI = [];
            let asieNCSI = [];
            let nordNCSI = [];
            let sudNCSI = [];
            let occeanieNCSI = [];

            // changement couleur 

            document.querySelector('#gradientcolor1').setAttribute('stop-color', '#19002F')
            document.querySelector('#gradientcolor2').setAttribute('stop-color', '#0C2472')
            document.querySelector('#Line10').style = "transform: translateY(-345px);"

            Object.entries(pays).forEach(([key]) => {

                // function hoverappears(){
                //     if((((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 690) / 100) >= 0){
                //         console.log(key+'hover')
                //         document.querySelector('#'+key+'hover').setAttribute('y', (345 +(((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100)+ 55))
                //         document.querySelector('#'+key+'texthover').setAttribute('y', (401 - (((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100)) - 37.5 )
                //         document.querySelector('#'+key+'texthover').innerHTML = pays[key]['DigitalDéveloppement'] + " %"
                //     }
                //     else{
                //         document.querySelector('#'+key+'hover').setAttribute('y', (345 + 55))
                //         document.querySelector('#'+key+'texthover').setAttribute('y', 345 + 18.5)
                //         document.querySelector('#'+key+'texthover').innerHTML = pays[key]['DigitalDéveloppement'] + " %"
                //     }
                // }

                // changement taille de chaque barres

                if (pays[key]['Continent'] == 'Europe') {
                    // pour chaque barres on calcule la différence, donc la sécurité moins le DigitalDéveloppement 
                    europeNCSI.push(pays[key]['NCSI'] - pays[key]['DigitalDéveloppement'])
                    if ((((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 690) / 100) >= 0) {
                        document.querySelector("#" + key).setAttribute("height", ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100)
                        document.querySelector("#" + key).setAttribute("y", "383.5")
                    }
                    else {
                        document.querySelector("#" + key).setAttribute("height", (0 - ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("y", 383.5 - (0 - ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("fill", "url(#négatifvalues)")
                    }

                    // hoverappears();
                }
                if (pays[key]['Continent'] == 'Afrique') {
                    afriqueNCSI.push(pays[key]['NCSI'] - pays[key]['DigitalDéveloppement'])
                    if ((((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 690) / 100) >= 0) {
                        document.querySelector("#" + key).setAttribute("height", ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100)
                        document.querySelector("#" + key).setAttribute("y", "383.5")
                    }
                    else {
                        document.querySelector("#" + key).setAttribute("height", (0 - ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("y", 383.5 - (0 - ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("fill", "url(#négatifvalues)")
                    }
                    // hoverappears();
                }
                if (pays[key]['Continent'] == 'Asie') {
                    asieNCSI.push(pays[key]['NCSI'] - pays[key]['DigitalDéveloppement'])
                    if ((((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 690) / 100) >= 0) {
                        document.querySelector("#" + key).setAttribute("height", ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100)
                        document.querySelector("#" + key).setAttribute("y", "383.5")
                    }
                    else {
                        document.querySelector("#" + key).setAttribute("height", (0 - ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("y", 383.5 - (0 - ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("fill", "url(#négatifvalues)")
                    }
                    // hoverappears();
                }
                if (pays[key]['Continent'] == 'Amérique du nord') {
                    nordNCSI.push(pays[key]['NCSI'] - pays[key]['DigitalDéveloppement'])
                    if ((((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 690) / 100) >= 0) {
                        document.querySelector("#" + key).setAttribute("height", ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100)
                        document.querySelector("#" + key).setAttribute("y", "383.5")
                    }
                    else {
                        document.querySelector("#" + key).setAttribute("height", (0 - ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("y", 383.5 - (0 - ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("fill", "url(#négatifvalues)")
                    }
                    // hoverappears();
                }
                if (pays[key]['Continent'] == 'Amérique du sud') {
                    sudNCSI.push(pays[key]['NCSI'] - pays[key]['DigitalDéveloppement'])
                    if ((((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 690) / 100) >= 0) {
                        document.querySelector("#" + key).setAttribute("height", ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100)
                        document.querySelector("#" + key).setAttribute("y", "383.5")
                    }
                    else {
                        document.querySelector("#" + key).setAttribute("height", (0 - ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("y", 383.5 - (0 - ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("fill", "url(#négatifvalues)")
                    }
                    // hoverappears();
                }
                if (pays[key]['Continent'] == 'Océanie') {
                    occeanieNCSI.push(pays[key]['NCSI'] - pays[key]['DigitalDéveloppement'])
                    if ((((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 690) / 100) >= 0) {
                        document.querySelector("#" + key).setAttribute("height", ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100)
                        document.querySelector("#" + key).setAttribute("y", "383.5")
                    }
                    else {
                        document.querySelector("#" + key).setAttribute("height", (0 - ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("y", 383.5 - (0 - ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("fill", "url(#négatifvalues)")
                    }
                    // hoverappears();
                }
            });


            // calcule de la moyenne
            let moyenne_europe = Math.round((europeNCSI.reduce(moyenne) / europeNCSI.length) * 100) / 100
            let moyenne_afrique = Math.round((afriqueNCSI.reduce(moyenne) / afriqueNCSI.length) * 100) / 100
            let moyenne_asie = Math.round((asieNCSI.reduce(moyenne) / asieNCSI.length) * 100) / 100
            let moyenne_nord = Math.round((nordNCSI.reduce(moyenne) / nordNCSI.length) * 100) / 100
            let moyenne_sud = Math.round((sudNCSI.reduce(moyenne) / sudNCSI.length) * 100) / 100
            let moyenne_occeanie = Math.round((occeanieNCSI.reduce(moyenne) / occeanieNCSI.length) * 100) / 100

            function moyenne(first, nombre) {
                return first + nombre;
            }

            // appliquer les moyennes 

            document.querySelector('#europe2').innerHTML = '<b>' + moyenne_europe + ' %</b>'
            document.querySelector('#afrique2').innerHTML = '<b>' + moyenne_afrique + ' %</b>'
            document.querySelector('#asie2').innerHTML = '<b>' + moyenne_asie + ' %</b>'
            document.querySelector('#amenord2').innerHTML = '<b>' + moyenne_nord + ' %</b>'
            document.querySelector('#amesud2').innerHTML = '<b>' + moyenne_sud + ' %</b>'
            document.querySelector('#occeanie2').innerHTML = '<b>' + moyenne_occeanie + ' %</b>'
        }
    }
});





