import React, { useEffect, useState } from "react";
import ArticleCard from "../components/home/article-card";

const Home = () => {
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    callToApi(setArticlesData);
  }, []);

  return (
    <section className="container mx-auto flex justify-start items-center">
      {articlesData.map((articleData) => (
        <ArticleCard {...articleData} />
      ))}
    </section>
  );
};

const callToApi = async (setArticlesData) => {
  const response = await fetch("http://localhost:3000/articles");
  const data = await response.json();

  setArticlesData(
    data.map((article) => ({
      imgSrc: "http://localhost:3000" + article.image?.formats.thumbnail.url,
      title: article.title,
      description: article.description,
      date: new Date(article.publishedAt).toLocaleDateString(),
    }))
  );
};

export default Home;
