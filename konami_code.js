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

let index = 0

function init() {
  // your code here
  document.body.addEventListener("keydown", (d) => {
       const key = d.key;
    if (key === codes[index]){
      index++;

      if (index === codes.length){
        window.alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  } ) 
}
