import React, { Component } from "react";

function teamImage({ info }: { info: any }) {
  return (
    <div className="w-full ">
      <img src={info.teamImage[0].url} alt="" />
    </div>
  );
}

export default teamImage;
