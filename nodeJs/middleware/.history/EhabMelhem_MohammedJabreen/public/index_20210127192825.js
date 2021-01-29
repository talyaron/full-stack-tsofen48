let form = document.getElementById("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault()

})

fetch("/get-users")
  .then((r) => r.json())
  .then((data) => {
    console.log(data);
  });
