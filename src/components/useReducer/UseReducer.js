//Js de Reduce. Bir fonksiyonu tüm Arraye uygular sonunda tek bir değer döndürür.
//const number =[10, 20, 30, 40];
//const topla =(ilkdeger, ikincideger)=> ilkdeger+ikincideger;
//console.log(numbers.reduce(topla));
//Sonuc:100

//console.log(numbers.reduce(topla, 50));
//Sonuc:150

import React, { useReducer } from 'react'

const initialState = 0;
const reducerim = (state, action) => {
    switch (action) {
        case "arttir":
            return state + 1
        case "arttir5":
            return state + 5
        case "azalt":
            return state - 1
        case "azalt5":
            return state - 5

        case "res":
            return initialState
    }
}


const UseReducer = () => {
    const [sayac, dispatch] = useReducer(reducerim, initialState)  //1. uyg. istediğim fonk + 2. başlangıç stati + 3. 
    return (
        <div>
            <div>Sayac: {sayac}</div>
            <button onClick={() => dispatch("arttir")}>+</button>
            <button onClick={() => dispatch("arttir5")}>+5</button>
            <button onClick={() => dispatch("azalt")}>-</button>
            <button onClick={() => dispatch("azalt5")}>-5</button>
            <button onClick={() => dispatch("res")}>RES</button>
        </div>
    )
}

export default UseReducer