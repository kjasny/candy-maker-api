import React from 'react'
import ManufacturersList from './ManufacturersList'
import { BrowserRouter } from 'react-router-dom'

const mockManufacturers = [
    {
      "id": 1,
      "name": "August Storck KG",
      "country": "DE",
      "createdAt": "2023-07-04T00:25:26.000Z",
      "updatedAt": "2023-07-04T00:25:26.000Z",
      "deletedAt": null,
      "products": [
        {
          "id": 1,
          "name": "Mamba",
          "yearIntroduced": "1953-01-01",
          "manufacturerId": 1,
          "createdAt": "2023-07-04T00:25:27.000Z",
          "updatedAt": "2023-07-04T00:25:27.000Z",
          "deletedAt": null
        }
      ]
    },
    {
      "id": 2,
      "name": "Cadbury",
      "country": "UK",
      "createdAt": "2023-07-04T00:25:26.000Z",
      "updatedAt": "2023-07-04T00:25:26.000Z",
      "deletedAt": null,
      "products": [
        {
          "id": 2,
          "name": "Caramello",
          "yearIntroduced": "1976-01-01",
          "manufacturerId": 2,
          "createdAt": "2023-07-04T00:25:27.000Z",
          "updatedAt": "2023-07-04T00:25:27.000Z",
          "deletedAt": null
        },
        {
          "id": 3,
          "name": "Creme Egg",
          "yearIntroduced": "1923-01-01",
          "manufacturerId": 2,
          "createdAt": "2023-07-04T00:25:27.000Z",
          "updatedAt": "2023-07-04T00:25:27.000Z",
          "deletedAt": null
        },
        {
          "id": 4,
          "name": "Mini Eggs",
          "yearIntroduced": "1967-01-01",
          "manufacturerId": 2,
          "createdAt": "2023-07-04T00:25:27.000Z",
          "updatedAt": "2023-07-04T00:25:27.000Z",
          "deletedAt": null
        },
        {
          "id": 5,
          "name": "Sour Patch Kids",
          "yearIntroduced": "1985-01-01",
          "manufacturerId": 2,
          "createdAt": "2023-07-04T00:25:27.000Z",
          "updatedAt": "2023-07-04T00:25:27.000Z",
          "deletedAt": null
        }
      ]
    }
]

const MockManufacturersList = () => {
    return (
        <BrowserRouter>
            <ManufacturersList manufacturers={mockManufacturers}/>
        </BrowserRouter>
    )
}

export default MockManufacturersList