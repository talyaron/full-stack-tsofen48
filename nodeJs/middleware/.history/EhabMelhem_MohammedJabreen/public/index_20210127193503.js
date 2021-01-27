let form = document.getElementById("form");
let input = document.getElementById("input");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`/login?name="${input.value}"`).then(r=>r.json);
});

// fetch("/get-users")
//   .then((r) => r.json())
//   .then((data) => {
//     console.log(data);
//   });
