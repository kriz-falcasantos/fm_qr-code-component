import qr_code from "../assets/image-qr-code.png";
import "./QRCode.css";

function QRCode() {
  return (
    <>
      <img src={qr_code} className="qr-img" />
    </>
  );
}

export default QRCode;
