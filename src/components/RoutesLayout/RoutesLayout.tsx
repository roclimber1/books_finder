


import React from 'react'
import { Outlet } from 'react-router-dom'


import Layout from 'src/components/RoutesLayout/Layout'



import type { LayoutProps } from 'src/components/RoutesLayout/Layout'




const RoutesLayout: React.FC<LayoutProps> = props => {


    return <Layout {...props}>

        <Outlet />

    </Layout>
}



export default RoutesLayout
