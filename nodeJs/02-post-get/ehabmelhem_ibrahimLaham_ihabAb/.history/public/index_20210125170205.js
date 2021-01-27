let add = document.getElementById("add");
let input = document.getElementById("input");
let root = document.getElementById("root");
add.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value !== "") {
    let img = document.createElement("img");
    img.src = input.value;
    img.width = "200";
    root.ape
  }
});
