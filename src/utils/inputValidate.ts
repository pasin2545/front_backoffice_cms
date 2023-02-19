function isFloat(n: number) {
    return n === n && n % 1 !== 0;
}
function isInt(n: number) {
    return n % 1 === 0;
}

const regex: RegExp = /[^A-Za-z]/ig;
const regex2: RegExp = /[0-9]/;

export const checkName = (name: string)=> {
    const error = [];
    if (name.match(regex)) {
        error.push("Name must not contain special letters");
    }
    return error
}
export const checkPrice = (price: string)=> {
    const error = []
    let num1 = parseFloat(price)
    if (!price.match(regex2)) {
        error.push("Price must only be number");
    }
    if (!isFloat(num1)) {
        error.push("Price must be in format xx.xx");
    }
    return error
}
export const checkAmount = (amount: string)=> {
    const error = [];
    
    let num2 = parseInt(amount)
    if (!isInt(num2)) {
        error.push("Amount must be integer");
    }
    if (!amount.match(regex2)) {
        error.push("Amount must be in number format");
    }
    // if (Description.length > 200) {
    //     error.push("Description too long")
    // }
    return error;
}
