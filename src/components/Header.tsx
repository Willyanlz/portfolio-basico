"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const ROLES = [
  "Desenvolvedor Web",
  "Criador de Sites",
  "Especialista em Ecommerce",
  "Full Stack Developer",
];

export default function Header() {
  const textRef = useRef<HTMLSpanElement>(null);
  const idxRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    let t: ReturnType<typeof setTimeout>;

    const fn = () => {
      const role = ROLES[idxRef.current];

      if (!deletingRef.current) {
        charRef.current++;
        el.textContent = role.substring(0, charRef.current);
        if (charRef.current === role.length) {
          t = setTimeout(() => { deletingRef.current = true; fn(); }, 2000);
          return;
        }
        t = setTimeout(fn, 80 + Math.random() * 60);
      } else {
        charRef.current--;
        el.textContent = role.substring(0, charRef.current);
        if (charRef.current === 0) {
          deletingRef.current = false;
          idxRef.current = (idxRef.current + 1) % ROLES.length;
          t = setTimeout(fn, 400);
          return;
        }
        t = setTimeout(fn, 40 + Math.random() * 40);
      }
    };

    t = setTimeout(fn, 800);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section" id="inicio">
      <div className="hero-grid">
        <div className="hero-avatar-wrap">
          <div className="hero-avatar">
            <Image src="/image/perfil.jpeg" alt="Willyan Genaro" width={140} height={140} priority />
          </div>
        </div>
        <div className="hero-content">
          <h1>Willyan Genaro</h1>
          <p className="hero-subtitle">
            <span className="typewriter-wrap">
              <span ref={textRef} className="typewriter-text"></span>
              <span className="typewriter-cursor">|</span>
            </span>
          </p>
          <p className="hero-description">
            Há <strong>4 anos</strong> transformando ideias em soluções digitais. Crio <strong>sites profissionais</strong>, landing pages de alto impacto, e-commerces completos e sistemas de gestão empresarial que fazem seu negócio crescer.
          </p>
          <div className="hero-actions">
            <a href="https://wa.me/5516997760515" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <i className="fab fa-whatsapp"></i> Solicitar Orçamento
            </a>
            <button onClick={() => scrollTo("servicos")} className="btn-secondary">
              Ver Serviços <i className="fas fa-arrow-down"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}