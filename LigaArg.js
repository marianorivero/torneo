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


import { resultadosLiga } from "./funciones/resultados.js";


function prediccionLigaARG() {
    const liga  = 'ligaArgentina';
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
    resultadosLiga(fecha, liga);
}

export { prediccionLigaARG };

