import { diferenciaUltima, diferenciaPenultima } from './diferencias.js';

function prediccion(equipo1, equipo2, mayorPuntaje) {
    let hayPrediccion = false;
    let prediccion;
    let primeraDiferenciaPenultima = diferenciaPenultima(equipo1);
    let segundaDiferenciaPenultima = diferenciaPenultima(equipo2);
    let primeraDiferenciaUltima    = diferenciaUltima(equipo1);
    let segundaDiferenciaUltima    = diferenciaUltima(equipo2);
    let porcentaje;

    let res1 = (primeraDiferenciaPenultima) - (segundaDiferenciaPenultima);
    let res2 = (primeraDiferenciaUltima) - (segundaDiferenciaUltima);
    let miDiferencia = (res1) - (res2);

    if (  (primeraDiferenciaPenultima > segundaDiferenciaPenultima)  &&  (primeraDiferenciaUltima > segundaDiferenciaUltima) && (segundaDiferenciaPenultima >= segundaDiferenciaUltima) && (primeraDiferenciaPenultima <=primeraDiferenciaUltima)) {
        porcentaje = `
            <center><font color="#9AAEFF">${equipo1[0].nombre}</font>  <br>
            ${primeraDiferenciaPenultima}  |  ${primeraDiferenciaUltima} <br><br>
            <font color="#9AAEFF">${equipo2[0].nombre}</font>  <br>
            ${segundaDiferenciaPenultima}  |  ${segundaDiferenciaUltima}</center>
        `;
        prediccion    = `Afinidad: <font color="#72D67E">${equipo1[0].nombre}</font> (${miDiferencia})`;
        hayPrediccion = true; //gana el local
    }


    if ( (segundaDiferenciaPenultima > primeraDiferenciaPenultima) && (segundaDiferenciaUltima > primeraDiferenciaUltima) && (primeraDiferenciaPenultima >= primeraDiferenciaUltima) && (segundaDiferenciaUltima >= segundaDiferenciaPenultima)) {


        if (mayorPuntaje == 2) {
            porcentaje = `
                <center><font color="#9AAEFF">${equipo1[0].nombre}</font>  <br>
                ${primeraDiferenciaPenultima}  |  ${primeraDiferenciaUltima} <br><br>
                <font color="#9AAEFF"><u>${equipo2[0].nombre}</u></font>  <br>
                ${segundaDiferenciaPenultima}  |  ${segundaDiferenciaUltima}</center>
            `;
            prediccion    = `Afinidad: <font color="#72D67E">${equipo2[0].nombre}</font> (${miDiferencia})`;
            hayPrediccion = true; //gana el visitante o empate
        }else{
            if ((miDiferencia > 30 || (miDiferencia < -30))) {
                porcentaje = `
                    <center><font color="#9AAEFF"><u>${equipo1[0].nombre}</u></font>  <br>
                    ${primeraDiferenciaPenultima}  |  ${primeraDiferenciaUltima} <br><br>
                    <font color="#9AAEFF">${equipo2[0].nombre}</font>  <br>
                    ${segundaDiferenciaPenultima}  |  ${segundaDiferenciaUltima}</center>
                `;
                prediccion    = `Afinidad: <font color="#72D67E">${equipo2[0].nombre}</font> (${miDiferencia})`;
                hayPrediccion = true; //gana el visitante o empate
            }
        } 

        // PLANTILLA DE PORCENTAJE
        // porcentaje = `
        //     <center><font color="#9AAEFF">${equipo1[0].nombre}</font>  <br>
        //     ${primeraDiferenciaPenultima}  |  ${primeraDiferenciaUltima} <br><br>
        //     <font color="#9AAEFF">${equipo2[0].nombre}</font>  <br>
        //     ${segundaDiferenciaPenultima}  |  ${segundaDiferenciaUltima}</center>
        // `;
        // prediccion    = `Afinidad: <font color="#72D67E">${equipo2[0].nombre}</font> o <font color="#D6D372">Empate</font> (${miDiferencia})`;
        // hayPrediccion = true; //gana el visitante o empate
    }


    if ((primeraDiferenciaPenultima == primeraDiferenciaUltima) && (segundaDiferenciaPenultima==segundaDiferenciaUltima)) {
        hayPrediccion = false;//ejmp: si el primer equipo es (13)-(13) y el segundo es (-7)-(-7) se anula por falta de sentido
    }


    // if ( (res1 >=1 ) && (res2 >=1 ) ) {//el primer equipo tiene la ventaja
    //     if ( (miDiferencia <= 10) && (miDiferencia >= 1)) {
    //     // if (segundaDiferenciaUltima < segundaDiferenciaPenultima) {
            
    //         porcentaje = `
    //             <font color="#72D67E">45%</font> ${equipo1[0].nombre}...  ${primeraDiferenciaPenultima}  |  ${primeraDiferenciaUltima}<br>
    //             <font color="#D6D372">35%</font>  Empate             <br>
    //             <font color="#D67272">20%</font> ${equipo2[0].nombre}...  ${segundaDiferenciaPenultima}  |  ${segundaDiferenciaUltima} <br>
    //         `;
    //         prediccion    = 'Afinidad: <b><font color="#72D67E">'+ equipo1[0].nombre+'</font></b> ';
    //         hayPrediccion = true;
    //     // }
    //     }
    // } 

    // if ( (res1 <= -1) && (res2 <= -1) ) {//el primer equipo tiene la ventaja
    //     if ( (miDiferencia >= -10)  && (miDiferencia <= -1)) {
    //     // if (primeraDiferenciaUltima < primeraDiferenciaPenultima) {
            
        
    //         porcentaje = `
    //             <font color="#72D67E">45%</font> ${equipo2[0].nombre}...  ${segundaDiferenciaPenultima}  |  ${segundaDiferenciaUltima}<br>
    //             <font color="#D6D372">35%</font> Empate              <br>
    //             <font color="#D67272">20%</font> ${equipo1[0].nombre}...  ${primeraDiferenciaPenultima}  |  ${primeraDiferenciaUltima}<br>
    //         `;
    //         prediccion    = 'Afinidad: <b><font color="#72D67E">'+ equipo2[0].nombre+'</font></b> ';
    //         hayPrediccion = true;
    //     // }
    //     }
    // }

    const resultado = {
        partido:        `${equipo1[0].nombre}  -  ${equipo2[0].nombre}`,
        // #729FD6     #5271FF
        hay_prediccion: hayPrediccion,
        prediccion:     prediccion,
        probabilidades: porcentaje
    }
    return resultado;
}

export { prediccion }; 