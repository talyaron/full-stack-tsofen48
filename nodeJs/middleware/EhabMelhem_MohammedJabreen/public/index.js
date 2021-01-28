let form = document.getElementById("form");
let input = document.getElementById("input");
let getuser = document.getElementById("getuser");
let div = document.getElementById("container");
getuser.addEventListener("click", () => {
  fetch("/get-users")
    .then((r) => r.json())
    .then((data) => {
      div.innerHTML = "";
      if (data.index === 1) {
        data.users.map((elm) => {
          let h1 = document.createElement("h1");
          h1.innerText = elm.name;
          div.appendChild(h1);
        });
      } else {
        let h1 = document.createElement("h1");
        h1.innerText = data.messege;
        div.appendChild(h1);
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
