"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <i className="fas fa-code"></i> Willyan Genaro
        </a>

        <button className={`hamburger ${open ? "ham-open" : ""}`} onClick={() => setOpen(!open)} aria-label="Abrir menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-links ${open ? "nav-open" : ""}`}>
          <button onClick={() => scrollTo("servicos")}>Serviços</button>
          <button onClick={() => scrollTo("habilidades")}>Habilidades</button>
          <button onClick={() => scrollTo("contato")}>Contato</button>
          <button className="navbar-cta" onClick={() => scrollTo("contato")}>
            <i className="fab fa-whatsapp"></i> Fale comigo
          </button>
        </div>
      </div>
    </nav>
  );
}
