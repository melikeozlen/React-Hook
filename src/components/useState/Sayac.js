import React, { useState } from 'react'

const Sayac = () => {
    const initialState = 0;
    const initialState2 = 5;
    const [sayac, setSayac] = useState(0); //useState(initialState);
    //Setstate'in içine istediğin bir değişkeni verebilirsin o onun sayaçolduğunu anlar. (prewState için)
    const [sayac2, setSayac2] = useState(initialState2);
    return (
        <div>
            <h4>Sayaç-1 : {sayac}</h4>
            <button onClick={() => setSayac(prewState => prewState + 1)}>+1</button>
            <button onClick={() => setSayac(prewState => prewState - 1)}>1</button>
            <button onClick={() => setSayac(initialState)}>RESET</button>
           
            <h4>Sayaç-2 : {sayac2}</h4>
            <button onClick={() => setSayac2(prewState => prewState + 1)}>+1</button>
            <button onClick={() => setSayac2(prewState => prewState - 1)}>1</button>
            <button onClick={() => setSayac2(initialState2)}>RESET</button>
        </div>
    )
}

export default Sayac