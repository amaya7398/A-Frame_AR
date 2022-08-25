const random = document.getElementById('randomBoxes');
let boxes = [];
boxes[0] = "<a-box height=0.25 width=0.25 depth=0.25 position='0 0 0'  color='#EFBD5E'></a-box>";
boxes[1] = "<a-box height=0.25 width=0.25 depth=0.25 position='0 0.5 0'  color='#4CC3D9'></a-box>";
boxes[2] = "<a-box height=0.25 width=0.25 depth=0.25 position='0 -0.5 0'  color='#4CC3D9'></a-box>";
boxes[3] = "<a-box height=0.25 width=0.25 depth=0.25 position='0.5 0 0' color='#4CC3D9'></a-box>";
boxes[4] = "<a-box height=0.25 width=0.25 depth=0.25 position='-0.5 0 0' color='#4CC3D9'></a-box>";
boxes[5] = "<a-box height=0.25 width=0.25 depth=0.25 position='0 0 0.5'  color='#4CC3D9'></a-box>";
boxes[6] = "<a-box height=0.25 width=0.25 depth=0.25 position='0 0 -0.5'  color='#4CC3D9'></a-box>";

boxes[9] = "<a-box height=0.25 width=0.25 depth=0.25 position='0 0 4'  color='#4CC3D9'></a-box>";
const nRandomNumbers = 100;

const getRandomNumbers = () => {
    const xPos = (Math.random() * 8) - 4; // [-4, 4]
    const yPos = (Math.random() * 8) - 4; // [-4, 4]
    const zPos = (Math.random() * 8) - 4; // [-4, 4]
    return { xPos, yPos, zPos };
}

const get_a_box = () => {
    const {xPos, yPos, zPos} = getRandomNumbers();
    return `<a-box height=0.25 width=0.25 depth=0.25 position='${xPos} ${yPos} ${zPos}'  color='#4CC3D9'></a-box>`
}

for (let i = 0; i < nRandomNumbers; i++) {
    random.innerHTML += get_a_box();
}

// boxes.forEach(box =>{
//     random.innerHTML += box;
// })

// random.innerHTML += boxes[9]
// console.log(random)
