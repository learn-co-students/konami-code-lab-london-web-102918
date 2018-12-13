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
  let count = 0;
  document.body.addEventListener('keydown', (event) => {
    if (event.key === codes[count]) {
      count++;
      if (count === codes.length) {
        alert("GIT SOME");
        count = 0
      };
    } else {
      count = 0;
    }
  });
};
