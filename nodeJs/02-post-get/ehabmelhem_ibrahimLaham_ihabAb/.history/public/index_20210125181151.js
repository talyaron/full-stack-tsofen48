let add = document.getElementById("add");
let input = document.getElementById("input");
let root = document.getElementById("root");
let show = document.getElementById("show");

show.addEventListener("click", (e) => {
  const all=
    fetch("/get-image")
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
    });


  let div = document.createElement("div");
  div.className = "item";
  let img = document.createElement("img");
  let CopyImg = document.createElement("img");
  img.src = input.value;
  CopyImg.src = input.value;
  img.width = "200";
  CopyImg.width = "200";
  let span1 = document.createElement("span");
  let span2 = document.createElement("span");
  let span3 = document.createElement("span");
  let span4 = document.createElement("span");
  let span5 = document.createElement("span");
  span1.className = "fa fa-star";
  span1.id = "span1";
  span2.id = "span2";
  span3.id = "span3";
  span4.id = "span4";
  span5.id = "span5";
  span2.className = "fa fa-star";
  span3.className = "fa fa-star";
  span4.className = "fa fa-star";
  span5.className = "fa fa-star";

  span1.addEventListener("click", (e) => {
    span1.className = "fa fa-star";
    span2.className = "fa fa-star";
    span3.className = "fa fa-star";
    span4.className = "fa fa-star";
    span5.className = "fa fa-star";
    span1.className = "fa fa-star checked";
  });
  span2.addEventListener("click", (e) => {
    span1.className = "fa fa-star";
    span2.className = "fa fa-star";
    span3.className = "fa fa-star";
    span4.className = "fa fa-star";
    span5.className = "fa fa-star";
    span1.className = "fa fa-star checked";
    span2.className = "fa fa-star checked";
  });
  span3.addEventListener("click", (e) => {
    span1.className = "fa fa-star";
    span2.className = "fa fa-star";
    span3.className = "fa fa-star";
    span4.className = "fa fa-star";
    span5.className = "fa fa-star";
    span1.className = "fa fa-star checked";
    span2.className = "fa fa-star checked";
    span3.className = "fa fa-star checked";
  });
  span4.addEventListener("click", (e) => {
    span1.className = "fa fa-star";
    span2.className = "fa fa-star";
    span3.className = "fa fa-star";
    span4.className = "fa fa-star";
    span5.className = "fa fa-star";
    span1.className = "fa fa-star checked";
    span2.className = "fa fa-star checked";
    span3.className = "fa fa-star checked";
    span4.className = "fa fa-star checked";
  });
  span5.addEventListener("click", (e) => {
    span1.className = "fa fa-star";
    span2.className = "fa fa-star";
    span3.className = "fa fa-star";
    span4.className = "fa fa-star";
    span5.className = "fa fa-star";
    span1.className = "fa fa-star checked";
    span2.className = "fa fa-star checked";
    span3.className = "fa fa-star checked";
    span4.className = "fa fa-star checked";
    span5.className = "fa fa-star checked";
  });

  div.appendChild(img);
  div.appendChild(span1);
  div.appendChild(span2);
  div.appendChild(span3);
  div.appendChild(span4);
  div.appendChild(span5);
  root.appendChild(div);
});
add.addEventListener("click", (e) => {
  e.preventDefault();

  let src = input.value;
  //   all.push({ img: CopyImg, id: "1" });
  fetch("/add-image", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ src }),
  });
});
document.getElementById("btn").addEventListener("click", (e) => {
  all.map((elm) => {
    return document.getElementsByTagName("body")[0].appendChild(elm.img);
  });
});
