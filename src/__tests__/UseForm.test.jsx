import { describe, it, expect} from 'vitest'
import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from '@hooks/useForm'

describe('useForm hook testing', () => {
  it('Should change keyword', () => {
    const { result } = renderHook(() => useForm())

    act(() => {
      result.current.updateKeyword('batman')
    })

    expect(result.current.keyword).toBe('batman')
  })

  it('Should use initial values for keyword', () => {
    const { result } = renderHook(() => useForm({
      initialKeyword: 'dragon ball'
    }))

    expect(result.current.keyword).toBe('dragon ball')
  })

  it('Should change rating', () => {
    const { result } = renderHook(() => useForm())
    act(() => {
      result.current.updateRating('pg')
    })

    expect(result.current.rating).toBe('pg')
  })

  it('Should use initial values for rating', () => {
    const { result } = renderHook(() => useForm({
      initialRating: 'r'
    }))

    expect(result.current.rating).toBe('r')
  })
})