import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { expect } from '@jest/globals';
import MockManufacturersList from './manufacturersList.mocks';

it('Renders the div', () => {
    render(<MockManufacturersList/>)

    const divEl = screen.getByText('Cadbury (UK)')

    expect(divEl).toBeInTheDocument()

})

it('Displays the manufacturers correctly', () => {
    render(<MockManufacturersList/>)

    const mockManufacturerOne = screen.getByText('August Storck KG (DE)')
    const mockManufacturerTwo = screen.getByText('Cadbury (UK)')

    expect(mockManufacturerOne).toBeInTheDocument()
    expect(mockManufacturerTwo).toBeInTheDocument()

})

