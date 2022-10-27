


import React from 'react'

import { useDispatch, useSelector } from 'react-redux'


import Card from '@mui/joy/Card'


import Button from '@mui/joy/Button'
import Typography from '@mui/joy/Typography'

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'

import { setPage } from 'src/store/pageSlice'


import { MAX_RESULTS } from 'src/constants/main'



import type { RootState } from 'src/store/store'



interface NavigationPanelProps {
    totalItems: number
}




const NavigationPanel: React.FC<NavigationPanelProps> = (props) => {


    const { totalItems } = props

    const dispatch = useDispatch()
    const currentPage: number = useSelector((state: RootState) => state.page.value)



    const updatePage = React.useCallback((increment: number): void => {

        const newPage = currentPage + increment
        const condition = (newPage > 0) && (newPage <= totalItems)

        condition && dispatch(setPage(newPage))

    }, [currentPage, totalItems])


    const handleClickBackward: React.MouseEventHandler<HTMLAnchorElement> = () => {

        updatePage(-1)
    }

    const handleClickForward: React.MouseEventHandler<HTMLAnchorElement> = () => {

        updatePage(1)
    }

    const handleFirstPage: React.MouseEventHandler<HTMLAnchorElement> = () => {

        dispatch(setPage(1))
    }


    return <React.Fragment>

        <Card
            component="li"
            sx={{ minWidth: 800, flexGrow: 1, gap: 2, justifyContent: 'center' }}
            row
        >

            <Button
                variant="soft"
                startDecorator={<KeyboardDoubleArrowLeftIcon />}
                onClick={handleFirstPage}
            >
                First page
            </Button>

            <Button
                variant="soft"
                startDecorator={<KeyboardArrowLeftIcon />}
                onClick={handleClickBackward}
            >
                Previous page
            </Button>

            <Typography level="h2">{currentPage}</Typography>

            <Button
                variant="soft"
                endDecorator={<KeyboardArrowRightIcon />}
                onClick={handleClickForward}
            >
                Next page
            </Button>

        </Card>

    </React.Fragment>
}



export default NavigationPanel
