import { useState } from 'react'
import InputBox from './Components/InputBox'
import BringCurrencyinfo from './hooks/BringCurrencyInfo'
import './App.css'

function App() {

  let [Amount , SetAmount] = useState(0);
  let [FromCurrency , SetFromCurrency] = useState('inr');
  let [toCurrency , SetToCurrency] = useState('usd');
  let [ConvertAmount , SetConvertedAmount] = useState(0);

  let CurrencyInfo = BringCurrencyinfo(FromCurrency);
  let CurrencyOptions = Object.keys(CurrencyInfo);

  function swap(){
    SetAmount(ConvertAmount);
    SetConvertedAmount(Amount);
    SetFromCurrency(toCurrency);
    SetToCurrency(FromCurrency);
  }

  function Conversion(){
    SetConvertedAmount(Amount*CurrencyInfo[toCurrency]);
  }
    

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           Conversion(); 
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                              Amount={Amount}
                              OnAmountChange={(res)=>(SetAmount(res))}
                              CurrencyOption={CurrencyOptions}
                              OnCurrencyChange={(res)=>(SetFromCurrency(res))}
                              SelectedCurrency= {FromCurrency}
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
                              Amount={ConvertAmount}
                              OnAmountChange={(res)=>(SetAmount(res))}
                              CurrencyOption={CurrencyOptions}
                              OnCurrencyChange={(res)=>(SetToCurrency(res))}
                              SelectedCurrency= {toCurrency}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  }

export default App
