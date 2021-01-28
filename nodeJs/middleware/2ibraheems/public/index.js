

function handlelogin(e){
let input = document.querySelector("btnLogin");
    fetch('/get-role')
    .then(r=>r.json())
    .then(data=>{
        console.log(data)
    })
}

function handlelogin(e) {
    let input = document.querySelector("btnLogin");
    input = input.value;
    fetch('/get-role', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ input })
    })
        .then(r => r.json())
        .then(data => {
            console.log(data);
        });
}

function handlegetUsers(){
    fetch('/get-users')
    .then(r=>r.json())
    .then(data=>{
        console.log(data)
    })
}





