import { prediccion } from "./posiblePrediccion.js";

function resultadosLiga(partidos, liga) {
    let huboPrediccion = false;


    document.getElementById(liga[0]).innerHTML +=`
        <h2>Liga de ${liga[3]}</h2>
        <hr style="width:80%">
        <center>  
            <img src="${liga[2]}" width="75" height="100"/>  
        </center>
        <h2>Fecha ${liga[1]}</h2>
        <br></br>
    `;


    partidos.forEach(equipo => {
        const partido = prediccion(equipo[0], equipo[1], equipo[3]);
        if (partido.hay_prediccion) {

            document.getElementById(liga[0]).innerHTML += `
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
                    <b>${partido.partido}</b>  |  ${equipo[2]}<br><br>

                    ${partido.probabilidades}                 <br>
                    <center>${partido.prediccion}</center>    <br>   
                <div><br>
            `;
            huboPrediccion = true;
        }
    });

    if (!huboPrediccion) {
        document.getElementById(liga[0]).innerHTML += `
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
            <center><b>Sin predicciones para esta fecha</b></center>   <br>
            <b>________________________________________</b>            <br><br> 
        <div><br>
    `;
    }
}


export { resultadosLiga };