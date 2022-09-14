import React from "react";
import DataTable from "react-data-table-component";
import movies from "../data/movies";

const columns = [
  {
    name: "Type Color",
    selector: "typeColor",
    sortable: true,
  },
  {
    name: "Type",
    selector: "type",
    sortable: true,
  },
  {
    name: "Batch ID",
    selector: "batchId",
    sortable: true,
  },
  {
    name: "Current Location",
    selector: "currentLocation",
    sortable: true,
    right: true,
  },
  {
    name: "Produc",
    selector: "product",
    sortable: true,
    right: true,
  },
  {
    name: "Quanitity",
    selector: "quanitity",
    sortable: true,
    right: true,
  },
  {
    name: "Time on Shelf",
    selector: "timeOnShelf",
    sortable: true,
    right: true,
  },
  {
    name: "Status",
    selector: "status",
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

const InventoryTable = () => {
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
          data={data}
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
