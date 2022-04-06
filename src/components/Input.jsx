import React, { useState } from "react";
import { display } from "../utils/address";
import Error from "./Error";

function Input() {
  const [error, setError] = useState("");
  const [bal, setBal] = useState("");

  const handleDistributeSubmit = (e) => {
    e.preventDefault();

    //this is your input value
    const arrayInput = e.target.arrayInput.value;

    if (!arrayInput) {
      setError("An address array is required");
      setTimeout(() => {
        setError("");
      }, 1500);
      return;
    }

    const addresses = arrayInput.split(",");

    //check your addresses from the console
    console.log(addresses);

    //this set your input value to empty after clicking
    e.target.arrayInput.value = "";
  };

  const handleBalanceSubmit = (e) => {
    e.preventDefault();

    //this is your input value
    const balanceInput = e.target.balance.value;

    //check your input value from the console
    console.log(balanceInput);

    if (!balanceInput) {
      setError("An address is required");
      setTimeout(() => {
        setError("");
      }, 1000);
    }

    //this set your input value to empty after clicking
    e.target.balance.value = "";
    setBal(20000);
  };
  return (
    <div className="flex flex-col max-w-2xl mx-auto overflow-auto px-4 overflow-hidden">
      {bal && (
        <h2 className="text-center text-2xl my-2 text-blue-900 ">
          Your balance is {bal}
        </h2>
      )}

      <form className="form text-center mb-4" onSubmit={handleDistributeSubmit}>
        <Error error={error} />
        <input
          className="input"
          placeholder="Seperate address with a comma..."
          name="arrayInput"
        />
        <button className="button">Distribute Token</button>
      </form>

      <form className="form text-center mb-4" onSubmit={handleBalanceSubmit}>
        <Error error={error} />
        <input
          className="input"
          placeholder="Enter your address to view your balance"
          name="balance"
        />

        <button className="button">View Balance</button>
      </form>

      <div className="relative shadow-md sm:rounded-lg overflow-auto">
        <table className="w-full text-sm text-left text-gray-500">
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
            {display.map((x, i) => (
              <tr
                key={i}
                className="bg-white border-b hover:cursor-pointer hover:bg-gray-200 "
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {i}
                </th>
                <td className="px-6 py-4">{x.address}</td>
                <td className="px-6 py-4">{x.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="flex items-center"></div> */}
    </div>
  );
}

export default Input;
