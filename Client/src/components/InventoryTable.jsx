import React from "react";
import DataTable from "react-data-table-component";
import movies from "../data/movies";

const columns = [
  {
    name: "Type Color",
    selector: (row)=><p className="table-circle" style={{backgroundColor: row.color}}></p>,
    sortable: true,
  },
  {
    name: "Type",
    selector: "Type",
    sortable: true,
  },
  {
    name: "Batch ID",
    selector: "BatchNumber",
    sortable: true,
  },
  {
    name: "Current Location",
    selector: "location",
    sortable: true,
    right: true,
  },
  {
    name: "Product",
    selector: "Product",
    sortable: true,
    right: true,
  },
  {
    name: "Quanitity",
    selector: "Size",
    sortable: true,
    right: true,
  },
  {
    name: "Time on Shelf",
    selector: "statusTime",
    sortable: true,
    right: true,
  },
  {
    name: "Status",
    selector: (row)=><p> {(row.volume <= 10)?("Empty"): row.volume <= 90 ? "Inuse" : row.volume <= 100 ? "Full": "N/A"  }</p>,
    sortable: true,
    right: true,
  },
];

const conditionalRowStyles = [
  {
    when: (row) => row.toggleSelected,
    style: {
      backgroundColor: "green",
      userSelect: "none",
    },
  },
];

const InventoryTable = (props) => {

  const [data, setData] = React.useState(movies);

  const handleRowClicked = (row) => {
    
    const updatedData = data.map((item) => {
      if (row.id !== item.id) {
        return item;
      }

      return {
        ...item,
        toggleSelected: !item.toggleSelected,
      };
    });

    setData(updatedData);
  };
  
  return (
    <div>
      <div className="App">
        <DataTable
          title=""
          columns={columns}
          data={props.tableData}
          defaultSortField="title"
          pagination
          onRowClicked={handleRowClicked}
          conditionalRowStyles={conditionalRowStyles}
        />
      </div>
    </div>
  );
};

export default InventoryTable;
