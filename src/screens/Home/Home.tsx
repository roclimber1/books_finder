


import React from 'react'

import { useNavigate } from 'react-router-dom'


import Box from '@mui/joy/Box'


import Header from './Header'
import SearchBlock from './SearchBlock'



import useDebounce from '../../hooks/useDebounce'


import booksAPI from '../../services/booksAPI'





import type { GetListResults } from '../../interfaces/main'
import BooksList from './BooksList'






const Home = (): JSX.Element => {

    const navigate = useNavigate()



    const [search, setSearch] = React.useState<string>('')



    const [
        getBooksList,
        {
            isLoading: loading,
            data: responseData
        }
    ] = booksAPI.useGetListMutation()


    const { items: books } = (responseData as GetListResults) ?? {}


    useDebounce({
        search,
        callback: (text) => {

            console.debug('text', text)


            Boolean(text) && getBooksList({ search: text })
        }
    })


    return <React.Fragment>

        <Box
            component="ul"
            sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
        >
            <Header />

            <SearchBlock setSearch={setSearch} />

            <br />

            <BooksList books={books} />

        </Box>

    </React.Fragment>
}



export default Home
