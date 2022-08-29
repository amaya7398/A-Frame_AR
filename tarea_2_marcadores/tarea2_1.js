const coche = document.querySelector('#coche'); //markerGrown
const meta = document.querySelector('#meta'); //meta
const nuevo = document.querySelector('#nuevo').object3D;
const markerKanji = document.querySelector('#kanji').object3D;
const markerHiro = document.querySelector('#hiro');

const getHiroPosition = () => {
    return markerHiro.getAttribute('position');
};
const getKanjiPosition = () => {
    return markerKanji.position;
}

//HIRO { NUEVO, COCHE, LINEA }
//KANJI { META }
const cambiarPosicion = () => {
    correcion_posicion_global_a_local();
    lineaRecorrido();    
    consoleShowStatus();
};

const correcion_posicion_global_a_local = () => {
    nuevo.position.set(0,0,0);
    let {x, y, z} = getKanjiPosition();
    //Setea la posicion con respecto al mundo.
    nuevo.position.set(x,y,z);
    //Corrige la posicion con respecto al mundo. La posición que tiene
    //el marcador "KANJI", pero con coordenadas del marcador "HIRO"
    let worldToLocal = new THREE.Matrix4().getInverse(nuevo.matrixWorld)
    nuevo.applyMatrix(worldToLocal);
}
const lineaRecorrido = () => {
    const line = document.querySelector("#line");
    line.removeAttribute("line")
    line.setAttribute("line", {
        start: {x:0, y:0, z:0}, //Centro del marcador HIRO
        end: nuevo.position,    //Centro del marcador KANJI (nueva posición calculada)
        color: "#FF0000"
    });
}
const consoleShowStatus = () => {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    console.log("KANJI",markerKanji.position);
    console.log("HIRO",markerHiro.object3D.position);
    console.log("Posición nueva (dentro de HIRO):",nuevo.position);
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
}

//Cargar los botonos de la interfaz :B
window.onload = () => {
    document.querySelector("#a").addEventListener("click", () => {
        // cambiarPosicion();
        meta.emit("changePosition")
        
    });
    document.querySelector("#b").addEventListener("click", () => {
        // cambiarPosicion();
        meta.emit("crecimientoActivado")
    });
}