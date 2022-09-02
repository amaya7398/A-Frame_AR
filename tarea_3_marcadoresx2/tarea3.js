// import this on your HTML
window.addEventListener('load', () => {
  const camera = document.querySelector('[camera]');
  const kanjiMarker = document.querySelector('#kanji');
  const hiroMarker = document.querySelector('#hiro');
  const planet = document.querySelector("#planet");

  let check;

  document.querySelector("#a")
    .addEventListener("click", function () {
      takeDistance()
    });
  document.querySelector("#b")
    .addEventListener("click", () => {
      quitarCheck();
    })

  // kanjiMarker.addEventListener('markerFound', () => {
  const takeDistance = () => {
    check = setInterval(() => {
      resizeCircle()

      // do what you want with the distance:
    }, 500);
  };

  const resizeCircle = () => {
      const markerHiroPosition = hiroMarker.object3D.position;
      const markerKanjiPosition = kanjiMarker.object3D.position;
      const distance = markerHiroPosition.distanceTo(markerKanjiPosition)

    // planet.setAttribute("geometry", { radius: distance / 2 });
    moveMidPointBetween2Markers();
  }

  const moveMidPointBetween2Markers = (markerHiroPosition, mar) => {
    planet.setAttribute("position", calculateMidPoint());
  }

  const calculateMidPoint = () => {
    const {x:x1,y:y1,z:z1} = hiroMarker.object3D.position;
    const {x:x2, y:y2, z:z2} = kanjiMarker.object3D.position;

    return {x:(x1+x2)/2, y:(y1+y2)/2, z:(z1+z2)/2}
  }

  //markerLost
  const quitarCheck = () => {
    clearInterval(check);
  }
})