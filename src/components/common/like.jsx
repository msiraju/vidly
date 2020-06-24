import React from "react";
const Like = (props) => {
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={props.liked ? "fa fa-heart" : "fa fa-heart-o"}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
