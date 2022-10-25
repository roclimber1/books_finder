


import React from 'react'

import { useNavigate, useParams } from 'react-router-dom'


import Button from '@mui/joy/Button'





const Book = () => {

    const { id } = useParams()
    const navigate = useNavigate()


    return <React.Fragment>
        Book {id}<br /><br />

        <Button onClick={() => navigate(-1)}>Go back</Button>
    </React.Fragment>
}


export default Book
