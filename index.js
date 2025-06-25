
import React from "react";

export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Veigo Admin Paneli</h1>
      <div style={{ background: "#f2f2f2", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <h3>Toplam Yolculuk</h3>
        <p>0</p>
      </div>
      <div style={{ background: "#f2f2f2", padding: "1rem", borderRadius: "8px", marginBottom: "1rem" }}>
        <h3>Toplam Sürücü</h3>
        <p>0</p>
      </div>
      <div style={{ background: "#f2f2f2", padding: "1rem", borderRadius: "8px" }}>
        <h3>Toplam Firma</h3>
        <p>0</p>
      </div>
    </div>
  );
}
