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

function init () {
  // your code here
  let ind = 0
  document.addEventListener('keydown', (event) => {
    const key = event.key
    // ind = (codes[ind] === key) ? ++ind : 0
    if (codes[ind] === key) {
      ++ind
    } else {
      ind = 0
    }
    if (ind === codes.length) {
      window.alert('Easter egg!')
      ind = 0
    }
  })
}
