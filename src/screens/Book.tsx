


import React from 'react'

import { useNavigate, useParams } from 'react-router-dom'


import coverImage from '../images/cover.jpg'


import Button from '@mui/joy/Button'
import Box from '@mui/joy/Box'

import Typography from '@mui/joy/Typography'
import Card from '@mui/joy/Card'

import AspectRatio from '@mui/joy/AspectRatio'



import useBooksLoader from 'src/hooks/useBooksLoader'




import type { SxProps } from '@mui/joy/styles/types'
import type { Book as BooksItem } from 'src/interfaces/main'





const TYPOGRAPHY_STYLE: SxProps = { mb: 0.5 }




const Book = () => {

    const { id } = useParams()
    const navigate = useNavigate()


    const { books } = useBooksLoader()


    const book = React.useMemo<BooksItem | null>(() => {

        return books.find((item) => (item.id == id)) ?? null

    }, [id])


    const { volumeInfo } = book ?? {}
    const { title, description, subtitle, publishedDate, imageLinks, authors } = volumeInfo ?? {}
    const { thumbnail, smallThumbnail } = imageLinks ?? {}



    const handleClick = (): void => {

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

                <Box sx={{ px: 2 }}>

                    <AspectRatio ratio="3/4" sx={{ width: 250 }}>
                        <img
                            src={smallThumbnail ?? coverImage}
                            alt={title}
                        />

                    </AspectRatio>
                </Box>


                <Box sx={{ px: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>

                    <Typography level="h2" fontSize="md" sx={TYPOGRAPHY_STYLE}>
                        {title}
                    </Typography>

                    <Typography level="h6" fontSize="md" sx={TYPOGRAPHY_STYLE}>
                        {authors?.join(', ')}
                    </Typography>

                    <Typography level="body2" sx={TYPOGRAPHY_STYLE}>{subtitle}</Typography>
                    <Typography level="body2" sx={TYPOGRAPHY_STYLE}>{publishedDate}</Typography>


                    <Typography level="body1" sx={TYPOGRAPHY_STYLE}>{description}</Typography>


                    <Box sx={{ display: 'flex', flexDirection: 'column-reverse', justifyItems: 'flex-end', height: '100%' }}>

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

                </Box>

            </Card>
        </Box>

    </React.Fragment>
}


export default Book
