import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Error from './Error'

it('Renders the 404 text on the page', () => {

    render(<Error />)

    const errorEl = screen.getByText('404 - No Page Found!')

    expect(errorEl).toBeInTheDocument()

}) 