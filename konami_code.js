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


function init() {
  let i = 0;
  
  const input = document.querySelector('body');

  input.addEventListener('keydown', (check) => {
    const key = check.key;

    if (key === codes[i]) {
      i++;
  
      if (i === codes.length) {
        alert('Easter egg');
  
        i = 0;
      }
    } else {
      i = 0;
    }
  })
};