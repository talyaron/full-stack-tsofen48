import './content.css'
import Block from '../blocks/block'
import React, { useState, useEffect } from 'react';

function Content() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/get-articles-list')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setArticles(data);
      })
  }, [])
  return (
    <div className="content">
      {articles.map((article, index) => {
        return (<Block
          key={index}
          title={article.title}
          subtitle={article.subtitle}
          url={article.url}
        />)
      })}
    </div>
  );
}

export default Content;