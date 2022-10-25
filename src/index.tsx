

import React from 'react'

import { createRoot } from 'react-dom/client'


import { CssVarsProvider } from '@mui/joy/styles'

import CssBaseline from '@mui/joy/CssBaseline'



import App from './screens/App'




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

    <App />

</CssVarsProvider>)
