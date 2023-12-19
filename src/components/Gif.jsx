import { Link } from "wouter";

export default function Gif(props) {
  const { url, title, id } = props;
  return <article className="gif">
    <Link to={`/gif/${id}`}>
      <figure>
        <img src={url} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </Link>
  </article>
}