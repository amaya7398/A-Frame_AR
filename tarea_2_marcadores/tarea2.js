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
            this.el.getObject3D("mesh").material = new THREE.MeshStandardMaterial({ color: "#FF0000" });
        })
    },
    events : {
        click : function(e){
            cambiarPosicion();
        }
    }
});

AFRAME.registerComponent("a-coche", {

    schema: {
        width : {type: "number", default: 0.2},
        height : {type: "number", default: 0.2},
        depth : {type: "number", default: 0.2},
        color : {type: "color", default: "#4CC3D9"},
        status: {type: "boolean", default: false}
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
        console.log("cambio?")
        // this.mesh.geometry.parameters.width = 0 // console.log(this.mesh.geometry.parameters)
    },
    events : {
        click : function(){
            this.data.status = true;
        }
    },
    tick: function (time, timeDelta) {
        // Do something on every scene tick or frame.
        const {data} = this
        if(data.status){
            data.width +=0.001;
            data.height +=0.001;
            data.depth +=0.001;

            if (!collided()) {
                this.el.getObject3D("mesh").geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
            } else {
                this.el.emit("collided", {collidingEntity: meta})
                data.status = false
                showCollisionMessage();
            }
        }
        if (data.status && this.el.getAttribute("position") == {x:0, y:0, z:0}) {
            data.status = false
        }
    }
});

const collided = () => {
    let x,y,z;
    ({x,y,z} = getHiroPosition());
    const {x:x1, y:y1, z:z1} = convertToFixedNumber(x,y,z);
    ({x,y,z} = getKanjiPosition());
    const {x:x2, y:y2, z:z2} = convertToFixedNumber(x,y,z);
    console.log(x1, y1, z1,"<=>" ,x2, y2, z2)
    return x1 == x2 || y1 == y2 || z1 == z2
};

const convertToFixedNumber = (X,Y,Z) =>{
    const x = parseFloat(X.toFixed(3));
    const y = parseFloat(Y.toFixed(3));
    const z = parseFloat(Z.toFixed(3));
    return { x, y, z}
}
const showCollisionMessage = () => {
    console.log( "colisionan en: ", getHiroPosition(), "<=>", getKanjiPosition())
}
