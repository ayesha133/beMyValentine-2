import { useState } from "react";
import "./App.css";
import drawing from './uploads/IMG_7031.jpg'

export default function App() {
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showCounterModal, setShowCounterModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rejectCount, setRejectCount] = useState(0);

  const rejectionMessages = [
    "Rejecting me {count} times is crazy..",
    "YOU LITERALLY HATE ME",
    "HELLO?? I LOVE YOU PLS",
    "GIRL??",
    "Drowning in my tears rn",
    "WHAT DO YOU MEAN \"{input}\"?!"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return; // Prevent submission if no option is selected

    if (input.toLowerCase() !== "yes") {
      const newCount = rejectCount + 1;
      setRejectCount(newCount);
      if (newCount > 2) {
        setShowCounterModal(true);
      } else {
        setShowModal(true);
      }
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="container">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="form-container">
          <h1 className="title">Will YuYu be my valentine?</h1>
          <select
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="dropdown"
          >
            <option value="">Select an answer</option>
            <option value="yes">Yes hehehaha</option>
            <option value="no">No</option>
            <option value="Wouldn't you like to know">Wouldn't you like to know</option>
            <option value="Don't ask questions you don't want the answer to">Don't ask questions you don't want the answer to</option>
            <option value="No because you hate me">No because you hate me</option>
            <option value="Yawn">Yawn</option>
          </select>
          <button type="submit" className="submit-button" disabled={!input}>Submit</button>
          <img 
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW5lenZyZHI5OXM2eW95b3pmMG40cWVrMDhtNjVuM3A4dGNxa2g2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VM1fcpu2bKs1e2Kdbj/giphy.gif"
            alt="Cute animated gif"
            className="bottom-gif"
          />
        </form>
      ) : (
        <div>
          <div className="form-container">
          <img 
              src={drawing}
              alt="Happy"
              className="bears-drawing"
            />
            <h2 className="title">YAYY TOGETHER FOREVER IN EVERY UNIVERSE</h2>
          </div>
          <img 
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmo3c3l5ODh3ZGN6NHhhaDE2Mjg1ZjkwOXczdDFxbWM3dTBtaW9zaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9XY4f3FgFTT4QlaYqa/giphy.gif"
              alt="Excited Gif"
              className="bottom-right-gif"
            />
        </div>
      )}

      {/* First Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-text">WHAT DO YOU MEAN "{input}"?!</h2>
            <button onClick={() => setShowModal(false)} className="exit-button">Try Again</button>
          </div>
        </div>
      )}

      {/* Counter Modal */}
      {showCounterModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-text">
              {rejectionMessages[(rejectCount - 3) % rejectionMessages.length].replace("{count}", rejectCount).replace("{input}", input)}
            </h2>
            <button onClick={() => setShowCounterModal(false)} className="exit-button">Try Again</button>
          </div>
        </div>
      )}
    </div>
  );
}
