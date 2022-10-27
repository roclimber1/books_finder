


import React from 'react'

import { useDispatch, useSelector } from 'react-redux'


import Button from '@mui/joy/Button'

import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'

import TextField from '@mui/joy/TextField'

import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'


import { setSearch, clear } from 'src/store/searchSlice'
import { setPage } from 'src/store/pageSlice'




import type { RootState } from 'src/store/store'




const SearchBlock: React.FC = () => {


    const dispatch = useDispatch()
    const search: string = useSelector((state: RootState) => state.search.value)


    const handleTextChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {

        const { value } = event.target

        dispatch(setSearch(value))
    }


    const handleClear: React.MouseEventHandler<HTMLAnchorElement> = () => {

        dispatch(clear())
        dispatch(setPage(1))
    }



    return <React.Fragment>


        <Card component="li" sx={{ minWidth: 800, flexGrow: 1 }}>

            <CardContent>

                <TextField
                    color="neutral"
                    value={search}
                    disabled={false}
                    variant="soft"
                    size="md"
                    onChange={handleTextChange}
                    startDecorator={<SearchIcon />}

                    endDecorator={<Button
                        aria-label="Clear"
                        variant="plain"
                        color="neutral"
                        onClick={handleClear}
                    >
                        <ClearIcon />
                    </Button>}
                />

            </CardContent>
        </Card>

    </React.Fragment>
}


export default SearchBlock
