//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import ImgDisplay from './components/ImgDisplay/ImgDisplay';
import SimpleRating from './components/SimpleRating/SimpleRating';
import Sorting from './components/Sorting/Sorting';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
let textInput = React.createRef();

function App() {
  const [value, setValue] = React.useState(0);

  // function setValue(){
  //   value++;
  // }
  console.log(value);


  function addImg() {
    let newImgUrl = textInput.current.value;
    console.log(newImgUrl);
    fetch('/addNewImg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }, body: JSON.stringify({ newImgUrl })
    }).then(r => r.json())
      .then(data => {
        console.log(data)
        return data;
      })
  }

  const [displayImg, setDisplayImg] = useState([]);
  function showImgs() {
    //  useEffect(() => {
    fetch('/get-display')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setDisplayImg(data);
      })
    // }, [])
  }

  const [sortedImgs, setSortedImgs] = useState([]);
  function sortImgs() {

    fetch('/get-sorted')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setSortedImgs(data);
      })

  }
  //////////////////////////////////////////////////
  return (

    <div className="AppCont">

      {/* header */}
      <div className="appHeader">
        <h1>Images Viewer</h1>
      </div>

      {/* add new img */}
      <div className="appAdding">
        <input id="newUrl" ref={textInput} type="text" placeholder="Enter URL" />
        <button className="addNewImg" onClick={addImg}>Add New Image</button>
      </div>

      {/* show imgs */}
      <div className="showImgs">
        <button className="bshowImgs" onClick={showImgs}>Display Images</button>
        <div className="imgsContanier">

          {displayImg.map((showImg, index) => {

            return (
            <div>
              <ImgDisplay
              imageId={showImg.imgId}
              imageUrl={showImg.url}
            />
              <div className='imgRate'>
                <div className='simple'>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                      name="simple-controlled"
                      value={showImg.rate}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                        console.log(value);
                        showImg.rate = value;
                      }}
                    />
                  </Box>
                </div>
              </div>

            </div>
            )
          })
          }

        </div>
      </div>
      {/* sort imgs */}
      <div className="sortImgs">
        <button className="bsortImgs" onClick={sortImgs}>Show Images Sorted</button>
        <div className='sortedImgs'>
          <h3 className='title'>Top Images</h3>
          {sortedImgs.map((sortImg, index) => {

            return (<div><Sorting
              imageUrl={sortImg.url}
              imgScore={sortImg.score}
            />
              <hr class="top"></hr>
            </div>
            )
          })
          }

        </div>
      </div>


      {/* AppCont /div */}
    </div>
  );
};


export default App;
/////////////////////////////////////////////////