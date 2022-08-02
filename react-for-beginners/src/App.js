import { useState, useEffect } from "react";
import styles from "./Label.module.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);
  const [coin_price, setCoinPrice] = useState(1);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const dollarChange = (event) => {
    setDollar(event.target.value);
    console.log(dollar);
  };
  const coinChange = (event) => {
    setCoinPrice(event.target.value);
    console.log(coin_price);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <div>
            <label className={styles.label} for="coin-select">
              <strong>Choose Coin!</strong>
            </label>
            <select id="coin-select" onChange={coinChange}>
              <option>Select Coin!</option>
              {coins.map((coin, index) => (
                <option value={coin.quotes.USD.price} key={index}>
                  {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
                </option>
              ))}
            </select>
          </div>
          <div className={styles.div}>
            <label for="dollar" className={styles.second}>
              Enter the money you have
            </label>
            <input
              onChange={dollarChange}
              value={dollar}
              id="dollar"
              type="number"
            />
            $
          </div>
          <div className={styles.div}>You can buy {dollar / coin_price}</div>
        </div>
      )}
    </div>
  );
}

export default App;
