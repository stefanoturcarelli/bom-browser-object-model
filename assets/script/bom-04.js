'use strict';

const pageWidth = document.getElementById('page-width');
const pageHeight = document.getElementById('page-height');

function setWindowDimensions() {
  pageWidth.innerText = `Window width: ${window.innerWidth}px`;
  pageHeight.innerText = `Window height: ${window.innerHeight}px`;
}

// Use the load event
window.addEventListener('load', () => {
  setWindowDimensions();
});

// Use the resize event
window.addEventListener('resize', () => {
  setWindowDimensions();
});

// Use the mousemove event
const cursorX = document.getElementById('cursor-x');
const cursorY = document.getElementById('cursor-y');

window.addEventListener('mousemove', (event) => {
  let x = event.clientX;
  let y = event.clientY;

  cursorX.innerText = `Cursor X: ${x}`;
  cursorY.innerText = `Cursor Y: ${y}`;
});

// Make the circle follow the cursor
const circle = document.getElementById('circle');

document.addEventListener('mousemove', (event) => {
  const x = event.clientX - circle.clientWidth / 2;
  const y = event.clientY - circle.clientHeight / 2;
  circle.style.left = x + 'px';
  circle.style.top = y + 'px';
});

