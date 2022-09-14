import React from "react";
import InventoryTable from "../components/InventoryTable";
const columns = [
  {
    type: "Type",
    color: "#f68ae9",
    color_percent: "50%",
  },
  {
    type: "Inventory",
    color: "#f2b800",
    color_percent: "10%",
  },
  {
    type: "Whistle",
    color: "#5fefa4",
    color_percent: "5%",
  },
  {
    type: "Punks",
    color: "#fe6969",
    color_percent: "5%",
  },
  {
    type: "UK",
    color: "#298af2",
    color_percent: "10%",
  },
  {
    type: "Ltd",
    color: "#af1ad8",
    color_percent: "10%",
  },
  {
    type: "Type",
    color: "#fb8e34",
    color_percent: "10%",
  }
  
];

const Inventory = () => {
  const handleClick = (index) => {
    console.log("====", index)
  }
  return (
    <div>
      <h1 className="text-center p-4">Inventory</h1>

      <div className="p-3">
        <div className="d-flex mb-5 main-box">
          {columns.map((item, index) => (
            <div key={index} style={{ background: item.color, width: item.color_percent }} onClick={() => handleClick(index)}></div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-around">
        {columns.map((item, index) => (
          <div className="d-flex">
            <div className="box" style={{ background: item.color }}></div>
            <span> {item.type} </span>
          </div>
        ))}
      </div>
      <InventoryTable />
    </div>
  );
};

export default Inventory;
