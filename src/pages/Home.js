import React, { useEffect, useState } from "react";
import BatteryStatus from "../components/BatteryStatus";
import Map from "../components/Map";
import ThermometerTemp from "../components/ThermometerTemp";
import Volume from "../components/Volume";
import { getOptionData, getDetailsData } from "../services/apiCalls";

const Home = () => {
  const [options, setOptionData] = useState([]);
  const [getDetails, setDetails] = useState("");
  const [value, setValue] = React.useState("");
  
  useEffect(()=>{
    getOptionData().then((res ) => {
      setOptionData(res.message);
      setValue(res[0])
    });

  }, []);

  useEffect(()=>{
    if(value) {
      getDetailsData(value).then((res ) => {
        setDetails(res.message);
      });
    }
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h1 className="text-center p-4">Home</h1>
      <div className="text-right mr-5">
        <Dropdown options={options} value={value} onChange={handleChange} />
      </div>
      {value &&
      <div>
      <div className="d-flex justify-content-around mt-5">
        <ThermometerTemp temperature={getDetails.temperature} />
        <Volume volume={getDetails.volume}/>
        <BatteryStatus batteryStatus={getDetails.battery}/>
      </div>

      <div className="mt-4">
        <h3 className="text-center mb-5 mt-5">Location of the device</h3>
        <Map let={getDetails.latitude} lng={getDetails.longitude}/>
      </div>
    </div>}

    </div>
  );
};

const Dropdown = ({value, options, onChange }) => {
  return (
    <div>
      <select className="home_dropdown" value={value} onChange={onChange}>
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Home;

