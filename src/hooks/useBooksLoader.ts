


import booksAPI, { BOOKS_CACHE_KEY } from 'src/services/booksAPI'




import type { Book, GetListResults, GetListParameters } from 'src/interfaces/main'

import type { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, MutationDefinition } from '@reduxjs/toolkit/dist/query'





interface useBooksLoaderResults {
    books: Array<Book>
    getBooksList: MutationTrigger<MutationDefinition<GetListParameters, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, GetListResults, 'booksAPI'>>
    loading: boolean
}



const useBooksLoader = (): useBooksLoaderResults => {


    const [
        getBooksList,
        {
            isLoading: loading,
            data: responseData
        }
    ] = booksAPI .useGetListMutation({ fixedCacheKey: BOOKS_CACHE_KEY })


    const { items: books } = (responseData as GetListResults) ?? {}


    return { books, getBooksList, loading }
}



export default useBooksLoader
