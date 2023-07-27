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

 
    // console.log(res1+' '+res2);
    if ( (res1 >=1 ) && (res2 >=1 ) ) {
        //el primer equipo tiene la ventaja

        let miDiferencia = (res1) - (res2);

        if ( (miDiferencia <= 10) && (miDiferencia >= 1)) {
            //el primer equipo gana
            porcentaje = `
            50% ${equipo1[0].nombre} <br>
            30%  EMPATE              <br>
            20% ${equipo2[0].nombre} <br>
            `;
            prediccion    = '<b>Afinidad:</b> <u>'+ equipo1[0].nombre+'</u>';
            hayPrediccion = true;

        }else{
            // porcentaje = `
            // 40%  EMPATE              <br>
            // 40% ${equipo1[0].nombre} <br>
            // 20% ${equipo2[0].nombre} <br>
            // `;
            // prediccion    = '<b>Afinidad:</b> Empate o '+ equipo1[0].nombre;
            // hayPrediccion = true;
            porcentaje = ``;
            prediccion = '-';
            hayPrediccion = false;
        }


    }else{
        if ( (res1 <= -1) && (res2 <= -1)) {
            //el segundo equipo tiene la ventaja

            let miDiferencia = (res1) - (res2);

            if ( (miDiferencia >= -10)  && (miDiferencia <= -1)) {
                //el segundo equipo gana
                porcentaje = `
                50% ${equipo2[0].nombre} <br>
                30% EMPATE               <br>
                20% ${equipo1[0].nombre} <br>
                `;
                prediccion    = '<b>Afinidad:</b> <u>'+ equipo2[0].nombre+'</u>';
                hayPrediccion = true;
            }else{
                // porcentaje = `
                // 40%  EMPATE              <br>
                // 40% ${equipo1[0].nombre} <br>
                // 20% ${equipo2[0].nombre} <br>
                // `;
                // prediccion    = '<b>Afinidad:</b> Empate o '+ equipo2[0].nombre;
                // hayPrediccion = true;
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

        partido:        equipo1[0].nombre+'  -  '+equipo2[0].nombre,
        hay_prediccion: hayPrediccion,
        prediccion:     prediccion,
        probabilidades: porcentaje
    }
    return resultado;
}

export { prediccion }; 