


import React from 'react'

import { useSelector } from 'react-redux'


import Box from '@mui/joy/Box'
import CircularProgress from '@mui/joy/CircularProgress'


import SearchBlock from 'src/screens/Home/SearchBlock'

import BooksList from 'src/screens/Home/BooksList'


import useDebounce, { DefaultCallback } from 'src/hooks/useDebounce'
import useBooksLoader from 'src/hooks/useBooksLoader'


import NavigationPanel from 'src/components/NavigationPanel'




import type { RootState } from 'src/store/store'





const Home: React.FC = () => {

    const page: number = useSelector((state: RootState) => state.page.value)
    const search: string = useSelector((state: RootState) => state.search.value)


    const { getBooksList, loading, books, totalItems } = useBooksLoader()


    useDebounce<string, DefaultCallback<string>>({
        value: search,
        callback: (text: string) => {

            Boolean(text) && getBooksList({ search: text, page })
        }
    })


    useDebounce<number, DefaultCallback<number>>({
        value: page,
        callback: (newPage: number) => {

            Boolean(search) && getBooksList({ search, page: newPage })
        }
    })


    const navigationPanel = React.useMemo<JSX.Element | null>(() => {

        return totalItems ? (<NavigationPanel
            totalItems={totalItems}
        />) : null

    }, [totalItems])




    return <React.Fragment>

        <SearchBlock />

        {navigationPanel}

        {loading && <Box
            component="li"
            sx={{ display: 'flex', p: 7, m: 0, justifyContent: 'center' }}
        >

            <CircularProgress size="lg" />
        </Box>}


        <BooksList books={books} />

        {navigationPanel}

    </React.Fragment>
}



export default Home
