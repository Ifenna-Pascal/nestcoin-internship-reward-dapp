import React, {useState} from "react";
import { display } from "../utils/address";

function Input() {
    const [input, setInput] = useState('');
    const [array, setArray] = useState("");
    const [error, setError] = useState('');
    const [nulls, setNull] = useState('');
    const handleClick = () => {
        if(!array) {
            setError('An address array is required')
            setTimeout(() => {
                setError('')
            }, 1000)
        }
        const addresses = array.split(',');
        console.log(addresses);
    } 
    const handleInput = ()=> {
        if(!input) {
            setNull('An adderess is required')
            setTimeout(() => {
                setNull('')
            }, 1000)
        }
    }
  return (
    <div className="lg:max-w-[50%] max-w-[95%] my-12 mx-auto flex flex-col item-center">
    {
        error && <span className="text-red-400 text-base mb-3 px-3">{error}</span>
    }
      <input
        className="input"
        placeholder="Seperate addreses with a comma..."
        onChange={(e) => setArray(e.target.value) }
        required
      />
      <button className="button" onClick={handleClick}>
        Distribute Token
      </button>
      <div className="relative my-8 overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    S/N
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>
                <th scope="col" className="px-6 py-3">
                    Balance
                </th>
            </tr>
        </thead>
        <tbody>
          {
              display.map((x, i) => (
                <tr key={i} className="bg-white border-b hover:cursor-pointer hover:bg-gray-200 ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {i}
                </th>
                <td className="px-6 py-4">
                    {x.address}
                </td>
                <td className="px-6 py-4">
                    {x.balance}
                </td>
            </tr>
              ))
          }
        </tbody>
    </table>
    </div>
    <div className="grid grid-cols-3 my-12">
        <div className="col-span-2 flex flex-col">
        {
            nulls && <span className="text-red-400 text-base mb-3 px-3">{nulls}</span>
        }
            <input className="inputs py-1" placeholder="Enter an address" onChange={(e) => setInput(e.target.value) } />
            <button className="button py-1" onClick={handleInput}>View Balance</button> 
        </div>
        <div className="flex items-center">
          <h1 className="text-4xl font-bold text-gray-600 max-w-[50%] mx-auto">20</h1>
        </div>
    </div>
    </div>
  );
}

export default Input;
