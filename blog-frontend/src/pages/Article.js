import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import parse from "remark-parse";
import remark2react from "remark-react";
import unified from "unified";

const Article = () => {
  const { slug } = useParams();

  const [articleData, setArticleData] = useState();

  useEffect(() => {
    callToApi(slug, setArticleData);
  }, []);

  if (articleData) {
    return (
      <article className="container mx-auto lg:px-20 px-10 py-4">
        <div
          style={{
            backgroundImage: `url(${process.env.BACKEND_HOST}${articleData.cardImage.formats.large.url})`,
          }}
          className="w-full h-96 bg-cover bg-center"
        />
        <div className="container mx-auto py-4">
          <h1 className="text-center font-bold text-3xl pb-2">
            {articleData.title}
          </h1>
          <div className="px-12">
            {
              unified()
                .use(parse)
                .use(remark2react)
                .processSync(articleData.content).result
            }
          </div>
        </div>
      </article>
    );
  }
  return <></>;
};

const callToApi = async (slug, setArticleData) => {
  const response = await fetch(`${process.env.BACKEND_HOST}/articles/${slug}`);
  const data = await response.json();

  setArticleData(data);
};

export default Article;
