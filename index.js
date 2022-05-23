const container = document.querySelector(".container");
const divContainer = document.createElement("div");
divContainer.classList.add("div-container");

// value can be passed through text
function createDivs(value = 64) {
  for (let i = 0; i < value; i++) {
    const divRows = document.createElement("div");
    divRows.classList.add("row");
    for (let j = 0; j < value; j++) {
      const div = document.createElement("div");
      div.classList.add("sketch");
      divRows.appendChild(div);
    }
    divContainer.appendChild(divRows);
  }
}
createDivs();
container.appendChild(divContainer);
