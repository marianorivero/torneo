import { datoEquipo } from './datosDeEquipos.js';

function diferenciaUltima(equipo) {

    const penultimosPartidos = datoEquipo(equipo[1], equipo[1].length-8, equipo[1].length-3);
    const ultimosPartidos = datoEquipo(equipo[1], equipo[1].length-5, equipo[1].length);

    const diferencia = ultimosPartidos.porcentaje_puntos_obtenidos - penultimosPartidos.porcentaje_puntos_obtenidos;

    return diferencia;
}


function diferenciaPenultima(equipo) {

    const penultimosPartidos = datoEquipo(equipo[1], equipo[1].length-9, equipo[1].length-4);
    const ultimosPartidos = datoEquipo(equipo[1], equipo[1].length-6, equipo[1].length-1);

    const diferencia = ultimosPartidos.porcentaje_puntos_obtenidos - penultimosPartidos.porcentaje_puntos_obtenidos;

    return diferencia;
}



export { diferenciaUltima, diferenciaPenultima };