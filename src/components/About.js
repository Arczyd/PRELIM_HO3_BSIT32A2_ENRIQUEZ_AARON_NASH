import React from "react";

function AboutPage({ message }) {
  const messageLines = message.split("\n");

  return (
    <div className="about-page hero">
      <h1>About Coffee AST</h1>
      {messageLines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}
export default AboutPage;
