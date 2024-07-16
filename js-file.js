const sketchPad = document.querySelector('#sketchPad');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#sliderValue');

function grabSliderValue(event) {
    sliderValue.textContent = (event.target.value*16+16);
    createSketchPad();
}

function changeSketchColor(node){
    node.target.style.backgroundColor="black";
    node.target.removeEventListener("mouseenter",changeSketchColor);
    node.target.removeEventListener("mousedown",changeSketchColor);
}

slider.addEventListener('input', grabSliderValue);

function createSketchPad() {
    sketchPad.innerHTML = '';
    limit = parseInt(sliderValue.textContent);
    for (let i=0; i < limit; i++) {
        const row =document.createElement('div');
        row.classList.add('rows');
        row.setAttribute('id', `row${i}`);
        sketchPad.appendChild(row);

        for (let j=0; j < limit; j++){
            const cell = document.createElement('div');
            cell.classList.add('cells');
            cell.setAttribute('id', `cell${j}`);
            cell.addEventListener("mouseenter",changeSketchColor);
            cell.addEventListener("mousedown",changeSketchColor);
            row.appendChild(cell);
        }
    }
}

sliderValue.textContent = 16;
createSketchPad();