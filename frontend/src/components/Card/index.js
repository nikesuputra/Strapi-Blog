import React from "react";
import { Link } from "react-router-dom";

const Card = ({ article }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.Thumbnail.url
      : process.env.REACT_APP_BACKEND_URL + article.Thumbnail.url;
  return (
    <Link to={`/article/${article.id}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img src={imageUrl} alt={article.Thumbnail.url} height="100" />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {article.category.Name}
          </p>
          <p id="title" className="uk-text-large">
            {article.Title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;