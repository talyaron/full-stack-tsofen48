let form = document.getElementById("form");
let  = document.getElementById("input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`/login?name=${}`)
});

// fetch("/get-users")
//   .then((r) => r.json())
//   .then((data) => {
//     console.log(data);
//   });

