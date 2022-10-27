


import React from 'react'


import Box from '@mui/joy/Box'
import CircularProgress from '@mui/joy/CircularProgress'


import Header from 'src/components/Header'
import SearchBlock from 'src/screens/Home/SearchBlock'

import BooksList from 'src/screens/Home/BooksList'


import useDebounce from 'src/hooks/useDebounce'


import useBooksLoader from 'src/hooks/useBooksLoader'





const Home = (): JSX.Element => {

    const [search, setSearch] = React.useState<string>('')

    const { getBooksList, loading, books } = useBooksLoader()


    useDebounce({
        search,
        callback: (text) => {

            Boolean(text) && getBooksList({ search: text })
        }
    })


    return <React.Fragment>

        <SearchBlock setSearch={setSearch} />


        {loading && <Box
            component="li"
            sx={{ display: 'flex', p: 7, m: 0, justifyContent: 'center' }}
        >

            <CircularProgress size="lg" />
        </Box>}


        <BooksList books={books} />

    </React.Fragment>
}



export default Home
