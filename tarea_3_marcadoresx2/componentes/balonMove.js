
const kanjiMarker = () => document.querySelector('#kanji');
const hiroMarker = () => document.querySelector('#hiro');
const plane = () => document.querySelector("#plane");
const balon = () => document.querySelector("#balon");

const getPlanePosition = () => { return plane().object3D.position; }
const getHiroPosition = () => { return hiroMarker().object3D.position; }
const getKanjiPosition = () => { return kanjiMarker().object3D.position; }

AFRAME.registerComponent("balon_move", {
    schema:{
		totalTime: {type: "number", default: 0.00},
	},
    move: function () {
        const clock = new THREE.Clock();
		let {x,y,z} = getHiroPosition()
		balon().object3D.position.set(x,y,z);

		let moving= setInterval(() => {
			const p = parabolicPath( getHiroPosition(), getKanjiPosition(), (this.data.totalTime/1) % 4 - 1 );
			//CREAR UNA LINEA AL PUNTO P para saber donde anda
			console.log("P:",p)
			console.log("HIRO:",getHiroPosition())
			console.log("KANJI:",getKanjiPosition())
			balon().object3D.position.set({x:p.x, y:p.y,z:p.z});
			this.data.totalTime += clock.getDelta();
		},1000)

		setTimeout(() => {
			clearInterval(moving);
		},5000)
    }
})


// create a function p() that passes through the points (0,p0), (1,p1), (2,p2) 
//  and evaluate that function at time t.
const parabolaEvaluate = (p0, p1, p2, t) => {
	// return (1-t)*(1-t)*p0 + 2*(1-t)*t*p1 + t*t*p2;
	// // const a = ( 0.5*(p0 - 2*p1 + p2) )*t*t + ( -0.5*(3*p0 - 4*p1 + p2) )*t + ( p0 )
	// // console.log(a)
	// // return a
	return (( 0.5*(p0 - 2*p1 + p2) )*t*t + ( -0.5*(3*p0 - 4*p1 + p2) )*t + ( p0 ));
	// return (( 0.5*(p0 - 2*p1 + p2) ) + ( -0.5*(3*p0 - 4*p1 + p2) ) + ( p0 ));
}

const parabolicPath = ( pointStart, pointEnd, time ) => {
	let pointMiddle = new THREE.Vector3().addVectors( pointStart, pointEnd ).multiplyScalar(0.5).add( new THREE.Vector3(0,2,0) );
	return new THREE.Vector3(
		parabolaEvaluate( pointStart.x, pointMiddle.x, pointEnd.x, time ),
		parabolaEvaluate( pointStart.y, pointMiddle.y, pointEnd.y, time ),
		parabolaEvaluate( pointStart.z, pointMiddle.z, pointEnd.z, time )
	);	
}