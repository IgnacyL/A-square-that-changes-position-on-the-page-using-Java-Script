const div = document.querySelector("div");
let divX = 150;
let divY = 50;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;
let active = false;
let insertDivX;
let insertDivY;

div.addEventListener("mousedown", (e) => {
  div.style.backgroundColor = "grey";
  active = true;
  insertDivX = e.offsetX;
  insertDivY = e.offsetY;
  console.log(insertDivX, insertDivY);
});
div.addEventListener("mousemove", (e) => {
  if (active) {
    divX = e.clientX - insertDivX;
    divY = e.clientY - insertDivY;
    div.style.left = `${divX}px`;
    div.style.top = `${divY}px`;
  }
});

div.addEventListener("mouseup", (e) => {
  div.style.backgroundColor = "black";
  active = false;
});
