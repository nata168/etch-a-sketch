const container = document.querySelector("#container");
let pixelInput;
let pixelSize;
let pixelCount;

function setPixel() {
  pixelInput = Number(prompt("Squares per side (?x?): "));

  if (!pixelInput) {
    alert("Please enter only with number beside zero.");
    pixelInput = Number(prompt("Squares per side (?x?): "));
  }

  if (pixelInput > 50) {
    alert("Max value for squares per side is 50. The dimension automatically set to 50x50.");
    pixelInput = 50;
  }

  pixelSize = 480/pixelInput;
  pixelCount = pixelInput ** 2;
}


function createPixel() {
  for (let i = 1; i <= pixelCount; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.setAttribute("style", `width: ${pixelSize}px; height: ${pixelSize};`);
    container.appendChild(pixel);
  
    pixel.addEventListener("mouseover", function() {
      pixel.style.backgroundColor = "blue";
    })
  } 
}

btn = document.querySelector("#set-btn");
btn.addEventListener("click", function() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  setPixel();
  createPixel();
});

setPixel();
createPixel();







