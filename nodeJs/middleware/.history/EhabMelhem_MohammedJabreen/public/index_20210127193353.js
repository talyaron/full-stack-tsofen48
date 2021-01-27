let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("/login?")
});

// fetch("/get-users")
//   .then((r) => r.json())
//   .then((data) => {
//     console.log(data);
//   });

