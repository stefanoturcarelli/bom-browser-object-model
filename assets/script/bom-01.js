'use strict';

const result = document.querySelector('.url');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
  let url = window.location.href;
  result.innerText = url;
});

function getUrl() {
  let url = window.location.href;
  result.innerText = url;
}

// ! getUrl is a Fallback function (function passed as an argument
// ! without parenthesis)
// button.addEventListener('click', getUrl);

// However, we usually write it like this:
button.addEventListener('click', function () {
  getUrl();
});
