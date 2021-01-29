import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

export default function SimpleRating() {
  const [value, setValue] = React.useState(0);
  let x=value;
    console.log(value);
  return (
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
  );
}
