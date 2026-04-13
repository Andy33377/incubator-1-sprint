import { useState } from "react";

type PropsType = {
  on: boolean;
};

export default function OnOff(props: PropsType) {
  const [on, setOn] = useState(false);

  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: on ? "green" : "white",
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    padding: "2px",
    backgroundColor: on ? "white" : "red",
  };
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: on ? "green" : "red",
  };

  return (
    <div>
      <div
        onClick={() => {
          setOn(true);
        }}
        style={onStyle}
      >
        ON
      </div>
      <div
        onClick={() => {
          setOn(false);
        }}
        style={offStyle}
      >
        OFF
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
}
