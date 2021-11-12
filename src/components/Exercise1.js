import { useState, useEffect } from "react";
import facade from "../apiFacade";

function Exercise1(props) {
  return (
    <div>
      <h1>Crypto coin price</h1>
      {/*{props.facade
        .getCrypto()
      .then((data) => alert(JSON.stringify(data.tickers.from)))}*/}
      {alert(props.facade.getCrypto())}
    </div>
  );
}

export default Exercise1;
