import {render, screen} from '@testing-library/react'
import Card from './Card'
  
describe('Card', () => {
    it('renders', () => {
        render(<Card />)
        expect(screen.getByText('Card')).toBeInTheDocument()
    })
})
      