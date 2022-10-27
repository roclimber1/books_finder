


import React from 'react'


import Box from '@mui/joy/Box'

import BookCard from 'src/screens/Home/BookCard'



import type { Book } from 'src/interfaces/main'





interface BooksListProps {
    books: Array<Book>
}



const BooksList: React.FC<BooksListProps> = (props) => {

    const { books } = props




    const booksBlock = React.useMemo<Array<JSX.Element> | null>(() => {

        return books ? books?.map((book) => {

            const { id } = book

            return <React.Fragment key={id}>

                <BookCard book={book} />
            </React.Fragment>

        }) : null

    }, [books])



    return (<React.Fragment>

        <Box
            component="div"
            sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 4, m: 0 }}
        >

            {booksBlock}
        </Box>

    </React.Fragment>)
}



export default BooksList
