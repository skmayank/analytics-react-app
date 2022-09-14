import React from "react";
import BatteryStatus from "../components/BatteryStatus";
import Map from "../components/Map";
import ThermometerTemp from "../components/ThermometerTemp";
import Volume from "../components/Volume";

const Home = () => {
  const options = [
    { label: "Test001", value: "Test001" },
    { label: "Test002", value: "Test002" },
    { label: "Test003", value: "Test003" },
    { label: "Test004", value: "Test004" },
    { label: "Test005", value: "Test005" },
    { label: "Test006", value: "Test006" },
    { label: "Test007", value: "Test007" },
    { label: "Test008", value: "Test008" },
  ];

  const [value, setValue] = React.useState("fruit");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h1 className="text-center p-4">Home</h1>
      <div className="text-right mr-5">
        <Dropdown options={options} value={value} onChange={handleChange} />
      </div>
      <div>
        <div className="d-flex justify-content-around mt-5">
          <ThermometerTemp />
          <Volume />
          <BatteryStatus />
        </div>

        <div className="mt-4">
          <h3 className="text-center mb-5 mt-5">Location of the device</h3>
          <Map />
        </div>
      </div>
    </div>
  );
};

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <div>
      <select className="home_dropdown" value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Home;

