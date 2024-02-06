let grid = document.querySelector(".grid-container");
let gridStyles = window.getComputedStyle(grid);
let gridWidth = gridStyles.getPropertyValue('width');
let gridHeight = gridStyles.getPropertyValue('height');
let ask = prompt("Number of boxes per row:");
let num_box = parseInt(ask);
let blackCheck = document.querySelector('#color1');
let rgbCheck = document.querySelector("#color2");
let incrementCheck = document.querySelector("#color3");
let resetButton = document.querySelector("#reset")
function range(start=0,stop=0) {
    let arr = [];
    for (start; start<stop; start++) {
        arr.push(start)
    }
    return arr
}

let boxes = []
for (const num of range(1,17)) {
    boxes.push("box" + num)
};

function createBox(numberBoxes) {
    let red = 288;
    let blue = 288;
    let green = 288; 
    let box = document.createElement('div');
    box.style.backgroundColor = 'rgb(' + red + "," + green +"," + blue + ")";
    box.style.width = "" + (parseInt(gridWidth) / numberBoxes) + "px";
    box.style.height= "" + (parseInt(gridHeight) / numberBoxes) + "px";
    grid.appendChild(box);
    blackCheck.addEventListener('click', () => {
        box.addEventListener('mouseover', () => {
             box.style.backgroundColor = 'black'
            })});
    rgbCheck.addEventListener('click', () => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")"
        })
    })
    incrementCheck.addEventListener('click', () => {
        red = 288;
        blue = 288;
        green = 288;
        box.addEventListener('mouseover', () => {
            red -= 32;
            blue -= 32;
            green -= 32;
            box.style.backgroundColor = 'rgb(' + red + "," + blue + "," + green + ')'
        })
    })
    resetButton.addEventListener('click', () => {
        box.style.backgroundColor = 'rgb(288,288,288)'
     })
    
}

for (const num of range(1,((num_box**2)+1))) {
    createBox(ask);
}


