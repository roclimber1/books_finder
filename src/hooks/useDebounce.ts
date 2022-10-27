


import React from 'react'


import { DEFAULT_TIMEOUT } from 'src/constants/main'



interface UseDebounceParameters<Parameter, Callback> {
    value: Parameter
    callback: Callback
}

export type DefaultCallback<Parameter> = (value: Parameter) => void




function useDebounce<Parameter, Callback extends DefaultCallback<Parameter>>({ value, callback }: UseDebounceParameters<Parameter, Callback>): void {


    const [searchTimeout, setSearchTimeout] = React.useState<NodeJS.Timeout>(null)



    React.useEffect(() => {

        searchTimeout && clearTimeout(searchTimeout)

        setSearchTimeout(
            setTimeout(() => callback(value), DEFAULT_TIMEOUT)
        )

    }, [value])


    React.useEffect(() => () => searchTimeout && clearTimeout(searchTimeout))

}



export default useDebounce
