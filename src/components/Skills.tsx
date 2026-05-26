export default function Skills() {
  const skills = [
    { icon: "fab fa-js", label: "JavaScript" },
    { icon: "fab fa-wordpress", label: "WordPress" },
    { icon: "fab fa-angular", label: "Angular" },
    { icon: "fab fa-java", label: "Java" },
    { icon: "fab fa-github", label: "GitHub" },
    { icon: "fab fa-html5", label: "HTML" },
    { icon: "fab fa-css3-alt", label: "CSS" },
    { icon: "fab fa-bootstrap", label: "Bootstrap" },
    { icon: "fas fa-robot", label: "Inteligência Artificial" },
  ];

  return (
    <div className="card" id="habilidades">
      <span className="section-tag"><i className="fas fa-code"></i> Habilidades</span>
      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.label} className="skill-item" title={s.label}>
            <i className={s.icon}></i>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}