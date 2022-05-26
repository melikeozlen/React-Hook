import React, { useState } from 'react'

const Nesne = () => {
    const [kimlik, setKimlik] = useState({ isim: "Melike", soyisim: "Ozlen" })
    return (
        <div>
            <input
                type="text"
                value={kimlik.isim}
                onChange={(e) => setKimlik({...kimlik, isim: e.target.value })}
                placeholder='isim' />


            <input
                type="text"
                value={kimlik.soyisim}
                onChange={(e) => setKimlik({...kimlik, soyisim: e.target.value })} // {kimlik state'ini aynen getir ama soyisimi değiştir. Yoksa state tam taşınmıyor}
                placeholder='soy isim' />
            <div>isim: {kimlik.isim}</div>
            <div>Soyisim: {kimlik.soyisim}</div>
        </div>
    )
}

export default Nesne