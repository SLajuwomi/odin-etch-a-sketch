const container = document.querySelector(".container");

let i = 0;

while (i < 16) {
  const newRowDiv = document.createElement("div");
  newRowDiv.className = "row";
  let j = 0;
  while (j < 16) {
    const newColumnDiv = document.createElement("div");
    newColumnDiv.textContent = "Column";
    newColumnDiv.className = "column";
    newRowDiv.appendChild(newColumnDiv);
    j++;
  }

  container.appendChild(newRowDiv);
  i++;
}

const column = document.querySelector(".column");
const rows = document.querySelectorAll(".row");

// column.addEventListener("mouseover", (event) => {
//   event.target.style.backgroundColor = "pink";
// });

rows.forEach((row) => {
  row.addEventListener("mouseover", (event) => {
    if (event.altKey) {
      event.target.style.backgroundColor = "#A9A9A9";
    }

    if (event.ctrlKey) {
      event.target.style.backgroundColor = ""
    }
  });
});


