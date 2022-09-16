import React from "react";
import BatteryGauge from "react-battery-gauge";

const BatteryStatus = ({batteryStatus}) => {
  return (
    <div className="text-center">
      <h5 className="mb-5 size-font">Battery(%)</h5>
      <BatteryGauge value={batteryStatus} />
    </div>
  );
};

export default BatteryStatus;
