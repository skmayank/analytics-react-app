import React, { useState, useEffect } from "react";
import BatteryGauge from "react-battery-gauge";

const BatteryStatus = () => {
  return (
    <div className="text-center">
      <h5>Battery(%)</h5>
      <BatteryGauge value={30} />
    </div>
  );
};

export default BatteryStatus;
