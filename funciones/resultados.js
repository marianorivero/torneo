import { prediccion } from "./posiblePrediccion.js";

function resultadosLiga(fecha, liga) {
    fecha.forEach(equipo => {
        const partido = prediccion(equipo[0], equipo[1]);
        if (partido.hay_prediccion) {

            document.getElementById(liga).innerHTML += `
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

            document.getElementById(liga).innerHTML += `
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


export { resultadosLiga };