


import React from 'react'

import { useNavigate } from 'react-router-dom'


import Button from '@mui/joy/Button'
import TextField from '@mui/joy/TextField'



const { API_KEY } = process.env



const Home = () => {

    const navigate = useNavigate()


    return <React.Fragment>
        Small application working with Google Books API. Available: search, description review.<br /><br />

        <Button onClick={() => navigate('/book/31')}>Book - 31</Button>

        <br /><br />

        <TextField
            color="warning"
            disabled={false}
            size="md"
        />
    </React.Fragment>
}


export default Home
