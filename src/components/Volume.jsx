import React from "react";

const ReMount = (props) => {
  let [key, setKey] = React.useState(0);

  return (
    <div>
      {/* <button className="button" onClick={() => setKey(Date.now())}>
        reload
      </button> */}
      <div key={key}>{props.children}</div>
    </div>
  );
};

const Circle = ({ pct, color, size }) => {
  const circle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  const circleFill = {
    background: `linear-gradient(transparent ${100 - pct}%, ${color} ${
      100 - pct
    }%)`,
  };
  return (
    <div className="circle" style={circle}>
      <div className="circle-fill" style={circleFill} />
      <div className="circle-overlay" />
      <div className="circle-fill-text">{pct}%</div>
    </div>
  );
};

const Volume = () => {
  return (
    <div className="text-center">
    <h5>Volume (%)</h5>
      <ReMount>
        <Circle pct={30} size={200} color={"orange"} />
      </ReMount>
      
    </div>
  );
};

export default Volume;