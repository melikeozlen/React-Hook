import React, { useState } from 'react'

const Kitaplar = () => {
    const [kutuphane, setKutuphane] = useState([
        { adi: "İstanbul hatırası", yazari: "Ahmet Ümit", basim: "2010" },
        { adi: "1984", yazari: "George Orwel", basim: "1948" },
        { adi: "Şeker Portakalı", yazari: "Vasconcelos", basim: "1990" }
    ])
    const [kitap, setKitap] = useState({ adi: "", yazari: "", basim: "" })
    const ekleKitap =()=>{
        setKutuphane([...kutuphane,kitap])
        setKitap({adi:"",yazari:"",basim:""})
    }
    
    return (
        <div >
            <input type="text"
                value={kitap.adi}
                placeholder="kitap adı..."
                onChange={(e) => setKitap({ ...kitap, adi: e.target.value })}
            />

            <input type="text"
                value={kitap.yazari}
                placeholder="kitap yazarı..."
                onChange={(e) => setKitap({ ...kitap, yazari: e.target.value })}
            />

            <input type="text"
                value={kitap.basim}
                placeholder="kitap basım tarihi..."
                onChange={(e) => setKitap({ ...kitap, basim: e.target.value })}
            />
            <button onClick={ekleKitap}>EKLE</button>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    kutuphane.map((kitap, index) => {
                        return (
                            <div key={index} style={{ backgroundColor: "lightpink", border: "1px solid black", padding: "1rem" }}>
                                <h5>Kitap Adı: {kitap.adi}</h5>
                                <h5>Kitap Yazarı: {kitap.yazari}</h5>
                                <h6>Kitap Basim Tarihi: {kitap.basim}</h6>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Kitaplar