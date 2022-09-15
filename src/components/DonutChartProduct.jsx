import React from "react";
import DonutChart from "react-donut-chart";


const reactDonutChartBackgroundColor = [
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0",
];

const DonutChartProduct = (props) => {
  const reactDonutChartInnerRadius = 0.5;
  const reactDonutChartSelectedOffset = 0.04;
  const reactDonutChartHandleClick = (item, toggled) => {
    if (toggled) {
      console.log(item);
    }
  };

  let reactDonutChartStrokeColor = "#FFFFFF";
  const reactDonutChartOnMouseEnter = (item) => {
    let color = props.data.find((q) => q.label === item.label).color;
    reactDonutChartStrokeColor = color;
  };

  return (
    <div>
      <DonutChart
        width={500}
        onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
        strokeColor={reactDonutChartStrokeColor}
        data={props.data}
        colors={reactDonutChartBackgroundColor}
        innerRadius={reactDonutChartInnerRadius}
        selectedOffset={reactDonutChartSelectedOffset}
        // onClick={(item, toggled) => reactDonutChartHandleClick(item, toggled)}
      />
    </div>
  );
};

export default DonutChartProduct;
