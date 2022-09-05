// import this on your HTML
window.addEventListener('load', () => {
  const camera = document.querySelector('[camera]');
  const kanjiMarker = document.querySelector('#kanji');
  const hiroMarker = document.querySelector('#hiro');
  const plane = document.querySelector("#plane");
  const lineX = document.querySelector("#lineX");
  const lineY = document.querySelector("#lineY");
  const balon = document.querySelector("[balon_move]");

  const getHeight = () => { return kanjiMarker.object3D.position.y - hiroMarker.object3D.position.y; }
  const getWidth = () => { return kanjiMarker.object3D.position.x - hiroMarker.object3D.position.x; }
  const getHiroPosition = () => { return hiroMarker.object3D.position; }
  const getKanjiPosition = () => { return kanjiMarker.object3D.position; }
  const getPlanePosition = () => { return plane.object3D.position; }

  let check;
  document.querySelector("#a").addEventListener("click", function () {
    const {x,y,z} = getHiroPosition()
    document.querySelector("#balon").object3D.position.set(x,y,z);
    if (!check) { createSpace() }
  });
  document.querySelector("#b").addEventListener("click", () => {
    quitarCheck();
  })
  document.querySelector("#c").addEventListener("click", () => {
    passDone();
  });

  // kanjiMarker.addEventListener('markerFound', () => {
  const createSpace = () => {
    check = setInterval(() => {
      resizeSpace();
    }, 500);
  };

  const resizeSpace = () => {
    resizePlane();
    moveMidPointBetween2Markers(plane);
    createBorders();
    getPendiente();
    // printUbicaciones();
    writeCoordsMarkers();
  }

  const resizePlane = () => {
    plane.setAttribute("geometry", { width: getWidth(), height: getHeight() });
  }

  const moveMidPointBetween2Markers = (obj) => {
    obj.setAttribute("position", calculateMidPoint());
  }
  const calculateMidPoint = () => {
    const { x: x1, y: y1, z: z1 } = getHiroPosition();
    const { x: x2, y: y2, z: z2 } = getKanjiPosition();
    //Punto medio entre 2 puntos
    return { x: (x1 + x2) / 2, y: (y1 + y2) / 2, z: (z1 + z2) / 2 }
  }

  const createBorders = () => {
    lineX.setAttribute("line", {
      start: { x: 0, y: 0, z: 0 }, //Centro del marcador HIRO
      end: { x: getWidth(), y: 0, z: 0 },    //Centro del marcador KANJI (nueva posición calculada)
      color: "#FF0000"
    });
    lineY.setAttribute("line", {
      start: { x: getWidth(), y: 0, z: 0 },
      end: { x: getWidth(), y: 0, z: -getHeight() },
      color: "#FF0000"
    });
  }

  const getPendiente = () => {
    const { y: y1, z: z1 } = hiroMarker.object3D.position;
    const { y: y2, z: z2 } = kanjiMarker.object3D.position;
    const m = (y2 - y1) / (z2 - z1); // tan-1 o arcTan
    const grado = Math.atan(m) * 180 / Math.PI;
    // plane.object3D.rotation.x = grado;
  }

  const writeCoordsMarkers = () => {
    let x, y, z;
    ({ x, y, z } = getHiroPosition());
    document.querySelector("#hiroLabel").value = `x: ${x}, y: ${y}, z: ${z}`;
    ({ x, y, z } = getKanjiPosition());
    document.querySelector("#kanjiLabel").value = `x: ${x}, y: ${y}, z: ${z}`;
    ({ x, y, z } = getPlanePosition());
    document.querySelector("#planeLabel").value = `x: ${x}, y: ${y}, z: ${z}, width: ${getWidth()}, height: ${getHeight()}`;

    ///////////////////////////////
    moveMidPointBetween2Markers( document.querySelector("#boxToMove") );

    // ({ x, y, z } = getHiroPosition());
    // document.querySelector("#balon").object3D.position.set(x, y, z)
    
  }
  
  const passDone = () => {
    
    // document.querySelector("#balon").setAttribute("position", moveMidPointBetween2Markers(document.querySelector("#balon")));
    balon.components.balon_move.move();
    // document.querySelector("[random_move]").components.random_move.entityFound();
  }
  //markerLost
  const quitarCheck = () => {
    clearInterval(check);
  }

  //FUNCIONES DEBUG
  //print
  const printUbicaciones = () => {
    console.log("HIRO:", getHiroPosition());
    console.log("KANJI:", getKanjiPosition());
    console.log("MIDPOINT:", getPlanePosition());
  };
})