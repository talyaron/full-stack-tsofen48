import logo from './logo.svg';
import './App.css';
import Gift from "./components/Gift";
import React,{useState,useEffect} from "react";

var giftsToDesplay = [
  {cost:25,img:'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png'},
  {cost:40,img:'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png'},
  {cost:30,img:'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png'},
  {cost:40,img:'https://icons-for-free.com/iconfiles/png/512/christmas+gift+gift+box+present+icon-1320184382640199846.png'},

];




function App() {
  // const [giftsToDesplay, setGiftsToDesplay] = useState([]);
  const [UserMoney, setUserMoney] = useState(100);

  // useEffect(() => {
  //   fetch('/get-gifts')
  //     .then(r => r.json())
  //     .then(data => {
  //       console.log(data)
  //       setGiftsToDesplay(data);
  //     })
  // }, [])


  useEffect(() => {
fetch('/get-user-money')
  .then(r => r.json())
  .then(data => {
    console.log(data)
    setUserMoney(data);
  })
}, [])

  return (
    <div className="App"><h1>{UserMoney}</h1>
     {giftsToDesplay.map((gift, index) =>{
      return( <Gift UserMoney={UserMoney} cost={gift.cost} img={gift.img} />);
    })

     }
    <button className="goToCart">Go To Cart</button></div>
  );
}

export default App;
