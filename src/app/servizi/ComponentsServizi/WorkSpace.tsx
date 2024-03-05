import React, { Component } from "react";

function WorkSpacee({ Info }: { Info: any }) {
  return (
    <div className="">
      <img src={Info.WorkSpaceImage[0].url} alt="" />
    </div>
  );
}

export default WorkSpacee;
