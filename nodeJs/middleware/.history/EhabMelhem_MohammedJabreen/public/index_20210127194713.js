let form = document.getElementById("form");
let input = document.getElementById("input");
let getuser = document.getElementById("getuser");
let div = document.getElementById("container");
getuser.addEventListener("click", () => {
  fetch("/get-user")
    .then((r) => r.json())
    .then((data) => {
      if (data.index === 1) {
        div.innerHTML = "";
        data.users.map(elm=>{
            let h1
        })
      } else {
      }
    });
});
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
