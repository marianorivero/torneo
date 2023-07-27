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


import { prediccion } from "./funciones/posiblePrediccion.js";


function prediccionLigaBR() {
    
    let fecha = [
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


    fecha.forEach(equipo => {
        const partido = prediccion(equipo[0], equipo[1]);
        if (partido.hay_prediccion) {

            let liga = document.getElementById('ligaBrasil');

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

            let liga = document.getElementById('ligaBrasil');

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

export { prediccionLigaBR }; 