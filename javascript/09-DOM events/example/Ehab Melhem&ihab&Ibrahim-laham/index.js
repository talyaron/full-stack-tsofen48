let button = document.getElementById("button");
let input = document.getElementById("input");
function check() {
  if (input.value === "") button.disabled = true;
  else button.disabled = false;
}
button.addEventListener("click", () => {
  alert(input.value);
});
setInterval(check, 1);
