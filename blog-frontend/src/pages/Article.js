import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Article = () => {
  const { slug } = useParams();

  const [articleData, setArticleData] = useState();

  console.log("ARTICLE DATA", articleData);

  useEffect(() => {
    callToApi(slug, setArticleData);
  }, []);

  return (
    <>
      <button onClick={() => setApiCalls(apiCalls + 1)}>Llamar a la API</button>
      <h1>ARTICULO {slug}</h1>
    </>
  );
};

const callToApi = async (slug, setArticleData) => {
  const response = await fetch(`http://localhost:3000/articles/${slug}`);
  const data = await response.json();

  setArticleData(data);
};

export default Article;
