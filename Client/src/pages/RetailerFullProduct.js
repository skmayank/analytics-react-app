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
  }, []);

  return (
    <div>
      <h1 className="text-center p-4">Retailer Full Product</h1>
      <div className="text-center">
        <DonutChartProduct data={data}/>
      </div>
    </div>
  )
}

export default RetailerFullProduct
