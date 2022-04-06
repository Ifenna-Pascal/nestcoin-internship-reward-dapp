import React from "react";

function Nav() {
  return (
    <nav className="lg:max-w-[50%]  mx-auto flex items-center px-4 lg:px-0 py-4 lg:py-8 justify-between">
      <div className="flex items-center">
        <h1 className="text-gray-600 font-bold text-2xl font-sans lg:text-4xl">Nest_Reward</h1>
      </div>
      <div className="flex items-center">
        <button className="button">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}

export default Nav;
