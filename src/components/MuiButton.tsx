import { Button } from "@mui/material"
import { useState } from "react";
import React from "react";

//const 



export const MuiButton: React.FC<{ xxx: string }> = ({xxx}) => {
    const [clickedButton, setClickedButton] = useState('');
    

    return (
        <div>
            {xxx}
            <Button variant='contained' onClick={() => alert()}>Confirm {xxx}</Button>
        </div>
    )
}