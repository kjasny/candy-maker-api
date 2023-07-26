import React, { useState } from 'react'
import Search from './Search'
import { BrowserRouter } from 'react-router-dom'

const MockParentElement = () => {
    const [search, setSearch] = useState('')

    return (
        <BrowserRouter>
            <Search search={search} setSearch={setSearch}/>
        </BrowserRouter>
    )

}

export default MockParentElement