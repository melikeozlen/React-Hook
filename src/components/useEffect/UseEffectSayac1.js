import React, { useEffect, useState } from 'react'

const useEffectSayac1 = () => {
    const [sayac, setSayac]=useState(0);
    const [isim, setIsim]=useState("");

    // useEffect(()=>{
    //     document.title=`${sayac} defa tıklandı`
    // })
    useEffect(()=>{
        console.log("güncelleme yapıldı")
        document.title=`${sayac} dfa tıklandı`
    },[sayac]) //sadece sayac sate güncellendiğinde çalış
  return (
    <div>
    <input type="text" value={isim} onChange={(e)=>setIsim(e.target.value)}/>
        <button onClick={()=> setSayac(sayac+1)}>{sayac} defa tıklandı.</button>
    </div>
  )
}

export default useEffectSayac1