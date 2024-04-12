import React, {Suspense} from 'react'
import { useLazyScreen } from '@hooks/useLazyScreen'

export function LazyTrendingGifs() {
  const {isShow, fromRef} = useLazyScreen()
  const TrendingGifs = React.lazy(() => import('./TrendingGifs'))
  return (
    <div ref={fromRef}>
        <Suspense fallback={'Cargando...'}>
        {
          isShow ? <TrendingGifs/> : null
        }
       </Suspense>
    </div>
  )
}