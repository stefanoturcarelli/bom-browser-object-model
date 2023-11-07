'use strict';

const copy = document.getElementById('copy');
const btn = document.getElementById('button');

btn.addEventListener('click', () => {
  let input = copy.value.trim();
  if (input.length > 0) {
    copy.select();
    navigator.clipboard.writeText(input);
  }
});
