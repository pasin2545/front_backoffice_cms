import { Button } from "@mui/material"
import { Data_of_product } from "./MuiTextField";
import { useState } from "react";

//const 

export const MuiButton = () => {
    const [clickedButton, setClickedButton] = useState('');
    

    return (
        <div>
            <Button variant='contained' onClick={() => alert()}>Confirm</Button>
        </div>
    )
}