

import React from 'react'

import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'


import { CssVarsProvider } from '@mui/joy/styles'

import CssBaseline from '@mui/joy/CssBaseline'



import App from 'src/screens/App'

import store from 'src/store/store'


import 'src/index.scss'




const baseContainer: HTMLElement | null = document.getElementById('root')






/**
 * Обёртка для рендеринга React-компонент
 * @param {React.ReactNode} children
 * @param {HTMLElement} container
 */
export const makeRendering = (children: React.ReactNode, container = baseContainer): void => {

    const root = createRoot(container as HTMLElement)

    root.render(children)
}



makeRendering(<CssVarsProvider>
    <CssBaseline />

    <Provider store={store}>
        <App />
    </Provider>

</CssVarsProvider>)
