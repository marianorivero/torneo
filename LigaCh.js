import { AudaxItaliano } from "/equipos/chile/AudaxItaliano.js";
import { Cobresal } from "/equipos/chile/Cobresal.js";
import { ColoColo } from "/equipos/chile/ColoColo.js";
import { CoquimboUnido } from "/equipos/chile/CoquimboUnido.js";
import { CuricoUnido } from "/equipos/chile/CuricoUnido.js";
import { DeportivoCopiapo } from "/equipos/chile/DeportivoCopiapo.js";
import { Everton } from "/equipos/chile/Everton.js";
import { Huachipato } from "/equipos/chile/Huachipato.js";
import { LaCalera } from "/equipos/chile/LaCalera.js";
import { Magallanes } from "/equipos/chile/Magallanes.js";
import { Ñublense } from "/equipos/chile/Ñublense.js";
import { OHiggins } from "/equipos/chile/OHiggins.js";
import { Palestino } from "/equipos/chile/Palestino.js";
import { UCatolica } from "/equipos/chile/UCatolica.js";
import { UdeChile } from "/equipos/chile/UdeChile.js";
import { UEspañola } from "/equipos/chile/UEspañola.js";

import { prediccion } from "./funciones/posiblePrediccion.js";


function prediccionLigaCH() {
    const fecha = [
        [LaCalera, Magallanes, 'Viernes 21 de Julio'],
    
        [DeportivoCopiapo, Cobresal, 'Sábado 22 de Julio'],
    
        [Huachipato, OHiggins, 'Sábado 22 de Julio'],
    
        [UdeChile, Palestino, 'Sábado 22 de Julio'],
    
        [Everton,  UEspañola, 'Domingo 23 de Julio'],
    
        [UCatolica, CoquimboUnido, 'Domingo 23 de Julio'],

        [AudaxItaliano, CuricoUnido, 'Lunes 24 de Julio'],

        [Ñublense,  ColoColo, 'Lunes 24 de Julio']
    ]


    fecha.forEach(equipo => {
        const partido = prediccion(equipo[0], equipo[1]);
        if (partido.hay_prediccion) {

            let liga = document.getElementById('ligaChile');

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

            let liga = document.getElementById('ligaChile');

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

export { prediccionLigaCH };

