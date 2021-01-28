function sendDataToServer(e) {
  e.preventDefault();

  const src = e.target.elements.src.value;
  if(src !== null && src !== ""){

    fetch("/Get-SrcPhoto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ src }),
    });
    document.getElementById("alert").innerHTML = `
    <div class="alertVoted">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
      <strong>Added !</strong> Thank you for using our website !
    </div>`
  }
  else{
    document.getElementById("alert").innerHTML = `
    <div class="alert">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
      <strong>Please Fill The Text Box</strong>
    </div>`
  }
}

async function getPhotos() {
  const r = await fetch("/Send-Photos");
  const data = await r.json();
  let allphotos = "";
  await data.map((e, index) => {
    if (localStorage.getItem(index) === null) 
    localStorage.setItem(index, 0);

    if (localStorage.getItem(`voted${index}`) !== "true") {
      localStorage.setItem(`voted${index}`, "false");
    }

    allphotos += `
    <div id=${index} >
    <img class ="photosRate" id=${index} style="width: 250px; height:250px;  "  src=${e.src}/>  
    <div id="rateBar">
      <img id="rateStar1_${index}" onclick="sendRate(${index},1)" style="width: 40px; height:40px; cursor: pointer; border-radius: 22px;" src="https://i.ibb.co/0mPY3yv/500-F-198051091-ep-WKz8i-FMUxc-YDc-BBc-NGWd-UBks-El3-LCY-removebg-preview.png">
      <img id="rateStar2_${index}" onclick="sendRate(${index},2)" style="width: 40px; height:40px; cursor: pointer; border-radius: 22px;" src="https://i.ibb.co/0mPY3yv/500-F-198051091-ep-WKz8i-FMUxc-YDc-BBc-NGWd-UBks-El3-LCY-removebg-preview.png">
      <img id="rateStar3_${index}" onclick="sendRate(${index},3)" style="width: 40px; height:40px; cursor: pointer; border-radius: 22px;" src="https://i.ibb.co/0mPY3yv/500-F-198051091-ep-WKz8i-FMUxc-YDc-BBc-NGWd-UBks-El3-LCY-removebg-preview.png">
      <img id="rateStar4_${index}" onclick="sendRate(${index},4)" style="width: 40px; height:40px; cursor: pointer; border-radius: 22px;" src="https://i.ibb.co/0mPY3yv/500-F-198051091-ep-WKz8i-FMUxc-YDc-BBc-NGWd-UBks-El3-LCY-removebg-preview.png">
      <img id="rateStar5_${index}" onclick="sendRate(${index},5)" style="width: 40px; height:40px; cursor: pointer; border-radius: 22px;" src="https://i.ibb.co/0mPY3yv/500-F-198051091-ep-WKz8i-FMUxc-YDc-BBc-NGWd-UBks-El3-LCY-removebg-preview.png">  
    </div>
  <div>`;
  });
  example = document.querySelector("#allPhotosToShow");
  example.innerHTML = allphotos;
}

function sendRate(index, howMuchPoint) {
  if (localStorage.getItem(`voted${index}`) === "false") {
    localStorage.setItem(`voted${index}`, "true");
    let X = parseInt(localStorage.getItem(index));

    let total = X + howMuchPoint;
    localStorage.setItem(index, total);
    for (let i = 1; i <= howMuchPoint; i++) {
      let R = `rateStar${i}_${index}`;
      document.getElementById(R).src = "https://i.ibb.co/vPdkCdz/500-F-198051091-ep-WKz8i-FMUxc-YDc-BBc-NGWd-UBks-El3-LCY-Copy-removebg-preview.png";
      document.getElementById("alert").innerHTML = `
      <div class="alertAdded">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
        <strong>Voted !</strong> Thank you for voted !
      </div>`
    }

    const id = index;
    const Points = howMuchPoint;
    fetch("/setPoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, Points }),
    });
  } else {
    document.getElementById("alert").innerHTML = `
    <div class="alert">
      <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
      <strong>Cant ReVote !</strong> you already voted before allow one time only !
    </div>`
  }
}
async function GetPhotosPoints() {
  const r = await fetch("/Send-Photos");
  const ArrOfPhotos = await r.json();

  const s = await fetch("/SendPoint");
  const ArrOfPointsById = await s.json();

  let text="";

  let Temparr = ArrOfPointsById.sort((a, b) => parseFloat(b.Points) - parseFloat(a.Points));

  Temparr.map((e) => {
text+= `<div class="eachDivCardWithScore" ><h1> Points : ${e.Points}</h1> <img id="photoinCard" src="${ArrOfPhotos[e.id].src}"/></div> <br/><br/>___________________________`
   
  });
let tempText =   document.querySelector("#allPhotosWithPoints");
tempText.innerHTML = text;
}


