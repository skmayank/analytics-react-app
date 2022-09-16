import React, { useEffect, useState } from 'react';
import DonutChartProduct from '../components/DonutChartProduct';
import { getAllDonutChartdata } from "../services/apiCalls";

const RetailerFullProduct = () => {
  const [data, setData] =useState([]);
  const allColor = ["#f68ae9", "#f2b800", "#5fefa4", "#fe6969", "#298af2", "#298af2", "#af1ad8", "#fb8e34"];
  
  useEffect(()=>{
    getAllDonutChartdata().then((res) => {
      
      const color = res.message?.map((item, index) => {
        return { ...item, color: allColor[index] };
      });
      setData(color);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="w-full d-flex text-bg-dark px-5 py-3 align-items-center justify-content-center mb-4">
        <h1 className="text-center">Retailer Full Product</h1>
      </div> 
      <div className="text-center">
        <DonutChartProduct data={data}/>
      </div>
    </div>
  )
}

export default RetailerFullProduct
