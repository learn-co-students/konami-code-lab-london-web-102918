const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init() {
  const input = document.querySelector('body');

input.addEventListener('keydown', testKonamiCode);
}

function testKonamiCode(e) {
  // your code here
    const key = e.key;

    if (key === codes[index]) {
      index++;

      if (index === codes.length) {
        alert('Easter egg.');

        index = 0;
      }
    } else {
      index = 0;
    }
}
