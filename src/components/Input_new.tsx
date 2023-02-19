import { useState } from "react"
// import { MuiButton} from "./MuiButton";
//
//function isFloat(n){
//    return Number(n) === n && n % 1 !== 0;
//}
//function isInt(n) {
//    return n % 1 === 0;
// }
// const regex: RegExp = /[a-zA-Z0-9]/g;
// const regex2 : RegExp2 = /[0-9];
// const value = name_product_value;
// function CheckInput(Name, Price, Amount, Description){
//      const error =[];
//     if(Name.match(regex)){
//         error.push("Name must not contain special letters");
//     }
//     if(!Price.match(regex2)){
//         error.push("Price must only be number");
//      }
//      if(!isFloat(Price)){
//          error.push("Price must be in format xx.xx");
//      }
//      if(!isInt(Amount)){
//          error.push("Amount must be integer");
//      }
//      if(!Amount.match(regex2)){ 
//      error.push("Amount must be in number format");
//      }
//      if(Description > 200){
//      error.push("Description too long")
//      }
//  return error;
// }