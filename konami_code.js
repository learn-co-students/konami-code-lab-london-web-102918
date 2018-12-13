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

  // To keep track of the index outside of the event handler 
  let index = 0;

  //function to invoke an event listener on a keydown
  document.querySelector('body').addEventListener('keydown', function(e){
    const key = e.key;
  
    if (key === codes[index]){
      index++

      if (index === codes.length) {
        alert('Hello');

        index = 0;
      }
    } else {
      index = 0;
    }
  
  })
}
