let form = document.getElementById("form");
form.addEventListener("submit",()=>{
    
})

fetch("/get-users")
  .then((r) => r.json())
  .then((data) => {
    console.log(data);
  });
