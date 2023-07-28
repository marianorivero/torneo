import { diferenciaUltima, diferenciaPenultima } from './diferencias.js';

function prediccion(equipo1, equipo2) {
    let hayPrediccion = true;
    let prediccion;
    let primeraDiferenciaPenultima = diferenciaPenultima(equipo1);
    let segundaDiferenciaPenultima = diferenciaPenultima(equipo2);
    let primeraDiferenciaUltima    = diferenciaUltima(equipo1);
    let segundaDiferenciaUltima    = diferenciaUltima(equipo2);
    let porcentaje;

    let res1 = (primeraDiferenciaPenultima) - (segundaDiferenciaPenultima);
    let res2 = (primeraDiferenciaUltima) - (segundaDiferenciaUltima);

 
    
    if ( (res1 >=1 ) && (res2 >=1 ) ) {//el primer equipo tiene la ventaja
        let miDiferencia = (res1) - (res2);

        if ( (miDiferencia <= 10) && (miDiferencia >= 1)) {//el primer equipo gana
            
            porcentaje = `
            <font color="#72D67E">45%</font> ${equipo1[0].nombre} <br>
            <font color="#D6D372">35%</font>  Empate              <br>
            <font color="#D67272">20%</font> ${equipo2[0].nombre} <br>
            `;
            prediccion    = 'Afinidad: <b><font color="#72D67E">'+ equipo1[0].nombre+'</font></b>';
            hayPrediccion = true;
        }else{
            porcentaje = ``;
            prediccion = '-';
            hayPrediccion = false;
        }


    }else{
        if ( (res1 <= -1) && (res2 <= -1)) {//el segundo equipo tiene la ventaja
            let miDiferencia = (res1) - (res2);

            if ( (miDiferencia >= -10)  && (miDiferencia <= -1)) {//el segundo equipo gana
                
                porcentaje = `
                <font color="#72D67E">45%</font> ${equipo2[0].nombre} <br>
                <font color="#D6D372">35%</font> Empate               <br>
                <font color="#D67272">20%</font> ${equipo1[0].nombre} <br>
                `;
                prediccion    = 'Afinidad: <b><font color="#72D67E">'+ equipo2[0].nombre+'</font></b>';
                hayPrediccion = true;
            }else{
                porcentaje = ``;
                prediccion = '-';
                hayPrediccion = false;
            }
        }else{
            porcentaje = ``;
            prediccion = '-';
            hayPrediccion = false;
        }
    }

    const resultado = {
        partido:        '<font color="#9AAEFF">'+equipo1[0].nombre+'  -  '+equipo2[0].nombre+'</font>',
        // #729FD6     #5271FF
        hay_prediccion: hayPrediccion,
        prediccion:     prediccion,
        probabilidades: porcentaje
    }
    return resultado;
}

export { prediccion }; 