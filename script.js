const DEFAULT_MODE = 'color';
const DEFAULT_COLOR = '#333333';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

// functions for setting all selections

function setCurrentMode(newMode){
    activateButton(newMode)
    currentMode = newMode;
}
function setCurrentColor(newColor){
    currentColor = newColor;
}
function setCurrentSize(newSize){
    currentSize = newSize;
}
function updateSizeValue(value){
    sizeValue.textContent = `${value}x${value}`;
}
function changeSize(value){
    updateSizeValue(value);
    setCurrentSize(value);
    reloadGrid();
}

const color = document.getElementById('color');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const grid = document.getElementById('slate');
const rangeSlider = document.getElementById('sliderRange');
const sizeValue = document.getElementById('sizeValue');



function reloadGrid(){
    clearGrid();
    makeGrid(currentSize);
}

function clearGrid(){
    grid.innerHTML = '';
}

function makeGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    for(let i = 0; i<size*size; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.addEventListener('mousedown', changeColor);
        grid.appendChild(gridElement);
    }
}

function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return
    if(currentMode === 'rainbow'){
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if(currentMode === 'color'){
        e.target.style.backgroundColor = currentColor
    } else if(currentMode === 'eraser'){
        e.target.style.backgroundColor === '#fefefe'
    }
}

function activateButton(newMode){
    if(currentMode === 'rainbow'){
        rainbow.classList.remove('active')
    } else if(currentMode === 'color'){
        color.classList.remove('active')
    } else if(currentMode === 'eraser'){
        eraser.classList.remove('active')
    }

    if(newMode === 'rainbow'){
        rainbow.classList.add('active')
    } else if(newMode === 'color'){
        color.classList.add('active')
    } else if(newMode === 'eraser'){
        eraser.classList.add('active')
    }
}

function defaultGrid(){
    makeGrid(16);
}


// UI or the main workings like main in cpp

color.onclick = () => setCurrentMode('color');
rainbow.onclick = () => setCurrentMode('rainbow');
eraser.onclick = () => setCurrentMode('eraser');
clear.onclick = () => reloadGrid();
rangeSlider.onchange = (e) => changeSize(e.target.value);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

