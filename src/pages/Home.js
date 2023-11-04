import React from 'react';

const Home = () => {
  return (
    <div className={"flex flex-col h-[calc(100vh-80px)] bg-red-300 items-center justify-center space-y-2"}>
      <h1 className="text-3xl">This Is Home</h1>
      <div className={"flex flex-col space-y-2"}>
        <a href="/about" className="underline">Navigate to About</a> 
        <a href="/head-tail" className="underline">Navigate to Head & Tail</a>
      </div>
    </div>
  );
}

export default Home;
