import axios from "axios";
import {baseURL} from "../config";


export const getOptionData = ()  =>
  axios
    .get(`${baseURL}products/getAllId`)
    .then(({ data }) => {
    return data
    })
    .catch((error) => {
      console.log("get user id error", error);
    });

    

export const getDetailsData = (id) => 
axios
  .get(`${baseURL}products/getData/${id}`)
  .then(({ data }) => {
    return data;
  })
  .catch((error) => {
    console.log("get work orders error", error);
   
  });

  export const getAllData = () => 
axios
  .get(`${baseURL}products/getAllData`)
  .then(({ data }) => {
    return data;
  })
  .catch((error) => {
    console.log("get work orders error", error);
   
  });

  export const getAllType = () => 
  axios
    .get(`${baseURL}products/getAllType`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log("get work orders error", error);
     
    });

  
    export const getAllDonutChartdata = () => 
    axios
      .get(`${baseURL}products/getChartData`)
      .then(({ data }) => {
        return data;
      })
      .catch((error) => {
        console.log("get work orders error", error);
       
      });