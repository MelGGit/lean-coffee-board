import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('renders', () => {
    render(<Card>Hello World</Card>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
