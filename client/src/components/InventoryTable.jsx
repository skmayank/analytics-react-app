import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Type Color",
    selector: (row) => (
      <p className="table-circle" style={{ backgroundColor: row.color }}></p>
    ),
    sortable: true,
  },
  {
    name: "Type",
    selector: (row) => row.Type,
    sortable: true,
  },
  {
    name: "Batch ID",
     selector: (row) => row.BatchNumber,
    sortable: true,
  },
  {
    name: "Current Location",
     selector: (row) => row.location,
    sortable: true,
    right: true,
  },
  {
    name: "Product",
     selector: (row) => row.Product,
    // selector: "Product",
    sortable: true,
    right: true,
  },
  {
    name: "Quanitity",
     selector: (row) => row.Size,
    sortable: true,
    right: true,
  },
  {
    name: "Time on Shelf",
     selector: (row) => row.statusTime,
    sortable: true,
    right: true,
  },
  {
    name: "Status",
    selector: (row) => (
      <p>
        {" "}
        {row.volume <= 10
          ? "Empty"
          : row.volume <= 90
          ? "Inuse"
          : row.volume <= 100
          ? "Full"
          : "N/A"}
      </p>
    ),
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
  const [data, setData] = React.useState(props?.tableData);

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
