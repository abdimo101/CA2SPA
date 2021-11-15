import { useState, useEffect } from "react";
import facade from "../apiFacade";
import "../index.css";
import chuck from "./chucknorris.jpg";

function AllApis({facade}) {
  const [joke, setJoke] = useState({ joke: '', ref: ''});
  const [BCrypto, setBCrypto] = useState({ crypto: '', ref: ''});
  const [ETHCrypto, setETHCrypto] = useState({ crypto: '', ref: ''});
  const [DOGE, setDOGE] = useState({ crypto: '', ref: ''});
  const [LTC, setLTC] = useState({ crypto: '', ref: ''});
  const [XRP, setXRP] = useState({ crypto: '', ref: ''});
  
  const updates = (data) => {
    setBCrypto({crypto: data.ticker.tickers[0].from, ref: data.ticker.tickers[0].price});
    setETHCrypto({crypto: data.ticker.tickers[1].from, ref: data.ticker.tickers[1].price});
    setDOGE({crypto: data.ticker.tickers[2].from, ref: data.ticker.tickers[2].price});
    setXRP({crypto: data.ticker.tickers[4].from, ref: data.ticker.tickers[4].price});
    setLTC({crypto: data.ticker.tickers[3].from, ref: data.ticker.tickers[3].price});
    setJoke({joke: data.joke.value, ref: data.joke.url});
    
  }


  useEffect(() => {
      facade.fetchData('crypto/tworemoteservers', updates);
  }, [facade])

  

  return (
    <div className="background2">
    <h1>All API's</h1>
    <h2>Jokes</h2>
      {joke.joke}
    <h2>Cryptocurrencies</h2>
    <ul>
     <li> prisen på {BCrypto.crypto} er: {BCrypto.ref}</li>
     <li> prisen på {ETHCrypto.crypto} er: {ETHCrypto.ref}</li>
     <li> prisen på {DOGE.crypto} er: {DOGE.ref}</li>
     <li> prisen på {LTC.crypto} er: {LTC.ref}</li>
     <li> prisen på {XRP.crypto} er: {XRP.ref}</li>

    </ul>
    <img src={chuck} class="responsive"/>
    </div>
  )
}

export default AllApis;
