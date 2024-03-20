import React, { Component } from "react";

function workSpaceImage({ info }: { info: any }) {
  //console.log("fewfwefwefwf", info);
  return (
    <div className="w-full ">
      <img src={info.workspaceHomeImage[0].url} alt="eqweqewqs" />
    </div>
  );
}

export default workSpaceImage;
