import React, { useEffect, useState } from "react";
import InventoryTable from "../components/InventoryTable";
import { getAllData, getAllType } from "../services/apiCalls";

const colorTable = [
  "#f68ae9",
  "#f2b800",
  "#5fefa4",
  "#fe6969",
  "#298af2",
  "#298af2",
  "#af1ad8",
  "#fb8e34",
];

export const Inventory = () => {
  const [type, setType] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [fullTableData, setFullTableData] = useState([]);

  useEffect(() => {
    getAllData().then((res) => {
      setTableData(res.message);
      setFullTableData(res.message);
    });

    getAllType().then((res) => {
      const color = res.message?.map((item, index) => {
        return { ...item, color: colorTable[index] };
      });
      setType(color);
    });
    // eslint-disable-next-line
  }, []);

  const handleClick = (item) => {
    const filterResult = fullTableData.filter((row) => row.Type === item.name);
    setTableData(filterResult);
  };

  useEffect(() => {
    if (type) {
      let tablecolor = tableData.map((item) => {
        const tableColorMatch = type.find((type) => item.Type === type.name);
        if (tableColorMatch) {
          return { ...item, color: tableColorMatch.color };
        }else {
          return null;
        }
      });
      setTableData(tablecolor);
      setFullTableData(tablecolor);
    }
    // eslint-disable-next-line
  }, [type]);

  const handleReset = () => {
    setTableData(fullTableData);
  }

  return (
    <div>
      <div className="w-full d-flex text-bg-dark px-5 py-3 align-items-center justify-content-center mb-4">
        <h1 className="text-center">Inventory</h1>
      </div>

      <div className="p-3">
        <div className="d-flex mb-5 main-box">
          {type.map((item, index) => (
            <div
              key={index}
              style={{ background: item.color, width: item.count + "%" }}
              onClick={() => handleClick(item)}
            ></div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-around mb-5">
        {type.map((item, index) => (
          <div key={index} className="d-flex mouse"  onClick={() => handleClick(item)}>
            <div className="box" style={{ background: item.color }}></div>
            <span className="pl-2"> {item.name} </span>
          </div>
        ))}
      </div>

      <InventoryTable
        tableData={tableData}
        typeName={type?.name}
        typeColor={type.color}
      />
      <button className="btn btn-primary reset-btn mt-3 mb-5 mr-3" onClick={handleReset}>Reset</button>
    </div>
  );
};
