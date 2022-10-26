


import React from 'react'


import Card from '@mui/joy/Card'

import CardCover from '@mui/joy/CardCover'
import CardContent from '@mui/joy/CardContent'


import Typography from '@mui/joy/Typography'



import { SRC, SRC_SET } from '../../constants/main'










const Header = (): JSX.Element => {



    return (<React.Fragment>

        <Card component="li" sx={{ minWidth: 800, flexGrow: 1 }}>

            <CardCover>
                <img
                    src={SRC}
                    srcSet={SRC_SET}
                    loading="lazy"
                    alt=""
                />
            </CardCover>


            <CardContent>

                <Typography
                    level="h1"
                    fontWeight="lg"
                    textColor="#fff"
                    mt={{ xs: 12, sm: 18 }}
                >
                    Find your book
                </Typography>

            </CardContent>
        </Card>

    </React.Fragment>)
}




export default Header
