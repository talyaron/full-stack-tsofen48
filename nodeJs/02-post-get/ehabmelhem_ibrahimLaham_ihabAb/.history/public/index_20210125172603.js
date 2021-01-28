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
    span1.id = "span1";
    span2.id = "span2";
    span3.id = "span3";
    span4.id = "span4";
    span5.id = "span5";
    span2.className = "fa fa-star";
    span3.className = "fa fa-star";
    span4.className = "fa fa-star";
    span5.className = "fa fa-star";

    span1.addEventListener("click", cheanclore(1));
    span2.addEventListener("click", cheanclore(2));
    span3.addEventListener("click", cheanclore(3));
    span4.addEventListener("click", cheanclore(4));
    span5.addEventListener("click", cheanclore(5));

    function cheanclore(index) {
      for (let i = 0; i < 5; i++) {
        document.getElementById("span" + i).className = "fa fa-star";
      }
      for (let i = 0; i < index; i++) {}
    }
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
