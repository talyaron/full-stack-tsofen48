let form = document.getElementById("form");
form.addEventListener("submit",(e)=>{

})

fetch("/get-users")
  .then((r) => r.json())
  .then((data) => {
    console.log(data);
  });
