import {useReducer} from 'react'

const ACTIONS = {
  updateKeyword: 'updateKeyword',
  updateRating: 'updateRating',
}

function reducer(state, action) {
  const {type, payload} = action
  if(type === ACTIONS.updateKeyword) {
    return {
      ...state,
      keyword: payload
    }
  }
  if(type === ACTIONS.updateRating) {
    return {
      ...state,
      rating: payload
    }
  }
  return state;
}


export function useForm({initialKeyword, initialRating}) {
  const [state, dispatch] = useReducer(reducer, {
    keyword: initialKeyword,
    rating: initialRating
  })

  const { keyword, rating } = state;


  return {
    keyword,
    rating,
    updateKeyword: (keywordToUpdate) => {
      dispatch({type: ACTIONS.updateKeyword, payload: keywordToUpdate})
    },
    updateRating: (ratingToUpdate) => {
      dispatch({type: ACTIONS.updateRating, payload: ratingToUpdate})
    }
  }
}
