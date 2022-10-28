


import React from 'react'

import { useDispatch } from 'react-redux'


import Box from '@mui/joy/Box'
import CircularProgress from '@mui/joy/CircularProgress'

import Typography from '@mui/joy/Typography'


import SearchBlock from 'src/screens/Home/SearchBlock'
import BooksList from 'src/screens/Home/BooksList'

import NavigationPanel from 'src/components/NavigationPanel'


import useBooksLoader from 'src/hooks/useBooksLoader'


import { setTotalItems, setLastPageFlag } from 'src/store/pageSlice'









const Home: React.FC = () => {

    const dispatch = useDispatch()

    const { loading, books, totalItems, page, isLastPage } = useBooksLoader()



    const navigationPanel = React.useMemo<JSX.Element | null>(() => {

        return totalItems ? (<NavigationPanel />) : null

    }, [totalItems])



    React.useEffect(() => {

        if (page == 1) {

            dispatch(setTotalItems(totalItems))
        }
    }, [page, totalItems])



    React.useEffect(() => {

        dispatch(setLastPageFlag(isLastPage))

    }, [isLastPage])



    return <React.Fragment>

        <SearchBlock />


        {navigationPanel}


        {loading && <Box
            component="li"
            sx={{ display: 'flex', p: 7, m: 0, justifyContent: 'center' }}
        >

            <CircularProgress size="lg" />
        </Box>}


        {Boolean(books) && <BooksList books={books} />}

        {!books && !loading && <Box
            component="li"
            sx={{ display: 'flex', p: 7, m: 0, justifyContent: 'center' }}
        >

            <Typography level="body1">{'No results found'}</Typography>
        </Box>}

        {navigationPanel}

    </React.Fragment>
}



export default Home
