


import React from 'react'

import { useDispatch, useSelector } from 'react-redux'


import Card from '@mui/joy/Card'


import Button from '@mui/joy/Button'
import Typography from '@mui/joy/Typography'

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'


import { setPage } from 'src/store/pageSlice'




import type { RootState } from 'src/store/store'






const NavigationPanel: React.FC = () => {


    const dispatch = useDispatch()


    const { totalItems, value: currentPage, isLastPage } = useSelector((state: RootState) => state.page)



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


    const isNextPageDisabled = React.useMemo<boolean>(() => (currentPage >= totalItems) || isLastPage, [currentPage, isLastPage])

    const isPreviousPageDisabled = React.useMemo<boolean>(() => (currentPage <= 1), [currentPage])


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
                disabled={isPreviousPageDisabled}
            >
                First page
            </Button>


            <Button
                variant="soft"
                startDecorator={<KeyboardArrowLeftIcon />}
                onClick={handleClickBackward}
                disabled={isPreviousPageDisabled}
            >
                Previous page
            </Button>


            <Typography level="h4">{currentPage}</Typography>


            <Button
                variant="soft"
                endDecorator={<KeyboardArrowRightIcon />}
                onClick={handleClickForward}
                disabled={isNextPageDisabled}
            >
                Next page
            </Button>

        </Card>

    </React.Fragment>
}



export default NavigationPanel
