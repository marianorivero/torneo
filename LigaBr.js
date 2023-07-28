import { America } from "/equipos/brasil/America.js";
import { AtleticoMineiro } from "/equipos/brasil/AtleticoMineiro.js";
import { Bahia } from "/equipos/brasil/Bahia.js";
import { Botafogo } from "/equipos/brasil/Botafogo.js";
import { Bragantino } from "/equipos/brasil/Bragantino.js";
import { Corinthians } from "/equipos/brasil/Corinthians.js";
import { Coritiba } from "/equipos/brasil/Coritiba.js";
import { Cruzeiro } from "/equipos/brasil/Cruzeiro.js";
import { Cuiaba } from "/equipos/brasil/Cuiaba.js";
import { Flamengo } from "/equipos/brasil/Flamengo.js";
import { Fluminense } from "/equipos/brasil/Fluminense.js";
import { Fortaleza } from "/equipos/brasil/Fortaleza.js";
import { Gremio } from "/equipos/brasil/Gremio.js";
import { Goias } from "/equipos/brasil/Goias.js";
import { Internacional } from "/equipos/brasil/Internacional.js";
import { Palmeiras } from "/equipos/brasil/Palmeiras.js";
import { Paranaense } from "/equipos/brasil/Paranaense.js";
import { Santos } from "/equipos/brasil/Santos.js";
import { SaoPaulo } from "/equipos/brasil/SaoPaulo.js";
import { VascoDaGama } from "/equipos/brasil/VascoDaGama.js";


import { resultadosLiga } from "./funciones/resultados.js";


function prediccionLigaBR() {
    const liga  = 'ligaBrasil';
    const fecha = [
        [Paranaense, Cruzeiro, 'Sabado 29 de Julio'],
    
        [Fluminense, Santos, 'Sabado 29 de Julio'],
    
        [Internacional, Cuiaba, 'Sabado 29 de Julio'],
    
        [Corinthians, VascoDaGama, 'Sabado 29 de Julio'],
    
        [Fortaleza,  Bragantino, 'Sabado 29 de Julio'],
    
        [AtleticoMineiro, Flamengo, 'Sabado 29 de Julio'],
    
        [SaoPaulo, Bahia, 'Domingo 30 de Julio'],
    
        [America,  Palmeiras, 'Domingo 30 de Julio'],
    
        [Botafogo, Coritiba, 'Domingo 30 de Julio'],
    
        [Goias,  Gremio, 'Domingo 30 de Julio']
    ]
    resultadosLiga(fecha, liga);
}

export { prediccionLigaBR }; 