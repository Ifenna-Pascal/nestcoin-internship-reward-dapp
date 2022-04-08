import React from "react";

function Nav() {
  return (
    <nav className="flex justify-between items-center  mb-6 px-4 bg-yellow-300">
      <h1 className="text-gray-600 font-bold text-2xl font-sans lg:text-4xl">
        Next_Reward
      </h1>

      <button className="button">Connect Wallet</button>
    </nav>
  );
}

export default Nav;
