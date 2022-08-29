// import this on your HTML
window.addEventListener('load', () => {
    const camera = document.querySelector('[camera]');
    const marker = document.querySelector('a-marker');
    let check;

    document.querySelector(".say-hi-button")
    .addEventListener("click", function () {
      alert("Hi there!");
    });
    document.querySelector(".say-bye-button")
    .addEventListener("click", ()=>{
        alert("Bye there");
    })



    marker.addEventListener('markerFound', () => {
        let cameraPosition = camera.object3D.position;
        let markerPosition = marker.object3D.position;
        let distance = cameraPosition.distanceTo(markerPosition)

        check = setInterval(() => {
            cameraPosition = camera.object3D.position;
            markerPosition = marker.object3D.position;
            distance = cameraPosition.distanceTo(markerPosition)

            // do what you want with the distance:
            console.log(distance, " <=>", marker);
        }, 100);
    });

    marker.addEventListener('markerLost', () => {
      clearInterval(check);
    })
})