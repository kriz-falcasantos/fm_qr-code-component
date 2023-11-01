import "./App.css";
import QRCode from "./components/QRCode";

function App() {
  return (
    <div className="container">
      <div className="content">
        <QRCode />

        <h1 className="title">
          Improve your front-end skills by building projects
        </h1>
        <p className="subtitle">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
