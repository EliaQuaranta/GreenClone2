import React, { Component } from "react";

function TextBoxesSection({
  title,
  subtitle,
  textBoxes,
}: {
  title: any;
  subtitle: string;
  textBoxes?: any;
}) {
  return (
    <div className="main">
      <div className=" bg-[#F5F1EE] px-7 lg:px-0 ">
        <h1 className="text-center pt-40 font-extrabold text-4xl ">{title}</h1>
        <h3 className="text-center pt-3 text-md fontHead ">{subtitle}</h3>
      </div>
      {textBoxes && textBoxes.length > 0 && (
        <div className="bg-[#F5F1EE] flex justify-center">
          <div className="grid md:grid-cols-3 gap-20 pt-20 pb-32 max-w-5xl px-7 lg:px-0 ">
            {textBoxes.map((textBox: any, index: number) => (
              <div
                key={index}
                className=" md:flex flex-col border-l-2  border-cyan-400 pb-8"
              >
                <div className="pl-7 fontHead font-bold text-xl">
                  {textBox.title}
                </div>
                <div className="pl-7 pt-6">{textBox.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* <h3 className=' text-center font-bold'>Crediamo nella trasparenza,
        in un rapporto di confronto
        e collaborazione continua con il cliente.</h3> */}

      {/* <h3>Ad ogni progetto diamo presenza, attenzione e cura.</h3>
    <h3>Da noi trovi sempre qualcuno che ti risponde quando chiami!</h3> */}
    </div>
  );
}

export default TextBoxesSection;
