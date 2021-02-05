
/*
function getEmails(e){
    console.log('get emails')
    fetch('/get-emails')
    .then(r=>r.json())
    .then(data=>{
        console.log('data' + data)
        changeText(data)
    })
    console.log('after fetch')
}

async function getEmails(){
const r = await fetch('/get-emails');
const data = await r.json();
console.log(data);
changeText(data);
}

 function addEmailToList(e){
     e.preventDefault();
console.log(e.target.elements)
       email = e.target.elements.email.value;

   fetch('/add-email',{
       method:'POST',
       headers:{
        'Content-Type': 'application/json'
       },body:JSON.stringify({email})
   })
}











function submitData(e){
e.preventDefault();

let { user, password } = e.target.elements;

user = user.value;
password = password.value;
const req = fetch('/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }, body: JSON.stringify({ user, password })
});
const data = req.json();
console.log(data);


}


function changeText(listOfEmails){
    const root = document.querySelector('#root')
    let html = '';
    listOfEmails.forEach(Eachemail=>{
        html += `<p>Name: ${Eachemail.email}</p>`
    }) 

    root.innerHTML = html
}
*/
