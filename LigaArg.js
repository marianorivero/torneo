import { Argentinos } from '/equipos/argentina/Argentinos.js';
import { Arsenal } from '/equipos/argentina/Arsenal.js';
import { AtleticoTucuman } from '/equipos/argentina/AtleticoTucuman.js';
import { Banfield } from '/equipos/argentina/Banfield.js';
import { BarracasCentral } from '/equipos/argentina/BarracasCentral.js';
import { Belgrano } from '/equipos/argentina/Belgrano.js';
import { Boca } from '/equipos/argentina/Boca.js';
import { CentralCordoba } from '/equipos/argentina/CentralCordoba.js';
import { Colon } from '/equipos/argentina/Colon.js';
import { DefensaYJusticia } from '/equipos/argentina/DefensaYJusticia.js';
import { Estudiantes } from '/equipos/argentina/Estudiantes.js';
import { Gimnasia } from '/equipos/argentina/Gimnasia.js';
import { GodoyCruz } from '/equipos/argentina/GodoyCruz.js';
import { Huracan } from '/equipos/argentina/Huracan.js';
import { Independiente } from '/equipos/argentina/Independiente.js';
import { Instituto } from '/equipos/argentina/Instituto.js';
import { Lanus } from '/equipos/argentina/Lanus.js';
import { Newells } from '/equipos/argentina/Newells.js';
import { Platense } from '/equipos/argentina/Platense.js';
import { Racing } from '/equipos/argentina/Racing.js';
import { River } from '/equipos/argentina/River.js';
import { RosarioCentral } from '/equipos/argentina/RosarioCentral.js';
import { SanLorenzo } from '/equipos/argentina/SanLorenzo.js';
import { Sarmiento } from '/equipos/argentina/Sarmiento.js';
import { Talleres } from '/equipos/argentina/Talleres.js';
import { Tigre } from '/equipos/argentina/Tigre.js';
import { Union } from '/equipos/argentina/Union.js';
import { Velez } from '/equipos/argentina/Velez.js';

import { prediccion } from "./funciones/posiblePrediccion.js";


function prediccionLigaARG() {
    const fecha = [
        [Union, DefensaYJusticia, 'Viernes 28 de Julio'],
    
        [Argentinos, Estudiantes, 'Viernes 28 de Julio'],
    
        [Newells, Talleres, 'Viernes 28 de Julio'],
    
        [Belgrano, RosarioCentral, 'Viernes 28 de Julio'],
    
        [River,  Racing, 'Viernes 28 de Julio'],
    
        [CentralCordoba, AtleticoTucuman, 'Sabado 29 de Julio'],

        [Sarmiento, Banfield, 'Sabado 29 de Julio'],

        [Independiente,  Boca, 'Sabado 29 de Julio'],

        [Tigre, SanLorenzo, 'Sabado 29 de Julio'],

        [Lanus,  BarracasCentral, 'Domingo 30 de Julio'],

        [Arsenal,  Colon, 'Domingo 30 de Julio'],

        [Gimnasia,  Platense, 'Domingo 30 de Julio'],

        [Huracan,  Velez, 'Domingo 30 de Julio'],

        [GodoyCruz,  Instituto, 'Domingo 30 de Julio']
    ]


    fecha.forEach(equipo => {
        const partido = prediccion(equipo[0], equipo[1]);
        if (partido.hay_prediccion) {

            let liga = document.getElementById('ligaArgentina');

            liga.innerHTML += `
                <div 
                    style="
                    background-color: rgb(29,29,29);
                    max-width: 500px;
                    border-radius: 10px;
                    margin: 10px 10px 10px 10px;
                    padding-top: 20px;
                    padding-left: 20px;
                    padding-right: 20px;
                    padding-botomm: 20px;
                    color: white; 
                    "
                >
                    <b>${partido.partido}</b>  |  ${equipo[2]}<br> <br> 
                    ${partido.prediccion}<br><br>     
                    ${partido.probabilidades}<br>
                <div><br>
            `;
        }
    });

    fecha.forEach(equipo => {
        const partido = prediccion(equipo[0], equipo[1]);
        if (!partido.hay_prediccion) {

            let liga = document.getElementById('ligaArgentina');

            liga.innerHTML += `
                <div 
                    style="
                    background-color: rgb(20,20,20);
                    max-width: 500px;
                    border-radius: 10px;
                    margin: 10px 10px 10px 10px;
                    padding-top: 20px;
                    padding-left: 20px;
                    padding-right: 20px;
                    padding-botomm: 20px;
                    color: grey; 
                    "
                >
                    <b>${partido.partido}</b>  |  ${equipo[2]}<br> <br> 
                    ${partido.prediccion}<br>    

                <div><br>
            `;
        }
    });
}

export { prediccionLigaARG };

