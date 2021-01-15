import logo from './logo.svg';
import './App.css';
import YARA from "./superlogo.png";
import React, { useState } from 'react';
//components
import Icon from './components/Icon.js';
import Imag from './components/Imag.js';

const chocolate = [
  { img: 'https://c0.klipartz.com/pngpicture/913/140/sticker-png-chocolate-chip-cookie-caffe-mocha-cafe-parle-products-biscuits-chocolate-food-cafe-supermarket-chocolate-chip-cookie-grocery-store.png', title: 'chocolate' },
  { img: 'https://w7.pngwing.com/pngs/821/335/png-transparent-ice-cream-gb-glace-flavor-dairy-products-ice-pop-ice-cream-food-supermarket-ice-pop.png', title: 'ice' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmx1q3WAh2fKogKiRdwSDmNkfYClzwLywDQ&usqp=CAU', title: 'yogurt' },
  { img: 'https://w7.pngwing.com/pngs/408/7/png-transparent-kinder-chocolate-kinder-surprise-milk-milk-food-supermarket-grocery-store.png', title: 'kender' }
]
const chocobutt = [
  { title: 'cocolate' },
  { title: 'ice' },
  { title: 'yougurt' },
  { title: 'kinder' }
]
const berot = [
  { img: 'https://img1.pnghut.com/5/25/17/UC5q7gtqCF/cooking-plantain-food-saba-banana-filipino-cuisine-davao.jpg', title: 'banana' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qWqVnxzI-F_byYCuCIgGE9WU80SFDiwf9w&usqp=CAU', title: 'apple' },
  { img: 'https://www.simplyrecipes.com/wp-content/uploads/2006/08/HT-Cut-A-Mango-LEAD-1.jpg', title: 'https://www.simplyrecipes.com/wp-content/uploads/2006/08/HT-Cut-A-Mango-LEAD-1.jpg' },
  { img: 'https://gpi-degouwe.com/wp-content/uploads/2020/06/Potatoes.jpg', title: 'potato' }
]
const berot1 = [
  { title: 'banana' },
  { title: 'apple' },
  { title: 'mango' },
  { title: 'potato' }
]
const chebs = [
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd3-Gar1390JXnk50srkhNNzXI8xh9PtKYSw&usqp=CAU', title: 'chebs' },
  { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCnwtEqLVOfhWoRi1-KtkTLoWCDx5GGypkeg&usqp=CAU', title: 'leez' },
  { img: 'https://media.zid.store/thumbs/ea6bf706-fd45-4191-b3d2-37801754fd8e/b4fd27d1-468c-47e3-b98a-b79754b1e127-thumbnail-370x370-70.jpg', title: 'chebs' },
  { img: 'https://i2.wp.com/www.bulkpurchase.net/wp-content/uploads/2020/07/0021130_crown-potato-sticks-hot-50g-x6_550.png?fit=550%2C550&ssl=1', title: 'sticks' }
]
const chebsbutt = [
  { title: 'chebs' },
  { title: 'leez' },
  { title: 'chebs' },
  { title: 'stickes' }
]
function App() {
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
              />)
            })
            }
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
