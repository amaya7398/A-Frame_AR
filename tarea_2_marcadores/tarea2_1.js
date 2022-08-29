const coche = document.querySelector('#handler'); //markerGrown
const meta = document.querySelector('#meta'); //meta
const nuevo = document.querySelector('#nuevo').object3D;
const markerKanji = document.querySelector('#kanji').object3D;
const markerHiro = document.querySelector('#hiro');

const click = document.querySelector('#click');
click.addEventListener('click', () => {
    console.log('click');
    console.log('hiro', getHiroPosition());
    console.log('kanji', getKanjiPosition());
});

const getHiroPosition = () => {
    return markerHiro.getAttribute('position');
};
const getKanjiPosition = () => {
    // return kanji.getAttribute('position');
    return markerKanji.position;
}

setTimeout(() => {
    console.log("$$$$$$$$$$$$$$$$$$$$$$");
    const {x, y, z} = getKanjiPosition()
    const worldPosition = new THREE.Vector3(x,y,z);
    // markerNuevo.getWorldPosition(worldPosition); //Correción de la posición
    const {x:a, y:b, z:c} = worldPosition;
    //Setea la posicion con respecto al mundo/padre
    nuevo.position.set(a,b,c);
    //Corrige la posicion con respecto al mundo
    const worldToLocal = new THREE.Matrix4().getInverse(nuevo.matrixWorld)
    nuevo.applyMatrix(worldToLocal);
    // markerNuevo.position.set(x,y,z);
    // console.log("POS",markerNuevo.position);
}, 5000);

setTimeout( () => {
    
}, 10000);
