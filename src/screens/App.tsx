


import React from 'react'



const { API_KEY } = process.env



const App = () => {

    return <React.Fragment>Small application working with Google Books API. Available: search, description review.<br />{API_KEY}</React.Fragment>
}


export default App
