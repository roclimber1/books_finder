


import React from 'react'

import { useDispatch, useSelector } from 'react-redux'



import Box from '@mui/joy/Box'

import Card from '@mui/joy/Card'

import SearchIcon from '@mui/icons-material/Search'


import { setSearch, clearSearch, setSubject, clearSubject } from 'src/store/searchSlice'
import { setPage } from 'src/store/pageSlice'


import SearchInput from 'src/components/SearchInput'




import type { RootState } from 'src/store/store'




const SearchBlock: React.FC = () => {


    const dispatch = useDispatch()
    const { value: search, subject } = useSelector((state: RootState) => state.search)


    const handleTextChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {

        const { value } = event.target

        dispatch(setSearch(value))
    }


    const handleClear: React.MouseEventHandler<HTMLAnchorElement> = () => {

        dispatch(clearSearch())
        dispatch(setPage(1))
    }


    const handleSubjectChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {

        const { value } = event.target

        dispatch(setSubject(value))
    }


    const handleSubjectClear: React.MouseEventHandler<HTMLAnchorElement> = () => {

        dispatch(clearSubject())
        dispatch(setPage(1))
    }




    return <React.Fragment>


        <Card component="li" sx={{ minWidth: 800, flexGrow: 1 }}>


            <Box
                component="div"
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', m: 0, justifyContent: 'center' }}
            >

                <SearchInput
                    value={search}
                    label={'Search string'}
                    handleChange={handleTextChange}
                    startDecorator={<SearchIcon />}
                    handleClear={handleClear}
                />


                <SearchInput
                    value={subject}
                    label={'Subject'}
                    handleChange={handleSubjectChange}
                    handleClear={handleSubjectClear}
                    helperText={'Returns results where the text following this keyword is listed in the category list of the volume.'}
                />
            </Box>


        </Card>

    </React.Fragment>
}


export default SearchBlock
