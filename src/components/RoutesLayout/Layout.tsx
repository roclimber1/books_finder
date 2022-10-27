


import React from 'react'


import Box from '@mui/joy/Box'

import Header from 'src/components/Header'






export interface LayoutProps {
    children?: React.ReactNode
}





const Layout: React.FC<LayoutProps> = (props) => {

    const { children } = props


    return <React.Fragment>

        <Box
            component="ul"
            sx={{ gap: 2, flexWrap: 'wrap', p: 0, m: 2 }}
        >
            <Header />

            {children}

        </Box>


    </React.Fragment>
}



export default Layout
