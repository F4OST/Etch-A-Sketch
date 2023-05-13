x = 130;
let color = "black";
const container = document.querySelector("#container");
function createGrid(x) {
  for (let i = 0; i < x; i++) {
    const y = document.createElement("div");
    y.classList.add("grid");
    y.style.width = `${container.clientWidth / x}px`;
    y.style.height = `${container.clientHeight / x}px`;
    y.style.position = "relative;";

    for (let j = 0; j < x; j++) {
      const v = document.createElement("div");
      v.classList.add("grid");
      y.appendChild(v);
      /// Set the width and height of the grids  based on the container size and number of cells
      v.style.width = `${container.clientWidth / x}px`;
      v.style.height = `${container.clientHeight / x}px`;
      /// Add a start class to the center  of the grids
      if (i === Math.floor(x / 2) && j === Math.floor(x / 2)) {
        v.classList.add("start");
      }
    }

    container.appendChild(y);
  }
}
createGrid(x);
//get the current X and Y
let currentX = Math.floor(x / 2);
let currentY = Math.floor(x / 2);
// Handle keyboard input to Move in X and Y
function handleKeys(e) {
  if (e.key === "w" || e.key === "ArrowUp") {
    currentX = Math.max(0, currentX - 1);
  } else if (e.key === "a" || e.key === "ArrowLeft") {
    currentY = Math.max(0, currentY - 1);
  } else if (e.key === "s" || e.key === "ArrowDown") {
    currentX = Math.min(x - 1, currentX + 1);
  } else if (e.key === "d" || e.key === "ArrowRight") {
    currentY = Math.min(x - 1, currentY + 1);
  }
  /// Set the background color of the current cell
  const cell = document.querySelectorAll(".grid .grid");
  cell[currentY * x + currentX].style.backgroundColor = color;
}
//Add an event To Prevent Default keyboard input
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    e.preventDefault();
  }
  handleKeys(e);
});

document.addEventListener("keydown", handleKeys);

const colorInput = document.querySelector("#colorInput");
colorInput.type = "color";
colorInput.value = color;
colorInput.addEventListener("input", () => {
  color = colorInput.value;
});
// Add  event  for color input changes
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  const grids = document.querySelectorAll(".grid .grid");
  grids.forEach((v) => {
    v.style.backgroundColor = "#CCC8C3";
  });
});
// add event for clear button
clearButton.addEventListener("click", (e) => {
  e.target.style.background = "green";
  e.target.style.color = "white";
  setTimeout(() => {
    e.target.style.background = "";
    e.target.style.color = "";
  }, 1500);
});

/*  let key = document.querySelector('.start');
    document.addEventListener('keydown', (e) => {
      if (e.key === 'd') {
        const nextSibling = key.nextElementSibling;
        if (nextSibling) {
          
          key = nextSibling;
          key.style.backgroundColor = 'lightblue';
        }
      } else if (e.key === 'a') {
        const prevSibling = key.previousElementSibling;
        if (prevSibling) {
          
          key = prevSibling;
          key.style.backgroundColor = 'lightblue';
        }
      }
    });

*/
