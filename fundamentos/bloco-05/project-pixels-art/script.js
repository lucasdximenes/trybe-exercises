// Requirement 8
function colorizePixel(event) {
  const pixelTarget = event.target;
  const selectedColor = document.querySelector('.color.selected');
  const colorOfSelected = window
    .getComputedStyle(selectedColor)
    .getPropertyValue('background-color');
  pixelTarget.style.backgroundColor = colorOfSelected;
}

// Requirement 4
function createPixelBoard(size) {
  const pixelBoard = document.getElementById('pixel-board');
  let boardSize = size;
  if (boardSize === undefined || boardSize < 5) {
    boardSize = 5;
  }

  for (let i = 0; i < boardSize; i += 1) {
    const row = document.createElement('div');
    row.classList.add('row');
    pixelBoard.appendChild(row);
    for (let j = 0; j < boardSize; j += 1) {
      const pixelCell = document.createElement('div');
      pixelCell.classList.add('pixel');
      pixelCell.style.display = 'inline-block';
      pixelCell.addEventListener('click', colorizePixel);
      row.appendChild(pixelCell);
    }
  }
}
createPixelBoard();

// Requirement 7
function selectColor() {
  const colorPalette = document.getElementById('color-palette');
  const color = document.querySelectorAll('.color');
  colorPalette.addEventListener('click', (event) => {
    for (let i = 0; i < color.length; i += 1) {
      color[i].classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}
selectColor();

// Requirement 9
function reset() {
  const resetButton = document.getElementById('clear-board');
  const pixels = document.getElementsByClassName('pixel');
  resetButton.addEventListener('click', () => {
    for (let i = 0; i < pixels.length; i += 1) {
      const element = pixels[i];
      element.style.backgroundColor = '#ffffff';
    }
  });
}
reset();

// Requirement 10 - 11
function removeDefaultBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = pixels.length - 1; i >= 0; i -= 1) {
    const element = pixels[i];
    element.remove();
  }
}

function changeBoardSize() {
  const boardSizeButton = document.getElementById('generate-board');
  const boardSizeInput = document.getElementById('board-size');
  boardSizeButton.addEventListener('click', () => {
    const size = boardSizeInput.value;
    if (size >= 5 && size <= 50) {
      removeDefaultBoard();
      createPixelBoard(size);
    } else if (size > 50) {
      removeDefaultBoard();
      createPixelBoard(50);
    } else if (size === '') {
      alert('Board inválido!');
    } else {
      removeDefaultBoard();
      createPixelBoard();
    }
    boardSizeInput.value = '';
  });
}
changeBoardSize();

// Requirement 12
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changePaletteColors() {
  const secondPaletteColor = document.querySelector('.color:nth-child(2)');
  const thirdPaletteColor = document.querySelector('.color:nth-child(3)');
  const fourthPaletteColor = document.querySelector('.color:nth-child(4)');

  secondPaletteColor.style.backgroundColor = getRandomColor();
  thirdPaletteColor.style.backgroundColor = getRandomColor();
  fourthPaletteColor.style.backgroundColor = getRandomColor();
}
changePaletteColors();

function newRandomColors() {
  const buttonNewRandomColors = document.getElementById('new-random-colors');
  buttonNewRandomColors.addEventListener('click', () => {
    changePaletteColors();
  });
}
newRandomColors();
