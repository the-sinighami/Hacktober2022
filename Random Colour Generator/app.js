const containerElement = document.querySelector(".container");

for(let index=0; index<24; index++) {
  const colourContainerElement = document.createElement("div");
  colourContainerElement.classList.add("color-container");
  containerElement.appendChild(colourContainerElement);
}

const colourContainerElements = document.querySelectorAll(".color-container");
generateColour();

function generateColour() {
  colourContainerElements.forEach((colourContainerElement) => {
    const newColour = randomColour();
    colourContainerElement.style.backgroundColor = "#" + newColour;
    colourContainerElement.innerText = "#" + newColour;
  });
}

function randomColour() {
  const chars = "0123456789ABCDEF";
  const colourCodeLength = 6;
  let colour = "";

  for(let index=0; index<colourCodeLength; index++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    colour += chars.substring(randomNumber, randomNumber + 1);
  }
  return colour;
}
