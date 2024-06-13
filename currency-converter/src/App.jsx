import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyApi from "./hooks/useCurrencyApi";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmt, setConvertedAmt] = useState(0);
  const minAmount = 0;
  const currencyInfo = useCurrencyApi(from);

  const options = Object.keys(currencyInfo);

  // console.log(options);
  useEffect(() => {
    if (amount <= minAmount) {
      setAmount(minAmount);
    }
  }, [amount]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmt(amount);
    setAmount(convertedAmt);
  };

  console.log(from, to);

  const convert = () => {
    console.log(amount);
    setConvertedAmt(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1681437746506-44891bf1dd85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <h1 className="text-3xl text-center py-3 pt-1 text-gray-700 uppercase font-semibold">
            Currency Converter
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(Number(amount))}
                selectedCurrency={from}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                  setAmount(amount);
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmt}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisable={true}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
