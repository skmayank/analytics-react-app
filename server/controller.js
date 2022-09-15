const readData = require("./service");
const res = require("express/lib/response");

const data = readData();
function getAllData(req, res) {
  return data;
}

function getAllId() {
  const Ids = data.map((row) => row.kegtrackerId);
  return Ids;
}

const getSpecificData = (id) => {
  const product = data.find((row) => row.kegtrackerId === id);
  return product;
};

const getAllTypes = () => {
  let distinctTypes = [];
  let typeCount = [];
  let type = [];
  const allTypes = data.map((row) => row.Type);
  for (index in allTypes) {
    if (!distinctTypes.includes(allTypes[index])) {
      distinctTypes.push(allTypes[index]);
    }
  }
  for (index in distinctTypes) {
    let count = data.filter((row) => row.Type === distinctTypes[index]).length;
    typeCount.push(count);
  }
  for (index in typeCount) {
    type.push({ name: distinctTypes[index], count: typeCount[index] });
  }
  return type;
};

const getChartData = () => {
  let distinctProducts = [];
  let productCount = [];
  let product = [];
  const locationFiltered = data.filter((row) => row.location === "Retailer");
  const volumeFiltered = locationFiltered.filter((row) => row.volume > 90);
  const allProducts = volumeFiltered.map((row) => row.Product);
  for (index in allProducts) {
    if (!distinctProducts.includes(allProducts[index])) {
      distinctProducts.push(allProducts[index]);
    }
  }
  for (index in distinctProducts) {
    let count = volumeFiltered.filter(
      (row) => row.Product === distinctProducts[index]
    ).length;
    productCount.push(count);
  }
  for (index in productCount) {
    product.push({ label: distinctProducts[index], value: Math.round((productCount[index]/volumeFiltered.length)*100) });
  }
  return product;
};
module.exports = {
  getAllData,
  getAllId,
  getSpecificData,
  getAllTypes,
  getChartData,
};
