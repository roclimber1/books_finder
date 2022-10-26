


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'




import type { GetListResults } from '../interfaces/main'





const KEEP_UNUSED_DATA_FOR = 3600
const BASE_URL = 'https://www.googleapis.com'


const URLS = {
    GET_LIST: '/books/v1/volumes'
}






interface GetListParameters {
    search: string
}






const { API_KEY } = process.env




const booksAPI = createApi({

    reducerPath: 'booksAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    keepUnusedDataFor: KEEP_UNUSED_DATA_FOR,


    endpoints: (build) => ({

        /**
         * Выполняет запрос на загрузку списка книг
         */
        getList: build.mutation<GetListResults, GetListParameters>({
            query: (data) => {

                const { search } = data ?? {}


                return {
                    url: URLS.GET_LIST,
                    method: 'GET',
                    params: {
                        q: search,
                        key: API_KEY
                    }
                }
            }
        })

    })

})




export default booksAPI
