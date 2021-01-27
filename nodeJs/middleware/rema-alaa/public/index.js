
function login() {
    let userName = document.querySelector(".user-name");
   userName =  !!userName && userName.value;
   
   fetch('/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }, body: JSON.stringify({userName})
}).then(r => r.json())
    .then(data => {
        console.log(data)
        return data;
    })
}

// function getUsers() {
    
// }





// fetch('/get-users')
// .then(r=>r.json())
// .then(data=>{
//     console.log(data)
// })
