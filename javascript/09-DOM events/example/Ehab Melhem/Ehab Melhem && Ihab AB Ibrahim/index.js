let form = document.querySelector(".flex");
let name = document.querySelector(".fullname");
let total = document.querySelector(".totla");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var letters = /^[A-Za-z]+$/;

  if (!name.value.match(letters)) {
    alert("PLease Inter for the name only Letters");
  }
});
function write(e) {
  alert(e.value);
  if (e.target.value) {
  }
}
