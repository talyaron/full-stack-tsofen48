let add = document.getElementById("add");
let input = document.getElementById("input");
let root = document.getElementById("root");
let show = document.getElementById("show");
const all = [];
show.addEventListener("click", (e) => {

});
add.addEventListener("click", (e) => {
  e.preventDefault();
  
    let src = img.src;
    all.push({ img: CopyImg, id: "1" });
    fetch("/add-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ src }),
    });

    // root.appendChild(div);
  }
});
document.getElementById("btn").addEventListener("click", (e) => {
  all.map((elm) => {
    return document.getElementsByTagName("body")[0].appendChild(elm.img);
  });
});
