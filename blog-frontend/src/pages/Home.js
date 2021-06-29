import React, { useContext, useEffect, useState } from "react";
import ArticleCard from "../components/home/article-card";
import AuthContext from "../lib/contexts/auth.context";

const Home = () => {
  const { authState } = useContext(AuthContext);

  const [articlesData, setArticlesData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    callToApi(setArticlesData);
  }, []); // [] Indica que sólo se va a realizar cuando se monte el componente!!

  return (
    <section className="container-lg py-4">
      <h1 className="text-center text-28 font-bold">Blog</h1>
      <div className="p-1">
        <input
          className="rounded-lg border-1 border-gray-600 px-0_75 py-0_5"
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
      imgSrc: article.cardImage?.formats.thumbnail.url,
      title: article.title,
      description: article.description,
      date: new Date(article.publishedAt).toLocaleDateString(),
      author: article.author,
    }))
  );
};

export default Home;
