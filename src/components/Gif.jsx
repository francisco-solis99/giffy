export default function Gif(props) {
  const { url, title } = props;
  return <article className="gif">
    <figure>
      <img src={url} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  </article>
}