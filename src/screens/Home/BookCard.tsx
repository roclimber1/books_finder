


import React from 'react'

import { useNavigate } from 'react-router-dom'


import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'

import Button from '@mui/joy/Button'
import Card from '@mui/joy/Card'

import Typography from '@mui/joy/Typography'








import { Book } from '../../interfaces/main'






interface BookCardProps {
    book: Book
}




const BookCard: React.FC<BookCardProps> = (props) => {

    const navigate = useNavigate()


    const { book } = props
    const { id, volumeInfo } = book ?? {}

    const { title, authors, subtitle, publishedDate, imageLinks } = volumeInfo ?? {}
    const { thumbnail, smallThumbnail } = imageLinks ?? {}




    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {

        navigate(`/book/${id}`)
    }


    return (
        <Card variant="outlined" sx={{ width: 320 }}>


            <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                {title}
            </Typography>


            <Typography level="body2">{subtitle}</Typography>
            <Typography level="body2">{authors?.join(', ')}</Typography>
            <Typography level="body2">{publishedDate}</Typography>


            <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                <img
                    src={smallThumbnail}
                    srcSet={thumbnail}
                    loading="lazy"
                    alt={title}
                />
            </AspectRatio>


            <Box sx={{ display: 'flex' }}>

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
            </Box>
        </Card>
    )
}



export default BookCard
