import { useState, useEffect } from "react";
import facade from "../apiFacade";
import bitcoin from "./bitcoin_background.jpg"
import "../index.css";


function Crypto({facade}) {
  const [BCrypto, setBCrypto] = useState({ crypto: '', ref: ''});
  const [ETHCrypto, setETHCrypto] = useState({ crypto: '', ref: ''});
  const [DOGE, setDOGE] = useState({ crypto: '', ref: ''});
  const [LTC, setLTC] = useState({ crypto: '', ref: ''});
  const [XRP, setXRP] = useState({ crypto: '', ref: ''});
  const updates = (data) => {
    //const johannes = data.tickers.map(cry => "" +cry.price+ ""  +cry.from+ "") 
    
    
    setBCrypto({crypto: data.tickers[0].from, ref: data.tickers[0].price});
    setETHCrypto({crypto: data.tickers[1].from, ref: data.tickers[1].price});
    setDOGE({crypto: data.tickers[2].from, ref: data.tickers[2].price});
    setLTC({crypto: data.tickers[3].from, ref: data.tickers[3].price});
    setXRP({crypto: data.tickers[4].from, ref: data.tickers[4].price});
  }


  useEffect(() => {
      facade.fetchData('crypto/all', updates);
  }, [facade])

  

  return (
    <div className="background2">
    
    <h1>Cryptocurrencies</h1>
    <ul>
     <li> prisen på {BCrypto.crypto} er: {BCrypto.ref}</li>
     <li> prisen på {ETHCrypto.crypto} er: {ETHCrypto.ref}</li>
     <li> prisen på {DOGE.crypto} er: {DOGE.ref}</li>
     <li> prisen på {LTC.crypto} er: {LTC.ref}</li>
     <li> prisen på {XRP.crypto} er: {XRP.ref}</li>

    </ul>

    <img src={bitcoin} class="responsive"/>

    </div>
  )
}

export default Crypto;
