import React from "react";
import { Link } from "wouter";
import FavButton from "./FavButton";

function Gif(props) {
  const { url, title, id } = props;
  return <article className="gif">
    <Link to={`/gif/${id}`}>
      <figure className="gif__link">
        <div className="gif__actions">
          <FavButton id={id}/>
        </div>
        <img src={url} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </Link>
  </article>
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})