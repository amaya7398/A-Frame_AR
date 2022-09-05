AFRAME.registerComponent("random_move", {
    init: function () {
    },
    entityFound: function () {
        console.log(getHiroPosition());
        // const { x, y, z } = getHiroPosition();
        // balon.setAttribute("position", { x, y, z });
    }




})
