import React, { useState, useEffect } from "react";
import BatteryGauge from "react-battery-gauge";

const BatteryStatus = ({batteryStatus}) => {
  return (
    <div className="text-center">
      <h5>Battery(%)</h5>
      <BatteryGauge value={batteryStatus} />
    </div>
  );
};

export default BatteryStatus;
