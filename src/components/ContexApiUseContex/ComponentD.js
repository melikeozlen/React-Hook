import React, {useContext} from 'react'
import {oldContex} from "../../components/ContexApi/NewContex"

//Componentda ki bilgiyi çekmek ile alakalı. Yine bilgiler Provider ile göderilir.
const ComponentD = () => {
    const bilgi =useContext(oldContex);
  return (
    <div>
    <h1>ComponentD</h1>
    <p> useContext : {bilgi}</p>
    </div>
  )
}

export default ComponentD