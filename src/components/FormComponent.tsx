import { useState } from 'react'
import { Stack, Button, Select } from '@mui/material'
import { checkAmount, checkName, checkPrice } from '../utils/inputValidate'
import { TextField } from './TextField'

export const FormComponent = () => {
    const [name_product_value, set_name_Value] = useState('');
    const [price_product_value, set_price_Value] = useState('');
    const [Amount_value, set_amount_Value] = useState('');
    const [age, setAge] = useState('');

    const [errors,setErrors] = useState<{
        name: string[],
        amount: string[],
        price: string[],
    }>({
        name: [],
        amount: [],
        price: [],
    })
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setErrors({
            name: checkName(name_product_value),
            amount: checkPrice(Amount_value),
            price: checkAmount(price_product_value),
        })
    }

    return (
        <form onSubmit={onSubmit} >
            <Stack direction="column" sx={{ alignItems: 'center' }} spacing={2} >
                <TextField label={"Name"} errors={errors.name} input={name_product_value} setInput={set_name_Value} />
                <TextField label={"Price"} errors={errors.price} input={price_product_value} setInput={set_price_Value} />
                <TextField label={"Amount"} errors={errors.amount} input={Amount_value} setInput={set_amount_Value} />
                <Select label={"Type"} />
                <Button type="submit" variant='contained' >submit</Button>
            </Stack>
        </form>
    )
}