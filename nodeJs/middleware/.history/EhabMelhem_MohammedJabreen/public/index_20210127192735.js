let form = document.getElementById("form");
form.addEventListener("")

fetch("/get-users")
  .then((r) => r.json())
  .then((data) => {
    console.log(data);
  });
