import { useState } from "react";
import "./index.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // const step = 3;

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button
              bgColor="#7950f1"
              textColor="#fff"
              // text="Previous"
              onClick={handlePrevious}
              // emoji=""
            >
              <span>👈</span> Previous
            </Button>

            <Button
              bgColor="#7950f1"
              textColor="#fff"
              // text="Next"
              onClick={handleNext}
              // emoji=""
            >
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: { bgColor }, color: { textColor } }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

//Children prop is a prop that each react component automatically receives
//and the value of children prop is exactly what is between opening and
//closing tag of the component .
//children prop is predefined keyword in React
//It makes coomponents truly reusable

//An empty hole that can be filled by any JSX the component receives as children
//we can write anything beteeen opening and closing tag of the component we are using
//they are accessible by props.children
