import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import parse from "remark-parse";
import remark2react from "remark-react";
import unified from "unified";
import videojs from "video.js";

const Article = () => {
  const { slug } = useParams();

  const [articleData, setArticleData] = useState();
  const videoRef = useRef();
  const playerRef = useRef();

  useEffect(() => {
    callToApi(slug, setArticleData);

    return () => playerRef.current.dispose();
  }, []);

  useEffect(() => {
    if (videoRef.current && articleData) {
      playerRef.current = videojs(
        videoRef.current,
        { controls: true, fluid: true },
        () => {
          playerRef.current.src(
            process.env.BACKEND_HOST + articleData.video.url
          );
        }
      );
    }
  }, [videoRef.current, articleData]);

  if (articleData) {
    return (
      <article className="container mx-auto lg:px-20 px-10 py-4 py-">
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
          <div data-vjs-player className="w-full">
            <video ref={videoRef} className="video-js w-full" />
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
