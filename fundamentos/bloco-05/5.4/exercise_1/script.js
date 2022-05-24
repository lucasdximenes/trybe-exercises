const backgroundColor = document.getElementById("background-color");
const textColor = document.getElementById("text-color");
const fontSize = document.getElementById("font-size");
const lineHeight = document.getElementById("line-height");
const fontFamily = document.getElementById("fonts");
const contentP = document.getElementById("content");

function initializeStorage() {
  let defaultBackgroundColor = localStorage.getItem("backgroundColor");
  let defaultTextColor = localStorage.getItem("textColor");
  let defaultFontSize = localStorage.getItem("fontSize");
  let defaultLineHeight = localStorage.getItem("lineHeight");
  let defaultFontFamily = localStorage.getItem("fontFamily");

  contentP.style.backgroundColor = defaultBackgroundColor;
  contentP.style.color = defaultTextColor;
  contentP.style.fontSize = defaultFontSize;
  contentP.style.lineHeight = defaultLineHeight;
  contentP.style.fontFamily = defaultFontFamily;
}
initializeStorage();

backgroundColor.addEventListener("change", changeBackgroundColor);
function changeBackgroundColor() {
  let backgroundColorValue = backgroundColor.value;
  localStorage.setItem("backgroundColor", backgroundColorValue);
  contentP.style.backgroundColor = backgroundColorValue;
}

textColor.addEventListener("change", changeTextColor);
function changeTextColor() {
  let textColorValue = textColor.value;
  localStorage.setItem("textColor", textColorValue);
  contentP.style.color = textColorValue;
}

fontSize.addEventListener("change", changeFontSize);
function changeFontSize() {
  let fontSizeValue = fontSize.value + "px";
  localStorage.setItem("fontSize", fontSizeValue);
  contentP.style.fontSize = fontSizeValue;
}

lineHeight.addEventListener("change", changeLineHeight);
function changeLineHeight() {
  let lineHeightValue = lineHeight.value + "px";
  localStorage.setItem("lineHeight", lineHeightValue);
  contentP.style.lineHeight = lineHeightValue;
}

fontFamily.addEventListener("change", changeFontFamily);
function changeFontFamily() {
  let fontFamilyValue = fontFamily.value;
  localStorage.setItem("fontFamily", fontFamilyValue);
  contentP.style.fontFamily = fontFamilyValue;
}
