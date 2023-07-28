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


import { resultadosLiga } from "./funciones/resultados.js";


function prediccionLigaCH() {
    const liga  = 'ligaChile';
    const fecha = [
        [LaCalera, Magallanes, 'Viernes 28 de Julio'],
    
        [DeportivoCopiapo, Cobresal, 'Sábado 29 de Julio'],
    
        [Huachipato, OHiggins, 'Sábado 29 de Julio'],
    
        [UdeChile, Palestino, 'Sábado 29 de Julio'],
    
        [Everton,  UEspañola, 'Domingo 30 de Julio'],
    
        [UCatolica, CoquimboUnido, 'Domingo 30 de Julio'],

        [AudaxItaliano, CuricoUnido, 'Domingo 30 de Julio'],

        [Ñublense,  ColoColo, 'Domingo 30 de Julio']
    ]
    resultadosLiga(fecha, liga);
}

export { prediccionLigaCH };

