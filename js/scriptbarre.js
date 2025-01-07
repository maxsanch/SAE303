document.querySelectorAll('#deroulant_sécu>p').forEach(e => {
    e.addEventListener('click', graphmaj)

    function graphmaj() {
        document.querySelector('#indexder').innerHTML = e.id;
        if (e.id == 'Sécurité') {
            document.querySelectorAll('.diff').forEach(e =>{
                e.style = "display: none;"
            })

            document.querySelector('#Line10').style = "transform: translateY(0);"
            document.querySelector('#gradientcolor1').setAttribute('stop-color', '#19002F')
            document.querySelector('#gradientcolor2').setAttribute('stop-color', '#0C2472')

            let europeNCSI = [];
            let afriqueNCSI = [];
            let asieNCSI = [];
            let nordNCSI = [];
            let sudNCSI = [];
            let occeanieNCSI = [];


            Object.entries(pays).forEach(([key]) => {
                document.querySelector("#" + key).setAttribute("y", "38.5")
                document.querySelector("#" + key).setAttribute("fill", "url(#paint0_linear_106_302)")
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
            document.querySelectorAll('.autre').forEach(e =>{
                e.style = "display: block;"
            })
            document.querySelectorAll('.diff').forEach(e =>{
                e.style = "display: none;"
            })

            document.querySelector('#europe2').innerHTML = '<b>' + moyenne_europe + ' %</b>'
            document.querySelector('#afrique2').innerHTML = '<b>' + moyenne_afrique + ' %</b>'
            document.querySelector('#asie2').innerHTML = '<b>' + moyenne_asie + ' %</b>'
            document.querySelector('#amenord2').innerHTML = '<b>' + moyenne_nord + ' %</b>'
            document.querySelector('#amesud2').innerHTML = '<b>' + moyenne_sud + ' %</b>'
            document.querySelector('#occeanie2').innerHTML = '<b>' + moyenne_occeanie + ' %</b>'
        }
        else if (e.id == 'Développement') {
            document.querySelector('#Line10').style = "transform: translateY(0);"

            document.querySelector('#gradientcolor1').setAttribute('stop-color', '#082122')
            document.querySelector('#gradientcolor2').setAttribute('stop-color', '#128084')
            

            let europeNCSI = [];
            let afriqueNCSI = [];
            let asieNCSI = [];
            let nordNCSI = [];
            let sudNCSI = [];
            let occeanieNCSI = [];

            Object.entries(pays).forEach(([key]) => {
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
            document.querySelectorAll('.diff').forEach(e =>{
                e.style = "display: none;"
            })
            document.querySelectorAll('.autre').forEach(e =>{
                e.style = "display: block;"
            })
            document.querySelector('#europe2').innerHTML = '<b>' + moyenne_europe + ' %</b>'
            document.querySelector('#afrique2').innerHTML = '<b>' + moyenne_afrique + ' %</b>'
            document.querySelector('#asie2').innerHTML = '<b>' + moyenne_asie + ' %</b>'
            document.querySelector('#amenord2').innerHTML = '<b>' + moyenne_nord + ' %</b>'
            document.querySelector('#amesud2').innerHTML = '<b>' + moyenne_sud + ' %</b>'
            document.querySelector('#occeanie2').innerHTML = '<b>' + moyenne_occeanie + ' %</b>'
        } else if (e.id == 'Différence') {
            document.querySelectorAll('.diff').forEach(e =>{
                e.style = "display: block;"
            })
            document.querySelectorAll('.autre').forEach(e =>{
                e.style = "display: none;"
            })
            let europeNCSI = [];
            let afriqueNCSI = [];
            let asieNCSI = [];
            let nordNCSI = [];
            let sudNCSI = [];
            let occeanieNCSI = [];

            document.querySelector('#gradientcolor1').setAttribute('stop-color', '#19002F')
            document.querySelector('#gradientcolor2').setAttribute('stop-color', '#0C2472')
            document.querySelector('#Line10').style = "transform: translateY(-345px);"
   
            Object.entries(pays).forEach(([key]) => {
                if (pays[key]['Continent'] == 'Europe') {
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

            document.querySelector('#europe2').innerHTML = '<b>' + moyenne_europe + ' %</b>'
            document.querySelector('#afrique2').innerHTML = '<b>' + moyenne_afrique + ' %</b>'
            document.querySelector('#asie2').innerHTML = '<b>' + moyenne_asie + ' %</b>'
            document.querySelector('#amenord2').innerHTML = '<b>' + moyenne_nord + ' %</b>'
            document.querySelector('#amesud2').innerHTML = '<b>' + moyenne_sud + ' %</b>'
            document.querySelector('#occeanie2').innerHTML = '<b>' + moyenne_occeanie + ' %</b>'
        }
    }
});

