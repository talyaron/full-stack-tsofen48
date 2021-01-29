let form = document.getElementById("form");

fetch("/get-users")
  .then((r) => r.json())
  .then((data) => {
    console.log(data);
  });
