const express = require("express");
const app = express();

app.use(express.static("public"));
var bodyParser = require("body-parser");

app.use(bodyParser.json());

const PhotosArr = [];
const allpointsById = [];
/////////////////////////////////////////
//src photos
app.post("/Get-SrcPhoto", (req, res) => {
  const photoSrctemp = req.body;
  if (photoSrctemp != "") {
    PhotosArr.push(photoSrctemp);
  }
  console.log(PhotosArr);
});

app.get("/Send-Photos", (req, res) => {
  res.send(PhotosArr);
});

///////////////////////////////////////////
//POINTS

app.post("/setPoint", (req, res) => {
  const  {id,Points}  = req.body;
  console.log(id,Points)
  if (allpointsById.findIndex((eachPhoto) => eachPhoto.id === id) === -1)
    allpointsById.push({ id: id, Points: Points });
  else {
      let X = allpointsById.findIndex((eachPhoto) => eachPhoto.id === id);
      allpointsById[X].Points = allpointsById[X].Points + Points 
  }

  console.log(allpointsById);
});

app.get("/SendPoint", (req, res) => {
  res.send(allpointsById);
});


const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("listening", port);
});



/*
const listOfEmails=[
    {email:'6@gmail.com'},
    {email:'1@gmail.com'},
    {email:'2@gmail.com'},
    {email:'3@gmail.com'},
    {email:'4@gmail.com'},
    {email:'5@gmail.com'},
]

const LoginUsers =[
    {user:"tal" , password:"tal123"}
]

app.get('/get-emails',(req, res)=>{
    res.send(listOfEmails)
  })


  app.post('/add-email',(req,res)=>{
      const {email} = req.body;
      if(listOfEmails.findIndex(emaili => emaili.email === email) === -1){
        listOfEmails.push({email:email});
        res.send(listOfEmails)
      }

  })

app.post('/login',(req, res)=>{
    console.log("arrived")
    const { user, password } = req.body;
    const index = LoginUsers.findIndex(login => login.user === user && login.password === password);
    if (index === -1) {
        res.send({ login: false })
    }
    res.send({ login: true })
    
})*/