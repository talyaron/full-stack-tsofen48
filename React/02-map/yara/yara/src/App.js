import logo from './logo.svg';
import './App.css';
import YARA from "./superlogo.png";
import React, { useState } from 'react';
//components
import Icon from './components/Icon.js';
import Imag from './components/Imag.js';



const chocolate = [
  { img: 'https://images.sweetauthoring.com/product/58676.png', title: 'chocolate' },
  { img: 'https://5.imimg.com/data5/GH/DY/WP/SELLER-80635375/amul-icecream-500x500.jpg', title: 'ice' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwobcV2GNfAtMjtlB92PeIUJHaOzXrCY5Yvw&usqp=CAU', title: 'yogurt' },
  { img: 'https://images-na.ssl-images-amazon.com/images/I/511utv2WUsL._SX425_.jpg', title: 'kender' }
]
const chocobutt = [
  { title: 'cocolate',price:50 },
  { title: 'ice' ,price:10},
  { title: 'yougurt' ,price:10},
  { title: 'kinder',price:15 }
]
const berot = [
  { img: 'https://etownmart.com/wp-content/uploads/2020/10/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg', title: 'banana' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVtKFw63h1H_Wg6uNqU_0jxiapTt5Mg-8F3w&usqp=CAU', title: 'apple' },
  { img: 'https://www.naturespride.eu/media/4syh0q3p/mango-kent.jpg?anchor=center&mode=crop&width=1000&height=1000&rnd=132455171416700000', title: 'https://www.simplyrecipes.com/wp-content/uploads/2006/08/HT-Cut-A-Mango-LEAD-1.jpg' },
  { img: 'https://gpi-degouwe.com/wp-content/uploads/2020/06/Potatoes.jpg', title: 'potato' }
]
const berot1 = [
  { title: 'banana',price:4 },
  { title: 'apple' ,price:5},
  { title: 'mango' ,price:6},
  { title: 'potato' ,price:3}
]
const chebs = [
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3-Gar1390JXnk50srkhNNzXI8xh9PtKYSw&usqp=CAU', title: 'chebs' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCnwtEqLVOfhWoRi1-KtkTLoWCDx5GGypkeg&usqp=CAU', title: 'leez' },
  { img: 'https://media.zid.store/thumbs/ea6bf706-fd45-4191-b3d2-37801754fd8e/b4fd27d1-468c-47e3-b98a-b79754b1e127-thumbnail-370x370-70.jpg', title: 'chebs' },
  { img: 'https://i2.wp.com/www.bulkpurchase.net/wp-content/uploads/2020/07/0021130_crown-potato-sticks-hot-50g-x6_550.png?fit=550%2C550&ssl=1', title: 'sticks' }
]
const chebsbutt = [
  { title: 'chebs' ,price:3.90},
  { title: 'leez' ,price:3.90},
  { title: 'chebs' ,price:3.90},
  { title: 'stickes' ,price:3.90}
]
const shtia = [
  { img: 'https://www.galisbakery.co.il/inventory_images/full/0000000000629.jpg', title: 'taboz' },
  { img: 'https://shukhaikar.co.il/wp-content/uploads/2020/04/drinkes_for_website6.jpg', title: 'zero' },
  { img: 'https://lh3.googleusercontent.com/proxy/e72ENkN_gfFi_3j3CRx1YGrnBqEootQllkLUu8ZD6F_r5usiXrt0SELajv2cm-1g9gAEH2d0ltyAmNqgwfqvTayKxwKDJXGnPvB-', title: '3eden' },
  { img: 'https://assets.sainsburys-groceries.co.uk/gol/7981008/1/640x640.jpg', title: 'shwepps' }
]
const shtiabutt = [
  { title: 'taboz',price:10 },
  { title: 'zero' ,price:10},
  { title: '3eden' ,price:10},
  { title: 'shwepps' ,price:10}
]

function App() {
  const [score,setScore]=useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={YARA} className="App-logo" alt="logo" />
        <div className="grid-container">
          <div>
            {berot.map((icon, index) => {

              return (<Imag
                key={index}
                title={icon.title}
                img={icon.img} />)
            })
            }
          </div>
          <div>
            {berot1.map((icon, index) => {

              return (<Icon
                key={index}
                title={icon.title}
                price={icon.price}
                appState={{score, setScore}}
              />)
            })
            }
          </div>
          <div>
            {chocolate.map((icon, index) => {

              return (<Imag
                key={index}
                title={icon.title}
                img={icon.img} />)
            })
            }
          </div>
          <div>
            {chocobutt.map((icon, index) => {

              return (<Icon
                key={index}
                title={icon.title}
                price={icon.price}
                appState={{score, setScore}}
              />)
            })
            }
          </div>
          <div>
            {chebs.map((icon, index) => {

              return (<Imag
                key={index}
                title={icon.title}
                img={icon.img} />)
            })
            }
          </div>
          <div>
            {chebsbutt.map((icon, index) => {

              return (<Icon
                key={index}
                title={icon.title}
                price={icon.price}
                appState={{score, setScore}}
              />)
            })
            }
          </div>
          <div>
            {shtia.map((icon, index) => {

              return (<Imag
                key={index}
                title={icon.title}
                img={icon.img} />)
            })
            }
          </div>
          <div>
            {shtiabutt.map((icon, index) => {

              return (<Icon
                key={index}
                title={icon.title}
                price={icon.price}
                appState={{score, setScore}}
              />)
              
            })
            }
          </div>
        </div>
        <h4>Total Price:{score}</h4>
      </header>
    </div>
  );
}

export default App;
