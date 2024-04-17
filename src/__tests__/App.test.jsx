import { describe, it, expect} from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../components/App'
// Mock the intersecton observer
import { vi } from 'vitest'

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

describe('App', () => {
  it('renders the App without crashing', () => {
    render(<App />)
    // screen.debug(); // prints out the jsx in the App component unto the command line
  })

  it('Check if the tittle of the app is rendering', () => {
    render(<App />)
    expect(screen.getByText('Giffy'))
  })

  // it('Check if the last search gifs are rendering', async() => {
  //   render(<App />)
  //   await waitFor(() => {
  //     const results = screen.getAllByRole('figure')
  //     console.log(results.length)
  //     expect(screen.getByRole('figure'))
  //   })
  // })
  it('search could be used', async () => {
    render(<App />)
    const input = await screen.findByRole('textbox')
    const button = await screen.findByRole('button')
    fireEvent.change(input, {target: {value: 'Anakin' }})
    fireEvent.click(button)
    const title = await screen.findByText('Anakin')
    console.log(title)
  })
})

