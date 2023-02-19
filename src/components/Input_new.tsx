import { useState } from "react"
import { MuiTextField } from "./MuiTextField";

function isFloat(n: number) {
    return n === n && n % 1 !== 0;
}
function isInt(n: number) {
    return n % 1 === 0;
}

const regex: RegExp = /[a-zA-Z0-9]/g;
const regex2: RegExp = /[0-9]/;


function CheckInput(Name = "Prayut", Price = "123.3", Amount = "23", Description = "Yin") {
    const error = [];
    if (Name.match(regex)) {
        error.push("Name must not contain special letters");
    }
    let num1 = parseFloat(Price)
    if (!Price.match(regex2)) {
        error.push("Price must only be number");
    }
    if (!isFloat(num1)) {
        error.push("Price must be in format xx.xx");
    }
    let num2 = parseInt(Amount)
    if (!isInt(num2)) {
        error.push("Amount must be integer");
    }
    if (!Amount.match(regex2)) {
        error.push("Amount must be in number format");
    }
    if (Description.length > 200) {
        error.push("Description too long")
    }
    return error;
} export default CheckInput;