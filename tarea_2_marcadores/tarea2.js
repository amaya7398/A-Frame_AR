let sceneEl = document.querySelector('a-scene');
let marker = document.querySelector('a-marker');

AFRAME.registerComponent("marker-dos", {

    schema: {
        // position:{type: "number", default: 0},
        form:{type: "number", default: 5, position: {x:1, y:2, z:3}},
    },
    init: function () {
        // Do something when component first attached.
        //"el" es el componente a crear this.el
        this.el.object3D.position.set(3, 3, 3);
        this.el.object3D.position.x += 1;
        console.log("dosINIT ####################");
        // console.log("dos",this.el)
        console.log("dosObject3D",this.el.object3D)
        console.log("dosObject3D.Position",this.el.object3D.position)
        // console.log("dos",this.el.sceneEl)
        // console.log("dos",this.el.market)
    },
    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
        // console.log("tickDos")
        // console.log("dos",this.el.market)
        // console.log("In2-POs",this.el.getAttribute("position").x)
    }
});

AFRAME.registerComponent("marker-handler", {

    schema: {
        // position:{type: "number", default: 0},
        form:{type: "number", default: 0}
    },
    init: function () {
        // Do something when component first attached.
        console.log("handlerINIT ####################")
        // console.log("handler",this.el)
        console.log("handler",this.el.object3D)
        console.log("handlerPosition",this.el.object3D.position)
        // console.log("handler",this.el.sceneEl)
        // console.log("handler",this.el.marker)
    },
    update: function () {
    // Do something when component's data is updated.
        // console.log("UPDATE COMPONENT")
    },
    remove: function () {
        // Do something the component or its entity is detached.
        // console.log("REMOVE COMPONENT")
    },
    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
        // console.log("tickHandler")
        // console.log("dos",this.el.market)
        // console.log("In-POs",this.el.getAttribute("position").x)
    }
})