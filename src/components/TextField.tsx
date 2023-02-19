import { InputAdornment, Stack, TextField as MuiTextField, MenuItem, Typography } from "@mui/material"
import { Int } from "anchor-link";
import { type } from "os";
import React, { Children } from "react";
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

export const TextField: React.FC<{ setInput: React.Dispatch<React.SetStateAction<string>>, input: string, errors: string[] , label: string}> = ({ setInput, input, errors , label }) => {

    return (
        <Stack direction='column'>

            <MuiTextField
                sx={{
                    width: 300
                }}
                label={label}
                required value={input}
                onChange={e => setInput(e.target.value)}
                error={!input}
                helperText={!input ? 'Require' : ''}
            />

            {errors.map(error => (
                <Typography variant="caption" color="red">{error}</Typography>
            ))
            }

        </Stack>
    )
}


