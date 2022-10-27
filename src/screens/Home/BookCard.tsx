


import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'


import { BOOK_DEFAULT_SRC, BOOK_DEFAULT_SRC_SET } from 'src/constants/main'


import AspectRatio from '@mui/joy/AspectRatio'

import Button from '@mui/joy/Button'
import Card from '@mui/joy/Card'

import CardContent from '@mui/joy/CardContent'


import Typography from '@mui/joy/Typography'


import { setPrevious } from 'src/store/searchSlice'





import type { Book } from 'src/interfaces/main'






interface BookCardProps {
    book: Book
}




const BookCard: React.FC<BookCardProps> = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()


    const { book } = props
    const { id, volumeInfo } = book ?? {}

    const { title, authors, imageLinks } = volumeInfo ?? {}
    const { thumbnail, smallThumbnail } = imageLinks ?? {}




    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = () => {

        dispatch(setPrevious())
        navigate(`/book/${id}`)
    }


    return (
        <Card variant="outlined" sx={{ width: 320 }}>


            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                {title}
            </Typography>


            <Typography level="body2">{authors?.join(', ')}</Typography>


            <CardContent sx={{ display: 'flex', flexDirection: 'column-reverse' }}>

                <Button
                    variant="solid"
                    size="sm"
                    color="primary"
                    aria-label={`Explore ${title}`}
                    sx={{ ml: 'auto', fontWeight: 600 }}
                    onClick={handleClick}
                >
                    Explore
                </Button>

                <AspectRatio minHeight="400px" maxHeight="500px" sx={{ my: 2 }}>
                    <img
                        src={smallThumbnail ?? BOOK_DEFAULT_SRC}
                        srcSet={thumbnail ?? BOOK_DEFAULT_SRC_SET}
                        loading="lazy"
                        alt={title}
                    />
                </AspectRatio>

            </CardContent>
        </Card>
    )
}



export default BookCard
