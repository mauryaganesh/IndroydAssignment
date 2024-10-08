import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./index.css";

const QRCodeDisplay = () => {
  const appUrl = "https://kbc-app-game.netlify.app/";

  return (
    <div className="qr-code">
      <h2>Scan the QR Code to Join</h2>
      <QRCodeCanvas value={appUrl} size={200} />
    </div>
  );
};

export default QRCodeDisplay;
