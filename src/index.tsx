

import React from 'react'

import { createRoot } from 'react-dom/client'


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



makeRendering(<App />)
