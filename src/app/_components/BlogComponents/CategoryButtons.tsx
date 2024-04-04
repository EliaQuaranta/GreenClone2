import Link from "next/link";
import React from "react";

function MiddlePart({ categories }: { categories: any }) {
  console.log("middlepart!!!", categories);
  return (
    <div className="flex justify-center">
      <div className="max-w-5xl w-full px-10">
        <ul className="flex flex-wrap justify-center gap-7 py-10">
          {categories.map((category: any) => (
            <li key={category.title}>
              <a href={"/blog/" + category.url}>
                <div className="btn rounded-md btn-primary">{category.url}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MiddlePart;
