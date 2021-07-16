import React from "react";

function TVShow(props) {
  const handleSelectedShow = () => {
    props.selectShow(props.show)
  }
  return (
    <div>
      <br />
      <img src={props.image.medium} onClick={handleSelectedShow} alt="" />
    </div>
  );
}

export default TVShow;
