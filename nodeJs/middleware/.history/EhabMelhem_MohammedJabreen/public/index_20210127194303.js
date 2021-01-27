let form = document.getElementById("form");
let input = document.getElementById("input");
let getuser = document.getElementById("getuser");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`/login?name=${input.value}`)
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
    });
});

// fetch("/get-users")
//   .then((r) => r.json())
//   .then((data) => {
//     console.log(data);
//   });
