let add = document.getElementById("add");
let input = document.getElementById("input");
let root = document.getElementById("root");
add.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value !== "") {
    let div = document.createElement("div");
    div.className = "item";
    let img = document.createElement("img");
    img.src = input.value;
    img.width = "200";
    let span1 = document.createElement("span");
    let span2 = document.createElement("span");
    let span3 = document.createElement("span");
    let span4 = document.createElement("span");
    let span5 = document.createElement("span");
    span1.className = "fa fa-star";
    span1.id = "1";
    span2.className = "fa fa-star";
    span1.id = "1";
   
    span3.className = "fa fa-star";
    span4.className = "fa fa-star";
    span5.className = "fa fa-star";
    div.appendChild(img);
    div.appendChild(span1);
    div.appendChild(span2);
    div.appendChild(span3);
    div.appendChild(span4);
    div.appendChild(span5);

    console.log(div);

    root.appendChild(div);
  }
});
