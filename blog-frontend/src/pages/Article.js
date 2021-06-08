import React from "react";
import { useParams } from "react-router";

const Article = () => {
  const { id } = useParams();

  return <h1>ARTICULO Nº {id}</h1>;
};

export default Article;
