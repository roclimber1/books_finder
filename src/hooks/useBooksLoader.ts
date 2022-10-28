

import React from 'react'

import { useSelector } from 'react-redux'


import booksAPI from 'src/services/booksAPI'


import useDebounce from 'src/hooks/useDebounce'



import { MAX_RESULTS } from 'src/constants/main'




import type { Book, GetListResults } from 'src/interfaces/main'

import type { DefaultCallback } from 'src/hooks/useDebounce'
import type { RootState } from 'src/store/store'





interface UseBooksLoaderResults {
    books: Array<Book>
    loading: boolean
    totalItems: number
    page: number
    isLastPage: boolean
}



const useBooksLoader = (): UseBooksLoaderResults => {

    const currentPage: number = useSelector((state: RootState) => state.page.value)
    const { value: text, subject } = useSelector((state: RootState) => state.search)


    const [search, setSearch] = React.useState<string>(text)
    const [page, setPage] = React.useState<number>(currentPage)



    const getQueryString = (text: string, subject: string): string => {

        const queryString: string = (subject && text) ? `${text}+subject:${subject}` : text

        return queryString
    }



    useDebounce<string, DefaultCallback<string>>({
        value: text,
        callback: (text: string) => {

            const queryString = getQueryString(text, subject)

            setSearch(queryString)
        }
    })


    useDebounce<number, DefaultCallback<number>>({
        value: currentPage,
        callback: (newPage: number) => {

            setPage(newPage)
        }
    })


    useDebounce<string, DefaultCallback<string>>({
        value: subject,
        callback: (subjectString: string) => {

            const queryString = getQueryString(text, subjectString)

            setSearch(queryString)
        }
    })


    const {
        data: responseData,
        isLoading: loading
    } = booksAPI.useGetBooksQuery({ search, page }, { skip: !search })


    const { items: books, totalItems } = (responseData as GetListResults) ?? {}


    const isLastPage = React.useMemo<boolean>(() => {

        return (books?.length < MAX_RESULTS)

    }, [books])


    return { books, loading, totalItems, page, isLastPage }
}



export default useBooksLoader
