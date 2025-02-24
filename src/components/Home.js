import React from "react";

function Home() {
  return (
    <header className="hero">
      <h1>Welcome to Coffee AST</h1>
      <p>Where every sip is a journey of flavors.</p>
      <button onClick={() => alert("Navigating to Coffee Menu...")}>
        Discover More
      </button>
    </header>
  );
}

export default Home;
