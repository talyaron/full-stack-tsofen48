function login(e) {
    e.preventDefault();
    console.log('hi');
    let username = e.target.name.value;
    fetch('/login', {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify({username})})
}

function requestUsers(e) {
    e.preventDefault();
    console.log('hey');
}