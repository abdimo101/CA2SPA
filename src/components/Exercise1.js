import { useState, useEffect } from "react";
import facade from "../apiFacade";


function Exercise1(props) {
 // let cryptos = [{from: "", price: ""}];

 // cryptos = props.getCrypto;


  

  return (
    <div>
      <h1>Crypto coin price</h1>
      <ul>
      {props.facade.getAllCrypto().then(data => data.tickers.map((ticker) =>(<div><li key={ticker.from}>  {ticker.from} + {ticker.price} </li></div>)))}
      </ul>
    </div>
  );
}

export default Exercise1;
