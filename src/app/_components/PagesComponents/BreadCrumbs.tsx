import React from "react";
import Link from "next/link";

const Breadcrumbs = ({ breadcrumbs }: any) => {
  return (
    <div aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbs.map((crumb: any, index: any) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <li
              key={crumb.slug}
              className={`breadcrumb-item ${isLast ? "active" : ""}`}
            >
              {!isLast ? (
                <a href={crumb.url}>
                  <div>{crumb.title}</div>
                </a>
              ) : (
                <span>{crumb.title}</span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Breadcrumbs;
