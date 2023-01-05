import React from 'react';
import Accordion from "./components/Accordion";
import data from "./data";

export default function App() {

  return (
    <section className="container">
      <h3>Questions And Answers About Login</h3>
      {data.map((data) => (
        <Accordion 
          key={data.id}
          question={data.question}
          answer={data.answer}
        />
      ))}
    </section>
  );
}
