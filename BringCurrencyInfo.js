import { useState, useEffect } from "react";

function BringCurrencyinfo(currency){
    let [data , setData] = useState({});
    useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((info)=> info.json())
    .then((info) =>{setData(info[currency])})
    
    },[currency]
    )
    return data;
}

export default BringCurrencyinfo ;