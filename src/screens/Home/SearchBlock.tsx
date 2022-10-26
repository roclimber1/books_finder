


import React from 'react'


import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'

import TextField from '@mui/joy/TextField'






interface SearchBlockProps {
    setSearch: React.Dispatch<React.SetStateAction<string>>
}




const SearchBlock: React.FC<SearchBlockProps> = (props) => {


    const { setSearch } = props



    const handleTextChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {

        const { value } = event.target

        setSearch(value)
    }



    return <React.Fragment>


        <Card component="li" sx={{ minWidth: 800, flexGrow: 1 }}>

            <CardContent>

                <TextField
                    color="neutral"
                    disabled={false}
                    variant="soft"
                    size="md"
                    onChange={handleTextChange}
                />

            </CardContent>
        </Card>

    </React.Fragment>
}


export default SearchBlock
