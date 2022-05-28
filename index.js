const container = document.querySelector(".container");
const divContainer = document.createElement("div");
divContainer.classList.add("div-container");
container.appendChild(divContainer);
let size = document.querySelector(".div-container").clientWidth;

// value can be passed through text
function createDivs(value = 16) {
  divContainer.replaceChildren();
  for (let i = 0; i < value; i++) {
    const divRows = document.createElement("div");
    divRows.classList.add("row");

    for (let j = 0; j < value; j++) {
      const div = document.createElement("div");
      div.classList.add("sketch");
      const divSize = Math.floor(size / value);
      div.style.width = `${divSize}px`;
      div.style.height = `${divSize}px`;

      div.addEventListener("mouseover", () => {
        randomColor(div);
      });
      divRows.appendChild(div);
    }
    divContainer.appendChild(divRows);
  }
}

function randomColor(div) {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  div.style.backgroundColor = `rgb(${r},${g},${b})`;
}

const slider = document.querySelector(".slider");
const sizeText = document.querySelector("p");

slider.addEventListener("change", () => {
  createDivs(slider.value);
  sizeText.textContent = `${slider.value} * ${slider.value}`;
});

createDivs(slider.value);
container.appendChild(divContainer);
