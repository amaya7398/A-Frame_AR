let sceneEl2 = document.querySelector('#a-scene');
let markerCoche = document.querySelector('#coche');
let markerMeta = document.querySelector('#meta');

AFRAME.registerComponent("a-meta", {

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
    update: function (oldData) {
        this.el.sceneEl.addEventListener("collided", (e) => {
            console.log("colisión con", e.detail.collidingEntity)
        })
    },
    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
        // console.log("tickHandler")
        // console.log("dos",this.el.market)
        // console.log("In-POs",this.el.getAttribute("position").x)
    }
});

AFRAME.registerComponent("a-coche", {

    schema: {
        width : {type: "number", default: 0.5},
        height : {type: "number", default: 0.5},
        depth : {type: "number", default: 0.5},
        color : {type: "color", default: "#4CC3D9"},
    },
    init: function () {
        // this.el.object3D.position.set(3, 3, 3); // this.el.object3D.position.z += 1;
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
        // if (Object.keys(oldData).length === 0) { return }

        // this.mesh.geometry.parameters.width = 0 // console.log(this.mesh.geometry.parameters)
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
        } else {
            // this.el.emit("collided", {collidingEntity: meta}, false)
            // this.el.emit("collided", {collidingEntity: sceneEl2})
            // this.el.emit("collided", {collidingEntity: meta})
        }
    },
    events : {
        click : function(e){
            console.log("click")
        }
    }
});

AFRAME.registerComponent("a-clicker", {
    schema: {
        width : {type: "number", default: 0.5},
        height : {type: "number", default: 0.5},
        depth : {type: "number", default: 0.5},
        color : {type: "color", default: "#E2C31A"},
    },
    init: function () {
        const {data} = this
        this.geometry = new THREE.BoxGeometry(data.width, data.height, data.depth);
        this.material = new THREE.MeshStandardMaterial({ color: data.color });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.el.setObject3D("mesh", this.mesh);
    },
    events : {
        click : function(e){
            console.log("click")
        }
    }
})
