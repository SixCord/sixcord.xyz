import React from "react";
const NotFound = props => {
  // console.log(props);
  return (
    <div>
      {!props.location.key && (
        <h2>Error 404: Page: {props.location.pathname} not found </h2>
      )}
      {/* <p>Key: {props.location.key} not found </p> */}
    </div>
  );
};
export default NotFound;
