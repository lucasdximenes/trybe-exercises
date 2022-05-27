// Requirement 1
const memeText = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');
function getTextInput() {
  const textInputValue = textInput.value;
  memeText.innerText = textInputValue;
}
textInput.addEventListener('keyup', getTextInput);

// Requirement 2
const imageInput = document.getElementById('meme-insert');
function imageInputPreview(event) {
  const imageDinamicURL = document.getElementById('meme-image');
  imageDinamicURL.src = URL.createObjectURL(event.target.files[0]);
  imageDinamicURL.onload = () => {
    URL.revokeObjectURL(imageDinamicURL.src);
  };
}
imageInput.addEventListener('change', imageInputPreview);

// Requirement 6
const changeBorderFire = document.getElementById('fire');
const changeBorderWater = document.getElementById('water');
const changeBorderEarth = document.getElementById('earth');
const memeContainer = document.getElementById('meme-image-container');

changeBorderFire.addEventListener('click', () => {
  memeContainer.style.border = '3px dashed rgb(255, 0, 0)';
});
changeBorderWater.addEventListener('click', () => {
  memeContainer.style.border = '5px double rgb(0, 0, 255)';
});
changeBorderEarth.addEventListener('click', () => {
  memeContainer.style.border = '6px groove rgb(0, 128, 0)';
});

window.onload = () => {
  imageInput.value = '';
  textInput.value = '';
};

// Requirement 7
function changeImageByDefault(event) {
  const clickedImage = event.target.src;
  const imageOutput = document.getElementById('meme-image');
  imageOutput.src = clickedImage;
}

function defaultMemeImages() {
  for (let i = 1; i <= 4; i += 1) {
    // prettier-ignore
    const defaultImagesContainer = document.getElementById(
      'default-meme-images',
    );
    const image = document.createElement('img');
    image.src = `./imgs/meme${i}.png`;
    image.id = `meme-${i}`;
    image.classList.add('default-meme-image');
    image.addEventListener('click', changeImageByDefault);
    defaultImagesContainer.appendChild(image);
  }
}
defaultMemeImages();
