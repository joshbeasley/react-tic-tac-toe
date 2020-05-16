import React from "react";

export default function Space(props) {
  return (
    <button className="space" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
