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
let userKeys = []
function init() {
  let matches = 0
  document.querySelector('body').addEventListener('keydown', function(event) {
    const userKey = event.key
    if (codes[matches] === userKey) {
      matches+= 1
    } else {
      matches = 0
    }
    if (matches === codes.length){
      alert("Yo")
      matches = 0
    }
  })
}

// let matches = 0
// document.querySelector('body').addEventListener('keydown', function(event) {
//   const userKey = event.key
//   if (codes[matches] === userKey) {
//     matches+= 1
//   } else {
//     matches = 0
//   }
//   if (matches === codes.length){
//     alert("Yo")
//     matches = 0
//   }
// })
