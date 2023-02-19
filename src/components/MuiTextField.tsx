import { InputAdornment, Stack, TextField, MenuItem } from "@mui/material"
import { Int } from "anchor-link";
import { type } from "os";
import { useState } from "react"

const currencies = [
    {
        value: 'Jean',
        label: 'Jean',
    },
    {
        value: 'Shirt',
        label: 'Shirt',
    },
    {
        value: 'Tank_top',
        label: 'Tanktop',
    },
    {
        value: 'sneakers',
        label: 'sneakers',
    },
];

export interface Data_of_product {
    name_product: string;
}

const [name_product_value, set_name_Value] = useState<Data_of_product>({name_product:''});
const [price_product_value, set_price_Value] = useState('')
const [Amount_value, set_amount_Value] = useState('')

//type name_product = ReturnType<typeof >

export const MuiTextField = () => {
    
    /*const LetterInput = (name_product_value?: string) =>
    name_product_value && !/(?=.*[A-Za-z]).*$/.test(name_product_value)
    ? "Must only be letter"
    : undefined;*/
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField
                    sx={{
                        width: 300
                    }}
                    label='Name'
                    required value={name_product_value}
                    onChange={e => set_name_Value(e.currentTarget.value)}
                    error={!name_product_value}
                    helperText={!name_product_value ? 'Require' : ''}
                />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField
                    sx={{
                        width: 300
                    }}
                    label='Price'
                    required value={price_product_value}
                    onChange={e => set_price_Value(e.currentTarget.value)}
                    error={!price_product_value}
                    helperText={!price_product_value ? 'Require' : 'Please input only number'}
                />

            </Stack>
            <Stack direction='column' spacing={2}>
                <TextField
                    sx={{
                        width: 300
                    }}
                    label='Amount'
                    InputProps={{
                        endAdornment: <InputAdornment position="end">฿</InputAdornment>
                    }}
                    required value={Amount_value}
                    onChange={e => set_amount_Value(e.currentTarget.value)}
                    error={!Amount_value}
                    helperText={!Amount_value ? 'Require' : 'Please input only number'}
                />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField
                    id="filled-select-currency"
                    select
                    label="Select"
                    defaultValue="EUR"
                    helperText="Please select your currency"
                    variant="filled"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField
                    sx={{
                        width: 300,
                    }}
                    id="outlined-textarea"
                    label="Description"
                    multiline
                />
            </Stack>
        </Stack>
    )
}


