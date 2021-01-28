

fetch('/get-users')
.then(r=>r.json())
.then(data=>{
    console.log(data)
})

function isLoggedIn(){
    return true;
}
function handleLogin(){
    let inputValue=document.getElementById('inputName') 


}

fetch("/check-login", {
    method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: JSON.stringify('testttt'),
  });

