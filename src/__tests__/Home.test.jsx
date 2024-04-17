import { describe, it} from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../pages/Home/Home'
import { GifProvider } from '../context/GifContext'
// Mock the intersecton observer
import { vi } from 'vitest'

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

describe('Home', () => {
  it('home works as expected finding some text render', () => {
    render(<Home />, {wrapper: GifProvider})
    screen.getByText('Your last search:')
  })
})

