'use strict';

const url = document.querySelector('.url');
const assign = document.getElementById('assign');
const replace = document.getElementById('replace');

url.value = 'https://';

assign.addEventListener('click', () => {
  let input = url.value.trim();
  if (input.length > 15) {
    window.location.assign(input);
  }
});

replace.addEventListener('click', () => {
  let input = url.value.trim();
  if (input.length > 15) {
    window.location.replace(input);
  }
});
