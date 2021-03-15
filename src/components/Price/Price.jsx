import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import React from 'react';

function valuetext(value) {
  return `${value}°C`;
}

export default function Price() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="price-range ">
      <h2 className="title">Price</h2>
      <Typography id="range-slider" gutterBottom></Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <div className="storevalue">
        <div className="min">
          <span>Min</span>
          <div className="value">
            <span>1</span>
          </div>
        </div>
        <div className="max">
          <span>Max</span>
          <div className="value">
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
}
