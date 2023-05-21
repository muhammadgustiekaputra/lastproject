import React from "react";

function Alert() {
  return (
    <div className="container">
      <div className="alert alert-link m-auto w-50 mt-2" style={{ color: "gray", padding: 2 }} role="alert">
        <marquee style={{ fontSize: 16 }}>Siapkan perut dan dompet anda!!!</marquee>
      </div>
    </div>
  );
}

export default Alert;