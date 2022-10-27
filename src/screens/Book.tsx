


import React from 'react'

import { useNavigate, useParams } from 'react-router-dom'


import { BOOK_DEFAULT_SRC, BOOK_DEFAULT_SRC_SET } from 'src/constants/main'


import Button from '@mui/joy/Button'
import Box from '@mui/joy/Box'

import Typography from '@mui/joy/Typography'
import Card from '@mui/joy/Card'

import AspectRatio from '@mui/joy/AspectRatio'
import CardContent from '@mui/joy/CardContent'


import useBooksLoader from 'src/hooks/useBooksLoader'




import type { SxProps } from '@mui/joy/styles/types'





const TYPOGRAPHY_STYLE: SxProps = { mb: 0.5 }




const Book = () => {

    const { id } = useParams()
    const navigate = useNavigate()


    const { books } = useBooksLoader()


    const book = React.useMemo(() => {

        return books.find((item) => (item.id == id))

    }, [id])


    const { volumeInfo } = book ?? {}
    const { title, description, subtitle, publishedDate, imageLinks, authors } = volumeInfo ?? {}
    const { thumbnail, smallThumbnail } = imageLinks ?? {}



    /**
     *
     */
    function handleClick(): void {
        navigate(-1)
    }



    return <React.Fragment>

        <Box
            component="li"
            sx={{ p: 7, m: 0, justifyContent: 'center' }}
        >

            <Card
                row
                variant="outlined"
                sx={{ gap: 2 }}
            >

                <AspectRatio ratio="1" sx={{ width: 90 }}>
                    <img
                        src={smallThumbnail ?? BOOK_DEFAULT_SRC}
                        srcSet={thumbnail ?? BOOK_DEFAULT_SRC_SET}
                        loading="lazy"
                        alt={title}
                    />

                </AspectRatio>


                <CardContent sx={{ px: 2 }}>

                    <Typography level="h2" fontSize="md" sx={TYPOGRAPHY_STYLE}>
                        {title}
                    </Typography>

                    <Typography level="h6" fontSize="md" sx={TYPOGRAPHY_STYLE}>
                        {authors?.join(', ')}
                    </Typography>

                    <Typography level="body2" sx={TYPOGRAPHY_STYLE}>{subtitle}</Typography>
                    <Typography level="body2" sx={TYPOGRAPHY_STYLE}>{publishedDate}</Typography>


                    <Typography level="body1" sx={TYPOGRAPHY_STYLE}>{description}</Typography>


                    <Box sx={{ display: 'flex' }}>

                        <Button
                            variant="solid"
                            size="sm"
                            color="primary"
                            aria-label={`Explore ${title}`}
                            sx={{ ml: 'auto', fontWeight: 600 }}
                            onClick={handleClick}
                        >
                        Go back
                        </Button>
                    </Box>

                </CardContent>

            </Card>
        </Box>

    </React.Fragment>
}


export default Book
