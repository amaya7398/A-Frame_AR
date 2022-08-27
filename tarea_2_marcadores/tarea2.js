let sceneEl = document.querySelector('a-scene');
let marker = document.querySelector('a-marker');

AFRAME.registerComponent("marker-handler", {

    schema: {
        width : {type: "number", default: 0.5},
        height : {type: "number", default: 0.5},
        depth : {type: "number", default: 0.5},
        color : {type: "color", default: "#ACBD5E"},
    },
    init: function () {
        console.log("MARKER-HANDLER ####################")
        // console.log("handler", this.el.object3D)
        // console.log("handlerPosition", this.el.object3D.position)

        const {data} = this
        // Create geometry
        this.geometry = new THREE.BoxGeometry(data.width, data.height, data.depth);
        // Create material
        this.material = new THREE.MeshStandardMaterial({ color: data.color });
        //create mesh
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        
        //Set mesh on entity
        this.el.setObject3D("mesh", this.mesh);
    },
    update : function (oldData) {
        console.log("Handler event listener",this.el)
    },
    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
        // console.log("tickHandler")
        // console.log("dos",this.el.market)
        // console.log("In-POs",this.el.getAttribute("position").x)
    }
});

AFRAME.registerComponent("marker-grown", {

    schema: {
        width : {type: "number", default: 0.5},
        height : {type: "number", default: 0.5},
        depth : {type: "number", default: 0.5},
        color : {type: "color", default: "#4CC3D9"},
    },
    init: function () {
        console.log("MARKER-GROWN ####################");
        // this.el.object3D.position.set(3, 3, 3);
        // this.el.object3D.position.z += 1;

        const {data} = this
        // Create geometry
        this.geometry = new THREE.BoxGeometry(data.width, data.height, data.depth);
        // Create material
        this.material = new THREE.MeshStandardMaterial({ color: data.color });
        //create mesh
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        
        //Set mesh on entity
        this.el.setObject3D("mesh", this.mesh);
    },
    update: function(oldData){
        const data = this.data
        //Update also activate in "init", so we dont want UPDATE if it happens
        // console.log(data)
        // console.log(oldData)

        // if (Object.keys(oldData).length === 0) { return }
        // console.log(this.mesh.geometry.parameters)
        // this.mesh.geometry.parameters.width = 0
        // console.log(this.mesh.geometry.parameters)
    },
    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
        const {data} = this
        if(this.data.width < 5){
            data.width = data.width+0.1;
            data.height = data.height+0.1;
            data.depth = data.depth+0.1;
            // this.el.getObject3D("mesh").geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
            // this.data = {...data, width: data.width+0.01, height :data.height+0.01, depth : data.depth+0.01}
        }
    }
});