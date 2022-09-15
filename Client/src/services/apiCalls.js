import axios from "axios";

export const getOptionData = ()  =>
  axios
    .get(`getAllId`)
    .then(({ data }) => {
    return data
    })
    .catch((error) => {
      console.log("get user id error", error);
    });

    

export const getDetailsData = (id) => 
axios
  .get(`getData/${id}`)
  .then(({ data }) => {
    return data;
  })
  .catch((error) => {
    console.log("get work orders error", error);
   
  });

  export const getAllData = () => 
axios
  .get(`getAllData`)
  .then(({ data }) => {
    return data;
  })
  .catch((error) => {
    console.log("get work orders error", error);
   
  });

  export const getAllType = () => 
  axios
    .get(`getAllType`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log("get work orders error", error);
     
    });

  
    export const getAllDonutChartdata = () => 
    axios
      .get(`getChartData`)
      .then(({ data }) => {
        return data;
      })
      .catch((error) => {
        console.log("get work orders error", error);
       
      });