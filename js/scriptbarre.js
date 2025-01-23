document.querySelectorAll('#deroulant_sécu>p').forEach(e => {
    e.addEventListener('click', graphmaj)

    function graphmaj() {
        document.querySelector('#indexder').innerHTML = e.id;

        // vérifier ce sur quoi on a cliqué dans le graphique à barres, si c'est sécurité, on affiche les bonens valeurs, différences on fait un calcule ou développement et on affiche les bonnes valeurs aussi
        if (e.id == 'Sécurité') {
            // par défaut cette ligne ne change pas, elle change uniquement si les barres ont déjà été modifiées avant
            document.querySelectorAll('.diff').forEach(e =>{
                e.style = "display: none;"
            })

            document.querySelector('#Line10').style = "transform: translateY(0);";

            // changer la couleur du graphique poru une cathégorie différente.
            document.querySelector('#gradientcolor1').setAttribute('stop-color', '#19002F')
            document.querySelector('#gradientcolor2').setAttribute('stop-color', '#0C2472')


            // reset les tableaux

            let europeNCSI = [];
            let afriqueNCSI = [];
            let asieNCSI = [];
            let nordNCSI = [];
            let sudNCSI = [];
            let occeanieNCSI = [];


            Object.entries(pays).forEach(([key]) => {
                // reset les attributs et la couleur du dégradé 
                document.querySelector("#" + key).setAttribute("y", "38.5")
                document.querySelector("#" + key).setAttribute("fill", "url(#paint0_linear_106_302)")

                // vérifier le continent et ajouter pour chaque pays les valeurs qu'il faut : setAttribut car ca évite de tout supprimer et ca permet des changements plus joli et fluides

                if (pays[key]['Continent'] == 'Europe') {
                    europeNCSI.push(pays[key]['NCSI'])
                    document.querySelector("#" + key).setAttribute("height", (pays[key]['NCSI'] * 690) / 100)
                }
                if (pays[key]['Continent'] == 'Afrique') {
                    afriqueNCSI.push(pays[key]['NCSI'])
                    document.querySelector("#" + key).setAttribute("height", (pays[key]['NCSI'] * 690) / 100)
                }
                if (pays[key]['Continent'] == 'Asie') {
                    asieNCSI.push(pays[key]['NCSI'])
                    document.querySelector("#"+key).setAttribute("height", (pays[key]['NCSI']*690)/100)
                }
                if (pays[key]['Continent'] == 'Amérique du nord') {
                    nordNCSI.push(pays[key]['NCSI'])
                    document.querySelector("#" + key).setAttribute("height", (pays[key]['NCSI'] * 690) / 100)
                }
                if (pays[key]['Continent'] == 'Amérique du sud') {
                    sudNCSI.push(pays[key]['NCSI'])
                    document.querySelector("#" + key).setAttribute("height", (pays[key]['NCSI'] * 690) / 100)
                }
                if (pays[key]['Continent'] == 'Océanie') {
                    occeanieNCSI.push(pays[key]['NCSI'])
                    document.querySelector("#" + key).setAttribute("height", (pays[key]['NCSI'] * 690) / 100)
                }

                document.querySelector('#'+key+'hover').setAttribute('y', (((pays[key]['NCSI'] * 690) / 100)+ 55))
                document.querySelector('#'+key+'texthover').setAttribute('y', ((786 - (((pays[key]['NCSI'] * 690) / 100) + 55)) - 23.5))
                document.querySelector('#'+key+'texthover').innerHTML = pays[key]['NCSI'] + " %"
            
            });

            // changer les moyennnes pour être conforme au choix fait

            let moyenne_europe = Math.round((europeNCSI.reduce(moyenne) / europeNCSI.length) * 100) / 100
            let moyenne_afrique = Math.round((afriqueNCSI.reduce(moyenne) / afriqueNCSI.length) * 100) / 100
            let moyenne_asie = Math.round((asieNCSI.reduce(moyenne) / asieNCSI.length) * 100) / 100
            let moyenne_nord = Math.round((nordNCSI.reduce(moyenne) / nordNCSI.length) * 100) / 100
            let moyenne_sud = Math.round((sudNCSI.reduce(moyenne) / sudNCSI.length) * 100) / 100
            let moyenne_occeanie = Math.round((occeanieNCSI.reduce(moyenne) / occeanieNCSI.length) * 100) / 100

            // calcule de la moyenne

            function moyenne(first, nombre) {
                return first + nombre;
            }

            // affichage des bonnes mesures (différentes pour la différence) 
            document.querySelectorAll('.autre').forEach(e =>{
                e.style = "display: block;"
            })
            document.querySelectorAll('.diff').forEach(e =>{
                e.style = "display: none;"
            })

            // affichage des moyennes 

            document.querySelector('#europe2').innerHTML = '<b>' + moyenne_europe + ' %</b>'
            document.querySelector('#afrique2').innerHTML = '<b>' + moyenne_afrique + ' %</b>'
            document.querySelector('#asie2').innerHTML = '<b>' + moyenne_asie + ' %</b>'
            document.querySelector('#amenord2').innerHTML = '<b>' + moyenne_nord + ' %</b>'
            document.querySelector('#amesud2').innerHTML = '<b>' + moyenne_sud + ' %</b>'
            document.querySelector('#occeanie2').innerHTML = '<b>' + moyenne_occeanie + ' %</b>'
        }
        else if (e.id == 'Développement') {

            // si le choix est développement

            // reset position

            document.querySelector('#Line10').style = "transform: translateY(0);"

            // gradients changés

            document.querySelector('#gradientcolor1').setAttribute('stop-color', '#082122')
            document.querySelector('#gradientcolor2').setAttribute('stop-color', '#128084')
            
            // reset tableaux 

            let europeNCSI = [];
            let afriqueNCSI = [];
            let asieNCSI = [];
            let nordNCSI = [];
            let sudNCSI = [];
            let occeanieNCSI = [];

            Object.entries(pays).forEach(([key]) => {

                // changement des attributs pour chanegr de manière fluide

                document.querySelector("#" + key).setAttribute("y", "38.5")
                document.querySelector("#" + key).setAttribute("fill", "url(#paint0_linear_106_302)")
                if (pays[key]['Continent'] == 'Europe') {
                    europeNCSI.push(pays[key]['DigitalDéveloppement'])
                    document.querySelector("#" + key).setAttribute("height", (pays[key]['DigitalDéveloppement'] * 690) / 100)
                }
                if (pays[key]['Continent'] == 'Afrique') {
                    afriqueNCSI.push(pays[key]['DigitalDéveloppement'])
                    document.querySelector("#" + key).setAttribute("height", (pays[key]['DigitalDéveloppement'] * 690) / 100)
                }
                if (pays[key]['Continent'] == 'Asie') {
                    asieNCSI.push(pays[key]['DigitalDéveloppement'])
                    document.querySelector("#"+key).setAttribute("height", (pays[key]['DigitalDéveloppement']*690)/100)
                }
                if (pays[key]['Continent'] == 'Amérique du nord') {
                    nordNCSI.push(pays[key]['DigitalDéveloppement'])
                    document.querySelector("#" + key).setAttribute("height", (pays[key]['DigitalDéveloppement'] * 690) / 100)
                }
                if (pays[key]['Continent'] == 'Amérique du sud') {
                    sudNCSI.push(pays[key]['DigitalDéveloppement'])
                    document.querySelector("#" + key).setAttribute("height", (pays[key]['DigitalDéveloppement'] * 690) / 100)
                }
                if (pays[key]['Continent'] == 'Océanie') {
                    occeanieNCSI.push(pays[key]['DigitalDéveloppement'])
                    document.querySelector("#" + key).setAttribute("height", (pays[key]['DigitalDéveloppement'] * 690) / 100)
                }

                document.querySelector('#'+key+'hover').setAttribute('y', (((pays[key]['DigitalDéveloppement'] * 690) / 100)+ 55))
                document.querySelector('#'+key+'texthover').setAttribute('y', ((786 - (((pays[key]['DigitalDéveloppement'] * 690) / 100) + 55)) - 23.5))
                document.querySelector('#'+key+'texthover').innerHTML = pays[key]['DigitalDéveloppement'] + " %"
            });

            // calule des moyennes

            let moyenne_europe = Math.round((europeNCSI.reduce(moyenne) / europeNCSI.length) * 100) / 100
            let moyenne_afrique = Math.round((afriqueNCSI.reduce(moyenne) / afriqueNCSI.length) * 100) / 100
            let moyenne_asie = Math.round((asieNCSI.reduce(moyenne) / asieNCSI.length) * 100) / 100
            let moyenne_nord = Math.round((nordNCSI.reduce(moyenne) / nordNCSI.length) * 100) / 100
            let moyenne_sud = Math.round((sudNCSI.reduce(moyenne) / sudNCSI.length) * 100) / 100
            let moyenne_occeanie = Math.round((occeanieNCSI.reduce(moyenne) / occeanieNCSI.length) * 100) / 100


            // fonction du calcule  

            function moyenne(first, nombre) {
                return first + nombre;
            }

            // affichage des bonnes mesures


            document.querySelectorAll('.diff').forEach(e =>{
                e.style = "display: none;"
            })
            document.querySelectorAll('.autre').forEach(e =>{
                e.style = "display: block;"
            })

            // affichage des moyennes
            document.querySelector('#europe2').innerHTML = '<b>' + moyenne_europe + ' %</b>'
            document.querySelector('#afrique2').innerHTML = '<b>' + moyenne_afrique + ' %</b>'
            document.querySelector('#asie2').innerHTML = '<b>' + moyenne_asie + ' %</b>'
            document.querySelector('#amenord2').innerHTML = '<b>' + moyenne_nord + ' %</b>'
            document.querySelector('#amesud2').innerHTML = '<b>' + moyenne_sud + ' %</b>'
            document.querySelector('#occeanie2').innerHTML = '<b>' + moyenne_occeanie + ' %</b>'

        } else if (e.id == 'Différence') {

            // bonnes mesures

            document.querySelectorAll('.diff').forEach(e =>{
                e.style = "display: block;"
            })
            document.querySelectorAll('.autre').forEach(e =>{
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

                // changement taille de chaque barres

                if (pays[key]['Continent'] == 'Europe') {

                    // pour chaque barres on calcule la différence, donc la sécurité moins le DigitalDéveloppement 
                    europeNCSI.push(pays[key]['NCSI'] - pays[key]['DigitalDéveloppement'])
                    if((((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 690) / 100) >= 0){
                        document.querySelector("#" + key).setAttribute("height", ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100)
                        document.querySelector("#" + key).setAttribute("y", "383.5")
                    }
                    else{
                        document.querySelector("#" + key).setAttribute("height", (0-((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("y", 383.5-(0-((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("fill", "url(#négatifvalues)")
                    }
                }
                if (pays[key]['Continent'] == 'Afrique') {
                    afriqueNCSI.push(pays[key]['NCSI'] - pays[key]['DigitalDéveloppement'])
                    if((((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 690) / 100) >= 0){
                        document.querySelector("#" + key).setAttribute("height", ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100)
                        document.querySelector("#" + key).setAttribute("y", "383.5")
                    }
                    else{
                        document.querySelector("#" + key).setAttribute("height", (0-((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("y", 383.5-(0-((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("fill", "url(#négatifvalues)")
                    }
                }
                if (pays[key]['Continent'] == 'Asie') {
                    asieNCSI.push(pays[key]['NCSI'] - pays[key]['DigitalDéveloppement'])
                    if((((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 690) / 100) >= 0){
                        document.querySelector("#" + key).setAttribute("height", ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100)
                        document.querySelector("#" + key).setAttribute("y", "383.5")
                    }
                    else{
                        document.querySelector("#" + key).setAttribute("height", (0-((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("y", 383.5-(0-((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("fill", "url(#négatifvalues)")
                    }
                }
                if (pays[key]['Continent'] == 'Amérique du nord') {
                    nordNCSI.push(pays[key]['NCSI'] - pays[key]['DigitalDéveloppement'])
                    if((((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 690) / 100) >= 0){
                        document.querySelector("#" + key).setAttribute("height", ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100)
                        document.querySelector("#" + key).setAttribute("y", "383.5")
                    }
                    else{
                        document.querySelector("#" + key).setAttribute("height", (0-((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("y", 383.5-(0-((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("fill", "url(#négatifvalues)")
                    }
                }
                if (pays[key]['Continent'] == 'Amérique du sud') {
                    sudNCSI.push(pays[key]['NCSI'] - pays[key]['DigitalDéveloppement'])
                    if((((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 690) / 100) >= 0){
                        document.querySelector("#" + key).setAttribute("height", ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100)
                        document.querySelector("#" + key).setAttribute("y", "383.5")
                    }
                    else{
                        document.querySelector("#" + key).setAttribute("height", (0-((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("y", 383.5-(0-((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("fill", "url(#négatifvalues)")
                    }
                }
                if (pays[key]['Continent'] == 'Océanie') {
                    occeanieNCSI.push(pays[key]['NCSI'] - pays[key]['DigitalDéveloppement'])
                    if((((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 690) / 100) >= 0){
                        document.querySelector("#" + key).setAttribute("height", ((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100)
                        document.querySelector("#" + key).setAttribute("y", "383.5")
                    }
                    else{
                        document.querySelector("#" + key).setAttribute("height", (0-((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("y", 383.5-(0-((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100))
                        document.querySelector("#" + key).setAttribute("fill", "url(#négatifvalues)")
                    }
                }


                if((((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 690) / 100) >= 0){
                    document.querySelector('#'+key+'hover').setAttribute('y', (345 +(((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100)+ 55))
                    document.querySelector('#'+key+'texthover').setAttribute('y', (401 - (((pays[key]['NCSI'] - pays[key]['DigitalDéveloppement']) * 345) / 100)) - 37.5 )
                    document.querySelector('#'+key+'texthover').innerHTML = pays[key]['DigitalDéveloppement'] + " %"
                }
                else{
                    document.querySelector('#'+key+'hover').setAttribute('y', (345 + 55))
                    document.querySelector('#'+key+'texthover').setAttribute('y', 345 + 18.5)
                    document.querySelector('#'+key+'texthover').innerHTML = pays[key]['DigitalDéveloppement'] + " %"
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





