import React from "react";
import { Link } from "wouter";

function Gif(props) {
  const { url, title, id } = props;
  return <article className="gif">
    <Link to={`/gif/${id}`}>
      <figure className="gif__link">
        <img src={url} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </Link>
  </article>
}

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id
})