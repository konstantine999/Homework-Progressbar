import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./progress.css";

function Progress(props) {
  return (
    <div class="progress">
      <div class="progress-bar" style={{ width: `${props.width}%` }}></div>
    </div>
  );
}

export default Progress;
