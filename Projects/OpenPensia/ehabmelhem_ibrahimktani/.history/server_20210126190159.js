const express = require("express");
const app = express();

const user = {
  company: "בנק הפועלים",
  src:
    "https://instagram.fsdv3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/125438654_373110843960499_4486130208098717291_n.jpg?_nc_ht=instagram.fsdv3-1.fna.fbcdn.net&_nc_ohc=NDUGeHQAneQAX8vOHAM&tp=1&oh=8500725c449de8a495c329240d76c4c5&oe=602E028F",
  name: "איהאב מלחם",
};
const port = process.env.PORT || 3002;

app.get("/stam", (req, res) => {
  res.send({ messege: "hi from server" });
});

app.get("/get-user",(req,res)=>{
    res.send(user)
})
app.listen(port, function () {
  console.log("localhsot", port);
});
