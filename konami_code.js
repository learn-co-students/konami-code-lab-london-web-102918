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
  let idx = 0

  document.body.addEventListener("keydown", (e) => {
    const key = e.key

    idx = (codes[idx] === key) ? ++idx : 0


    if (idx === codes.length) {
      window.alert("Hurray!");
      idx = 0
    }

  });
}

// function init() {
//   // your code here
//   let index = 0

//   function onKeyDownHandler(e) {
//     const key = e.key
//     debugger
//     if (key === codes[index]) {
//       index++;
//       if (index === codes.length) {
//         alert("Hurray!");

//         index = 0
//       }
//     } else {
//       index = 0
//     }
//   }
// }