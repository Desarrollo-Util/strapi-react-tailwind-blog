// @ts-check

import React, { useEffect, useState } from "react";
import ArticleCard from "../components/home/article-card";

const Home = () => {
  const [articlesData, setArticlesData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    callToApi(setArticlesData);
  }, []); // [] Indica que sólo se va a realizar cuando se monte el componente!!

  return (
    <section className="container mx-auto">
      <div className="p-4">
        <input
          className="rounded-lg border border-gray-600 p-4"
          type="text"
          onChange={(event) => setSearch(event.target.value.toLowerCase())}
        />
      </div>
      <div className="flex flex-wrap">
        {articlesData
          .filter((articleData) => {
            if (!search) return true;
            else return articleData.title.toLowerCase().includes(search);
          })
          .map((articleData) => (
            <ArticleCard key={articleData.slug} {...articleData} />
          ))}
      </div>
    </section>
  );
};

const callToApi = async (setArticlesData) => {
  const response = await fetch(`${process.env.BACKEND_HOST}/articles`);
  const data = await response.json();

  setArticlesData(
    data.map((article) => ({
      slug: article.slug,
      imgSrc: `${process.env.BACKEND_HOST}${article.image?.formats.thumbnail.url}`,
      title: article.title,
      description: article.description,
      date: new Date(article.publishedAt).toLocaleDateString(),
    }))
  );
};

export default Home;
