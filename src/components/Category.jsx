import { Link } from "wouter"

export default function Category({name = '', items = []} = {}) {
  return (
    <div className="category__wrapper">
      <h4 className="category__title">{name}</h4>
      <ul className="category__list">
        {
          items.map(item => {
            return (
              <li key={item} className="category__item">
                <Link to={`/search/${item}`}>
                  {item}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
