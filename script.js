const container = document.querySelector(".container");
let useRandomColors = false;

let i = 0;

while (i < 16) {
  const origRowDiv = document.createElement("div");
  origRowDiv.className = "row";
  let j = 0;
  while (j < 16) {
    const origColDiv = document.createElement("div");
    origColDiv.textContent = "|";
    origColDiv.className = "column";
    origRowDiv.appendChild(origColDiv);
    j++;
  }

  container.appendChild(origRowDiv);
  i++;
}

function attachEventListeners(desiredColor) {
  const rows = document.querySelectorAll(".row");

  rows.forEach((row) => {
    row.addEventListener("mouseover", (event) => {
      if (event.altKey) {
        if (useRandomColors) {
          const randomRed = Math.floor(Math.random() * 255);
          const randomGreen = Math.floor(Math.random() * 255);
          const randomBlue = Math.floor(Math.random() * 255);
          event.target.style.backgroundColor =
            "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
        } else if (desiredColor) {
          event.target.style.backgroundColor = desiredColor;
        } else {
          event.target.style.backgroundColor = "#A9A9A9";
        }
      }

      if (event.ctrlKey) {
        event.target.style.backgroundColor = "";
      }
    });
  });
}

attachEventListeners();

const button = document.querySelector(".changeButton");

button.addEventListener("click", changeGrid);

function changeGrid() {
  const gridVar = prompt(
    "Choose new dimension value for grid.\neg. The current grid is 16 x16. Entering the number 18 would make and 18x18 grid."
  );

  if (gridVar > 100) {
    alert("Value cannot be greater than 100");
  }

  if (gridVar && !(gridVar > 100)) {
    const origRowDivs = document.querySelectorAll(".row");
    const origColDivs = document.querySelectorAll(".column");
    origRowDivs.forEach((origRowDiv) => {
      origRowDiv.remove();
    });
    origColDivs.forEach((origColDiv) => {
      origColDiv.remove();
    });
    let i = 0;
    while (i < gridVar) {
      const newRowDiv = document.createElement("div");
      newRowDiv.className = "row";
      let j = 0;
      while (j < gridVar) {
        const newColDiv = document.createElement("div");
        newColDiv.textContent = "|";
        newColDiv.className = "column";
        newRowDiv.appendChild(newColDiv);
        j++;
      }

      container.appendChild(newRowDiv);
      i++;
    }
  }
  attachEventListeners();
}

const colorButton = document.querySelector(".changeColor");

colorButton.addEventListener("click", changeColor);

function changeColor() {
  const desiredColor = prompt(
    "Enter the new color you want squares to change to: "
  );

  attachEventListeners(desiredColor);
}

const randomColorButton = document.querySelector(".random");


randomColorButton.addEventListener("click", () => {
  useRandomColors = true;
  alert("Random colors are now turned on!");
})
