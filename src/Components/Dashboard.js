import React, { useEffect, useState } from "react";
import { getNews } from "../Utils/News";
import { NewsCard } from "./NewsCard";

export const Dashboard = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    getNews("india").then((data) => {
      if (data && data.status === "ok") {
        setNewsData(data.articles);
      }
    });
  }, []);

  return (
	<>
    <div style={{display:'flex', 'flex-wrap': 'wrap'}}>
      {newsData.map((article, index) => {
        return <NewsCard key={index} article={article} />;
      })}
    </div>
	</>
  );
};
