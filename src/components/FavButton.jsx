import { useUserContext } from "@context/UserContext"
import { useLocation } from "wouter"


export default function FavButton({id}) {
  const { addToFavorites, favs, isLogged } = useUserContext()
  const [, navigate] = useLocation()

  const isAlreadyFav = favs.some(fav => fav === id)
  const handleClickAddFav = (e) => {
    e.stopPropagation()
    if(!isLogged) return navigate('/login')
    addToFavorites({id})
  }

  const [label, emoji] = isAlreadyFav ? ['Delete from favorites', '❌'] : ['Add to favorites', '💓']

  return (
    <button onClick={handleClickAddFav} className="favorite__button">
      <span aria-label={label} role="img">
        {emoji}
      </span>
    </button>
  )
}
