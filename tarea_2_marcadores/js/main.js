const random = document.getElementById('randomBoxes');
let boxes = [];
boxes[0] = "<a-box height=0.25 width=0.25 depth=0.25 position='0 0 0'  color='#EFBD5E'></a-box>";
boxes[1] = "<a-box height=0.25 width=0.25 depth=0.25 position='0 0.5 0'  color='#4CC3D9'></a-box>";
boxes[2] = "<a-box height=0.25 width=0.25 depth=0.25 position='0 -0.5 0'  color='#4CC3D9'></a-box>";
boxes[3] = "<a-box height=0.25 width=0.25 depth=0.25 position='0.5 0 0' color='#4CC3D9'></a-box>";
boxes[4] = "<a-box height=0.25 width=0.25 depth=0.25 position='-0.5 0 0' color='#4CC3D9'></a-box>";
boxes[5] = "<a-box height=0.25 width=0.25 depth=0.25 position='0 0 0.5'  color='#4CC3D9'></a-box>";
boxes[6] = "<a-box height=0.25 width=0.25 depth=0.25 position='0 0 -0.5'  color='#4CC3D9'></a-box>";

// boxes.forEach(box =>{
//     random.innerHTML += box;
// })
random.innerHTML = boxes[0] + boxes[1] + boxes[2] + boxes[3] + boxes[4] + boxes[5] + boxes[6];
console.log(random)
