import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals'
import MockParentElement from './Search.mocks'

it('Renders input box', () => {

    render(<MockParentElement/>)

    const inputEl = screen.getByRole('textbox')

    expect(inputEl).toBeInTheDocument()

})

it('Changes values when typed into input box', () => {
    let testEvent = { target: { value: 'Cadbury'}}

    render(<MockParentElement/>)

    const inputEl = screen.getByRole('textbox')

    fireEvent.change(inputEl, testEvent)

    expect(inputEl).toBeInTheDocument()
    expect(inputEl.value).toEqual('Cadbury')

} )