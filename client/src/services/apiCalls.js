import axios from "axios";
import {baseURL} from "../config";


export const getOptionData = ()  =>
  axios
    .get(`${baseURL}getAllId`)
    .then(({ data }) => {
    return data
    })
    .catch((error) => {
      console.log("get user id error", error);
    });

    

export const getDetailsData = (id) => 
axios
  .get(`${baseURL}getData/${id}`)
  .then(({ data }) => {
    return data;
  })
  .catch((error) => {
    console.log("get work orders error", error);
   
  });

  export const getAllData = () => 
axios
  .get(`${baseURL}getAllData`)
  .then(({ data }) => {
    return data;
  })
  .catch((error) => {
    console.log("get work orders error", error);
   
  });

  export const getAllType = () => 
  axios
    .get(`${baseURL}getAllType`)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log("get work orders error", error);
     
    });

  
    export const getAllDonutChartdata = () => 
    axios
      .get(`${baseURL}getChartData`)
      .then(({ data }) => {
        return data;
      })
      .catch((error) => {
        console.log("get work orders error", error);
       
      });