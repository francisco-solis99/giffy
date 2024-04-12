import {useEffect, useState} from 'react'
import getTrendingSearches from '@services/getTendencies'
import Category from '@components/Category'

export default function TrendingGifs() {
  const [trendings, setTrendings] = useState([])
  useEffect(() => {
    getTrendingSearches()
    .then(dataTrendings => {
      setTrendings(dataTrendings)
    })
  }, [])

  return (
    <Category name="Trendings" items={trendings}/>
  )
}