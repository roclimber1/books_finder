


import React from 'react'


import BookCard from './BookCard'



import type { Book } from '../../interfaces/main'





interface BooksListProps {
    books: Array<Book>
}



const BooksList: React.FC<BooksListProps> = (props) => {

    const { books } = props




    const booksBlock = React.useMemo<Array<JSX.Element>>(() => {

        return books ? books?.map((book) => {

            const { id } = book

            return <React.Fragment key={id}>

                <BookCard book={book} />
            </React.Fragment>

        }) : null

    }, [books])



    return (<React.Fragment>

        {booksBlock}

    </React.Fragment>)
}



export default BooksList
