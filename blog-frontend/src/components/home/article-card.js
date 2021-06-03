import React from "react";

const ArticleCard = ({ imgSrc, title, description, date }) => (
  <div className="w-3/12 p-4">
    <div className="bg-white rounded-md overflow-hidden shadow-md">
      <div className="flex justify-center items-center h-40 w-full overflow-hidden">
        <img src={imgSrc} className="w-full" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
        <div className="flex justify-end items-center">
          <span className="text-xs">{date}</span>
        </div>
      </div>
    </div>
  </div>
);

export default ArticleCard;
