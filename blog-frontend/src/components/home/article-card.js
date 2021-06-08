import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ slug, imgSrc, title, description, date }) => (
  <Link to={`/articulo/${slug}`} className="w-3/12 p-4">
    <div className="bg-white rounded-md overflow-hidden shadow-md">
      <div
        className="flex justify-center items-center h-40 w-full overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-700 truncate-1">
          {title}
        </h3>
        <p className="text-gray-700 text-sm truncate-2">{description}</p>
        <div className="flex justify-end items-center">
          <span className="text-xs">{date}</span>
        </div>
      </div>
    </div>
  </Link>
);

export default ArticleCard;
