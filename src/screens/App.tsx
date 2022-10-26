


import React from 'react'

import { Route, Routes, HashRouter } from 'react-router-dom'


import Home  from './Home/Home'
import Book from './Book'



interface UrlList {
    [x: string]: string
}


const URL_LIST: UrlList = {
    HOME: '/',
    BOOK_ID: '/book/:id'
}



const App = (): JSX.Element => {


    return <HashRouter>

        <Routes>

            <Route path={URL_LIST.HOME} element={<Home />} />

            <Route path={URL_LIST.BOOK_ID} element={<Book />} />

        </Routes>

    </HashRouter>
}



export default App
