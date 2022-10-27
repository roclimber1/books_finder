


import React from 'react'

import { Route, Routes, HashRouter } from 'react-router-dom'


import Home  from 'src/screens/Home/Home'
import Book from 'src/screens/Book'


import RoutesLayout from 'src/components/RoutesLayout/RoutesLayout'



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

            <Route element={<RoutesLayout />}>

                <Route path={URL_LIST.HOME} element={<Home />} />

                <Route path={URL_LIST.BOOK_ID} element={<Book />} />

            </Route>

        </Routes>

    </HashRouter>
}



export default App
