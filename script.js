const DEFAULT_MODE = 'color';
const DEFAULT_COLOR = '#333333';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

// functions for setting all selections

function setCurrentMode(newMode){
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
const slate = document.getElementById('slate');
const rangeSlider = document.getElementById('sliderRange');
const sizeValue = document.getElementById('sizeValue');

let gridSide = rangeSlider.value;
let selection = '';
let rows = document.getElementsByClassName('gridRow');
let cols = document.getElementsByClassName('col');

function relodeGrid(){
    clearGrid();
    makeGrid(currentSize);
}

function clearGrid(){
    slate.innerHTML = '';
}

function makeGrid(num){
    for(let r = 0; r<num; r++){
        let row = document.createElement('div');
        slate.appendChile('row').className = 'gridRow';
    }

    for(let r = 0; r<num; r++){
        for(let c = 0; c<num; c++){
            let newCol = createElement('div');
            rows[c].appendChild('newCol').className = 'col';
        }
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

