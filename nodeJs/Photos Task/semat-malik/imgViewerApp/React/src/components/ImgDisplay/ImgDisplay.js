import './ImgDisplay.css'
import React from 'react'
import SimpleRating from '../SimpleRating/SimpleRating';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function ImgDisplay(props) {
  // const [value, setValue] = React.useState(0);
  //   console.log(value);
  return (
    <div className='ImgDisplay'>
      <div className="tile">
        <div className='imgToShow'>
          <img src={props.imageUrl} />
        </div></div>
      {/* <div className='imgRate'>
      <div className='simple'>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={x}
          onChange={(event, newValue) => {
            setValue(newValue);
            console.log(value);
          }}
        />
      </Box>
    </div>

      </div> */}
    </div>
  )
}

export default ImgDisplay