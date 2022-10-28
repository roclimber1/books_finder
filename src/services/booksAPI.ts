


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { MAX_RESULTS } from 'src/constants/main'




import type { GetListResults, GetListParameters } from 'src/interfaces/main'




export const BOOKS_CACHE_KEY = 'BOOKS_LIST_KEY'


const KEEP_UNUSED_DATA_FOR = 3600
const BASE_URL = 'https://www.googleapis.com'



const URLS = {
    GET_LIST: '/books/v1/volumes'
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

                const { search, page = 1 } = data ?? {}
                const startIndex: number = ((page - 1) * MAX_RESULTS)


                return {
                    url: URLS.GET_LIST,
                    method: 'GET',
                    params: {
                        q: search,
                        key: API_KEY,
                        maxResults: MAX_RESULTS,
                        startIndex
                    }
                }
            }
        }),


        getBooks: build.query<GetListResults, GetListParameters>({
            query: (data) => {

                const { search, page = 1 } = data ?? {}
                const startIndex: number = ((page - 1) * MAX_RESULTS)


                return {
                    url: URLS.GET_LIST,
                    method: 'GET',
                    params: {
                        q: search,
                        key: API_KEY,
                        maxResults: MAX_RESULTS,
                        startIndex
                    }
                }
            }
        })

    })

})




export default booksAPI
