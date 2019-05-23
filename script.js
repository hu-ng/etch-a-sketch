let size = 30;
const container = document.querySelector('div.container');

function getGridTemplate (size) {
  let result = '1fr';
  for (let i = 0; i < (size-1); i++) {
    result = result + ' 1fr';
  }
  result = result + ' / ' + result;
  return result;
}

// create the div and add the grid
function createGrid(size) {

  // Delete all the existing divs first before adding new ones.
  let existingDivs = document.querySelectorAll('div.cell');
  if (existingDivs) {
    existingDivs.forEach(function(div) {
      container.removeChild(div);
    })
  }
  container.style.cssText = `grid-template: ${getGridTemplate(size)}`;
  for (i = 0; i < size*size; i++) {
    let div = document.createElement('div');
    div.style.cssText = 'border: 1px solid black';
    div.classList.add('cell');
    container.appendChild(div);
  }
}

createGrid(size);
addColorBasic();

// Add changing color effect on the divs
function addColorBasic() {
  let divs = document.querySelectorAll('div.cell');
  divs.forEach(function(cell) {
    cell.addEventListener('mouseenter', function(e){
      this.classList.add('pink-bg')
    })
  });
}

let r, g, b;
function addColorRandom() {
  let divs = document.querySelectorAll('div.cell');
  divs.forEach(function(cell) {
    cell.addEventListener('mouseenter', function(e){
      r = Math.floor(Math.random()*256)
      g = Math.floor(Math.random()*256)
      b = Math.floor(Math.random()*256)
      this.style.backgroundColor = `rgb(${r},${g},${b})`
    })
  });
}


const resetBtn = document.querySelector('button[name="reset"]');
resetBtn.addEventListener('click', function(e) {
  size = parseInt(prompt('Enter a number for your grid'));
  createGrid(size);
  addColorRandom();
})
