import React from "react";
import Thermometer from "react-thermometer-component";

const ThermometerTemp = () => {
  return (
    <div className="text-center">
      <h5>Temperature (C)</h5>
      <Thermometer
        theme="light"
        value="18"
        max="100"
        steps="3"
        format="°C"
        size="large"
        height="300"
      />
    </div>
  );
};

export default ThermometerTemp;
