import Link from "next/link";
import React from "react";

function MiddlPart({ categories }: { categories: any }) {
  console.log("CategoryButtonCMS", categories);
  return (
    <div className="flex justify-center">
      <div className="max-w-5xl w-full px-10">
        <ul className="flex flex-wrap justify-center gap-7 py-10">
          {categories &&
            Array.isArray(categories) &&
            categories.map((category: any) => (
              <li key={category.title}>
                <a href={category.url} className="btn rounded-md btn-primary">
                  {category.title}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default MiddlPart;
