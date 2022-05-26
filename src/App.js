import React from 'react'
import "./App.css"
import ComponentA from './components/ContexApiFirst/ComponentA'
import { newContex } from './components/ContexApi/NewContex'
import { oldContex } from './components/ContexApi/NewContex'
import ComponentD from './components/ContexApiUseContex/ComponentD'
import Sayac from './components/useState/Sayac'
import Nesne from './components/useState/Nesne'
import Array from './components/useState/Array'
import Kitaplar from './components/useState/Kitaplar'
import UseEffectSayac1 from './components/useEffect/UseEffectSayac1'
import UseReducer from './components/useReducer/UseReducer'
const App = () => {
  return (
    <>
      <h1>CONTEX API AND HOOK</h1>
      <h2 >CONTEX API</h2>
      <div className='main'>
        <div className='contexapi'>

          <oldContex.Provider value="old context">
            <newContex.Provider value="new contex">
              <h3>Context API First method!</h3>
              <ComponentA />
              <h3>Context API Sec. method!(useContext Hook)</h3>
              <ComponentD />
            </newContex.Provider>
          </oldContex.Provider>

        </div>
        <h2 >HOOK</h2>
        <div className='hook'>

          <h3><b>USE STATE</b> Sadece bir sayı alırsa.</h3>
          <Sayac />
          <hr></hr>
          <hr></hr>
          <h3>useState Nesne alırsa.</h3>
          <Nesne />
          <hr></hr>
          <hr></hr>
          <h3>useState Array alırsa.</h3>
          <Array />
          <hr></hr>
          <hr></hr>
          <h4>Kitaplar Projesi</h4>
          <Kitaplar />
          <hr></hr>
          <hr></hr>
          <h3>USE EFFECT</h3>
          <h4>Sayaç projesi</h4>
          <UseEffectSayac1 />
          <hr></hr>
          <hr></hr>
          <h3>USE REDUCER</h3>
          <h4>Sayaç projesi</h4>
          <UseReducer />
        </div>


      </div>
    </>
  )
}

export default App
