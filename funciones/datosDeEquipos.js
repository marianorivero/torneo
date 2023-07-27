function datoEquipo (equipo, posicionInicial , posicionFinal) {

    const ultimosPartidos  = equipo.slice(posicionInicial, posicionFinal)
    const cantidadPartidos = ultimosPartidos.length;

    let puntosGanados      = 0;
    let puntosEmpatados    = 0;

    ultimosPartidos.forEach(partido => {
        if ((partido.resultado == 'G') || (partido.resultado == 'g') || (partido.resultado == 'Gano') || (partido.resultado == 'gano')) {
            puntosGanados = puntosGanados+3;
        }
        if ((partido.resultado == 'E') || (partido.resultado == 'e') || (partido.resultado == 'empato') || (partido.resultado == 'Empato')) {
            puntosEmpatados++;
        }
    });

    const totalPuntosObtenidos      = puntosGanados + puntosEmpatados;
    const totalPuntosDisputados     = cantidadPartidos *  3;
    const porcentajePuntosObtenidos = Math.round((totalPuntosObtenidos / totalPuntosDisputados) *100) ;

    const datosUltimos = {
        partidos_disputados:          cantidadPartidos,
        puntos_disputados:            totalPuntosDisputados,
        puntos_obtenidos:             totalPuntosObtenidos,
        porcentaje_puntos_obtenidos:  porcentajePuntosObtenidos,
        partidos : ultimosPartidos,
    }
    return datosUltimos;
}

export { datoEquipo };