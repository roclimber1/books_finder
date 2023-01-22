


import React from 'react'


import Button from '@mui/joy/Button'

import Input from '@mui/joy/Input'
import Tooltip from '@mui/joy/Tooltip'

import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import FormHelperText from '@mui/joy/FormHelperText'


import BackspaceIcon from '@mui/icons-material/Backspace'




interface SearchInputProps {
    value: string
    handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    startDecorator?: JSX.Element
    handleClear: React.MouseEventHandler<HTMLAnchorElement>
    label?: string
    helperText?: string
}




const SearchInput: React.FC<SearchInputProps> = (props) => {


    const { value, handleChange, startDecorator = null, handleClear, label, helperText } = props



    return <React.Fragment>

        <FormControl>

            {Boolean(label) && <FormLabel>{label}</FormLabel>}

            <Input
                color="neutral"
                value={value}
                disabled={false}
                variant="soft"
                size="md"
                onChange={handleChange}
                startDecorator={startDecorator}

                endDecorator={<Tooltip title="Clear" variant="solid">
                    <Button
                        aria-label="Clear"
                        variant="plain"
                        color="neutral"
                        onClick={handleClear}
                    >
                        <BackspaceIcon />
                    </Button>
                </Tooltip>}
            />

            {Boolean(helperText) && <FormHelperText>{helperText}</FormHelperText>}

        </FormControl>

    </React.Fragment>
}


export default SearchInput
