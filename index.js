const container = document.querySelector(".container");
const divContainer = document.createElement("div");
divContainer.classList.add("div-container");
container.appendChild(divContainer);
let size = document.querySelector(".div-container").clientWidth;

// value can be passed through text
function createDivs(value = 16) {
  for (let i = 0; i < value; i++) {
    const divRows = document.createElement("div");
    divRows.classList.add("row");

    for (let j = 0; j < value; j++) {
      const div = document.createElement("div");
      div.classList.add("sketch");
      const divSize = size / value;
      div.style.width = `${divSize}px`;
      div.style.height = `${divSize}px`;
      div.addEventListener("mouseover", (e) =>
        e.target.classList.add("my-color-class")
      );
      divRows.appendChild(div);
    }
    divContainer.appendChild(divRows);
  }
}
createDivs();
container.appendChild(divContainer);
