import React from "react";
import "./Image.css"

const Image = props => (
  <img alt={props.id} src={props.image} onClick={() => props.clickImage(props.id)}/>
);

export default Image;
