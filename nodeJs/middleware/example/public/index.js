

fetch('/get-users')
.then(r=>r.json())
.then(data=>{
    console.log(data)
})


