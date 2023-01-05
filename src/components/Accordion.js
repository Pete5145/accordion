import React, {useState} from 'react'

function Accordion(props) {  
  const [isShown, setIsShown] = useState(false);

  function toggleAccordion() {
        setIsShown(prevIsShown => !prevIsShown);
  }

  return (
    <div className="accordion">
    <div className='header'>
      <h4>{props.question}</h4>
      <button onClick={toggleAccordion}>{isShown ? '-' : '+'}</button>
    </div>
      {isShown && <p>{props.answer}</p>}
    </div>
  );
}

export default Accordion;