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
    const liga     = ['ligaChile', '19', 'img/chi.png', 'Chile'];
    const partidos = [
        [OHiggins, Ñublense, 'Viernes 28 de Julio', '2'],
    
        [Cobresal, UCatolica, 'Sábado 29 de Julio', '1'],
    
        [ColoColo, Huachipato, 'Sábado 29 de Julio', '2'],
    
        [UEspañola, AudaxItaliano, 'Sábado 29 de Julio', '1'],
    
        [Magallanes,  UdeChile, 'Domingo 30 de Julio', '2'],
    
        [Palestino, DeportivoCopiapo, 'Domingo 30 de Julio', '1'],

        [CuricoUnido, LaCalera, 'Domingo 30 de Julio', '2'],

        [CoquimboUnido,  Everton, 'Domingo 30 de Julio', '1']
    ]
    resultadosLiga(partidos, liga);
}

export { prediccionLigaCH };

