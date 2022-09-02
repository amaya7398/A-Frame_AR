// import this on your HTML
window.addEventListener('load', () => {
  const camera = document.querySelector('[camera]');
  const kanjiMarker = document.querySelector('#kanji');
  const hiroMarker = document.querySelector('#hiro');
  const plane = document.querySelector("#plane");

  let check;
  document.querySelector("#a")
    .addEventListener("click", function () {
      if (!check) { createSpace() }
    });
  document.querySelector("#b")
    .addEventListener("click", () => {
      quitarCheck();
    })

  // kanjiMarker.addEventListener('markerFound', () => {
  const createSpace = () => {
    check = setInterval(() => {
      resizeSpace();
    }, 500);
  };

  const resizeSpace = () => {
    resizePlane();
    moveMidPointBetween2Markers();
  }

  const resizePlane = () => {
    plane.setAttribute("geometry", { width: getWidth(), height: getHeight() });
  }
  const getHeight = () => { return kanjiMarker.object3D.position.y - hiroMarker.object3D.position.y; }
  const getWidth = () => { return kanjiMarker.object3D.position.x - hiroMarker.object3D.position.x; }

  const moveMidPointBetween2Markers = () => {
    plane.setAttribute("position", calculateMidPoint());
  }
  const calculateMidPoint = () => {
    const { x: x1, y: y1, z: z1 } = hiroMarker.object3D.position;
    const { x: x2, y: y2, z: z2 } = kanjiMarker.object3D.position;

    return { x: (x1 + x2) / 2, y: (y1 + y2) / 2, z: (z1 + z2) / 2 }
  }

  //markerLost
  const quitarCheck = () => {
    clearInterval(check);
  }
})