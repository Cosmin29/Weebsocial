
let rotation = 0;
function rotateImg() {
  rotation += 90;
  if (rotation === 360) { 
    rotation = 0;
  }
  document.querySelector("#img").style.transform = `rotate(${rotation}deg)`;
}