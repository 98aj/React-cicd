import { render, screen } from '@testing-library/react'
import App from '../App'


test('renders greeting with name', () => {
  render(<App />)
  expect(screen.getByText('Vite + React done by Abhishek')).toBeInTheDocument()
})
