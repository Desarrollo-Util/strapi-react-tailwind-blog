import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ slug, imgSrc, title, description, date, author }) => (
  <Link to={`/articulo/${slug}`} className="lg:w-4/12 md:w-6/12 w-full p-4">
    <div className="bg-white rounded-md overflow-hidden w-full shadow-md">
      <div
        className="flex justify-center items-center h-48 w-full overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${process.env.BACKEND_HOST}${imgSrc})` }}
      ></div>
      <div className="px-6 py-4">
        <h3 className="text-2xl font-semibold truncate-1 mb-3">{title}</h3>
        <p className="text-md truncate-3 h-18 mb-6">{description}</p>
        <div className="flex justify-start">
          <div
            style={{
              backgroundImage: `url(${process.env.BACKEND_HOST}${author.picture.formats.thumbnail.url})`,
            }}
            className="w-12 h-12 rounded-full bg-center bg-cover mr-4"
          />
          <div className="flex flex-col">
            <span className="font-semibold">{author.name}</span>
            <span className="font-semibold text-gray-500">{date}</span>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default ArticleCard;
