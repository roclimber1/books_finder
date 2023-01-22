


import React from 'react'

import { useNavigate } from 'react-router-dom'


import coverImage from '../../images/cover.jpg'


import AspectRatio from '@mui/joy/AspectRatio'

import Button from '@mui/joy/Button'
import Card from '@mui/joy/Card'

import CardContent from '@mui/joy/CardContent'


import Typography from '@mui/joy/Typography'






import type { Book } from 'src/interfaces/main'






interface BookCardProps {
    book: Book
}




const BookCard: React.FC<BookCardProps> = (props) => {

    const navigate = useNavigate()


    const { book } = props
    const { id, volumeInfo } = book ?? {}

    const { title, authors, imageLinks } = volumeInfo ?? {}
    const { thumbnail, smallThumbnail } = imageLinks ?? {}




    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = () => {

        navigate(`/book/${id}`)
    }


    return (
        <Card variant="outlined" sx={{ width: 250 }}>


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

                <AspectRatio ratio="3/4" sx={{ my: 2 }}>
                    <img
                        src={smallThumbnail ?? coverImage}
                        alt={title}
                    />
                </AspectRatio>

            </CardContent>
        </Card>
    )
}



export default BookCard
