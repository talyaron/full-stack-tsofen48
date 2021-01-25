let add = document.getElementById("add");
let input = document.getElementById("input");
let root = document.getElementById("root");
let show = document.getElementById("show");

show.addEventListener("click", (e) => {
  var all = [];
  fetch("/get-image")
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
      all = [...data];

      all.map((elm) => {
        console.log("in map");
        let p = document.createElement("p");
        let div = document.createElement("div");
        div.className = "item";
        p.innerText = "Has been voted";
        if (localStorage.getItem(elm.id) !== "vote") {
          p.hidden = true;
        } else {
          p.hidden = false;
        }
        let img = document.createElement("img");
        let CopyImg = document.createElement("img");
        img.src = elm.src;
        CopyImg.src = elm.src;
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
          if (localStorage.getItem(elm.id) !== "vote") {
            span1.className = "fa fa-star";
            span2.className = "fa fa-star";
            span3.className = "fa fa-star";
            span4.className = "fa fa-star";
            span5.className = "fa fa-star";
            span1.className = "fa fa-star checked";
            localStorage.setItem(elm.id, "vote");
            let iD = elm.id;
            let Score = 1;
            fetch("/add-score", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ iD, Score }),
            });
          }
        });
        span2.addEventListener("click", (e) => {
          if (localStorage.getItem(elm.id) !== "vote") {
            span1.className = "fa fa-star";
            span2.className = "fa fa-star";
            span3.className = "fa fa-star";
            span4.className = "fa fa-star";
            span5.className = "fa fa-star";
            span1.className = "fa fa-star checked";
            span2.className = "fa fa-star checked";
            localStorage.setItem(elm.id, "vote");
            let iD = elm.id;
            let Score = 2;
            fetch("/add-score", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ iD, Score }),
            });
          }
        });
        span3.addEventListener("click", (e) => {
          if (localStorage.getItem(elm.id) !== "vote") {
            span1.className = "fa fa-star";
            span2.className = "fa fa-star";
            span3.className = "fa fa-star";
            span4.className = "fa fa-star";
            span5.className = "fa fa-star";
            span1.className = "fa fa-star checked";
            span2.className = "fa fa-star checked";
            span3.className = "fa fa-star checked";

            localStorage.setItem(elm.id, "vote");
            let iD = elm.id;
            let Score = 3;
            fetch("/add-score", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ iD, Score }),
            });
          }
        });
        span4.addEventListener("click", (e) => {
          if (localStorage.getItem(elm.id) !== "vote") {
            span1.className = "fa fa-star";
            span2.className = "fa fa-star";
            span3.className = "fa fa-star";
            span4.className = "fa fa-star";
            span5.className = "fa fa-star";
            span1.className = "fa fa-star checked";
            span2.className = "fa fa-star checked";
            span3.className = "fa fa-star checked";
            span4.className = "fa fa-star checked";

            localStorage.setItem(elm.id, "vote");
            let iD = elm.id;
            let Score = 4;
            fetch("/add-score", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ iD, Score }),
            });
          }
        });
        span5.addEventListener("click", (e) => {
          if (localStorage.getItem(elm.id) !== "vote") {
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

            localStorage.setItem(elm.id, "vote");
            let iD = elm.id;
            let Score = 5;
            fetch("/add-score", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ iD, Score }),
            });
          }
        });

        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(span1);
        div.appendChild(span2);
        div.appendChild(span3);
        div.appendChild(span4);
        div.appendChild(span5);
        div.id = elm.id + "";
        root.appendChild(div);
      });
    });
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
  fetch("/sort")
    .then((e) => e.json())
    .then((data) => {
      var all = [];
      fetch("/get-image")
        .then((r) => r.json())
        .then((data) => {
          console.log(data);
          all = [...data];

          all.map((elm) => {
            console.log("in map");
            let p = document.createElement("p");
            let div = document.createElement("div");
            div.className = "item";
            p.innerText = "Has been voted";
            if (localStorage.getItem(elm.id) !== "vote") {
              p.hidden = true;
            } else {
              p.hidden = false;
            }
            let img = document.createElement("img");
            let CopyImg = document.createElement("img");
            img.src = elm.src;
            CopyImg.src = elm.src;
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
              if (localStorage.getItem(elm.id) !== "vote") {
                span1.className = "fa fa-star";
                span2.className = "fa fa-star";
                span3.className = "fa fa-star";
                span4.className = "fa fa-star";
                span5.className = "fa fa-star";
                span1.className = "fa fa-star checked";
                localStorage.setItem(elm.id, "vote");
                let iD = elm.id;
                let Score = 1;
                fetch("/add-score", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ iD, Score }),
                });
              }
            });
            span2.addEventListener("click", (e) => {
              if (localStorage.getItem(elm.id) !== "vote") {
                span1.className = "fa fa-star";
                span2.className = "fa fa-star";
                span3.className = "fa fa-star";
                span4.className = "fa fa-star";
                span5.className = "fa fa-star";
                span1.className = "fa fa-star checked";
                span2.className = "fa fa-star checked";
                localStorage.setItem(elm.id, "vote");
                let iD = elm.id;
                let Score = 2;
                fetch("/add-score", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ iD, Score }),
                });
              }
            });
            span3.addEventListener("click", (e) => {
              if (localStorage.getItem(elm.id) !== "vote") {
                span1.className = "fa fa-star";
                span2.className = "fa fa-star";
                span3.className = "fa fa-star";
                span4.className = "fa fa-star";
                span5.className = "fa fa-star";
                span1.className = "fa fa-star checked";
                span2.className = "fa fa-star checked";
                span3.className = "fa fa-star checked";

                localStorage.setItem(elm.id, "vote");
                let iD = elm.id;
                let Score = 3;
                fetch("/add-score", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ iD, Score }),
                });
              }
            });
            span4.addEventListener("click", (e) => {
              if (localStorage.getItem(elm.id) !== "vote") {
                span1.className = "fa fa-star";
                span2.className = "fa fa-star";
                span3.className = "fa fa-star";
                span4.className = "fa fa-star";
                span5.className = "fa fa-star";
                span1.className = "fa fa-star checked";
                span2.className = "fa fa-star checked";
                span3.className = "fa fa-star checked";
                span4.className = "fa fa-star checked";

                localStorage.setItem(elm.id, "vote");
                let iD = elm.id;
                let Score = 4;
                fetch("/add-score", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ iD, Score }),
                });
              }
            });
            span5.addEventListener("click", (e) => {
              if (localStorage.getItem(elm.id) !== "vote") {
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

                localStorage.setItem(elm.id, "vote");
                let iD = elm.id;
                let Score = 5;
                fetch("/add-score", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ iD, Score }),
                });
              }
            });

            div.appendChild(img);
            div.appendChild(p);
            div.appendChild(span1);
            div.appendChild(span2);
            div.appendChild(span3);
            div.appendChild(span4);
            div.appendChild(span5);
            div.id = elm.id + "";
            root.appendChild(div);
          });
        });
    });
});
