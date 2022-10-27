


import React from 'react'


import { DEFAULT_TIMEOUT } from 'src/constants/main'



interface UseDebounceParameters<T> {
    search: string
    callback: T
}

type DefaultCallback = (search: string) => void




function useDebounce<T extends DefaultCallback>({ search, callback }: UseDebounceParameters<T>): void {


    const [searchTimeout, setSearchTimeout] = React.useState<NodeJS.Timeout>(null)



    React.useEffect(() => {

        searchTimeout && clearTimeout(searchTimeout)

        setSearchTimeout(
            setTimeout(() => callback(search), DEFAULT_TIMEOUT)
        )

    }, [search])


    React.useEffect(() => () => searchTimeout && clearTimeout(searchTimeout))

}



export default useDebounce
