export default function About() {
  return (
    <div className="card">
      <span className="section-tag"><i className="fas fa-user"></i> Sobre mim</span>
      <div className="about-wrap">
        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">4+</div>
            <div className="stat-label">Anos de Experiência</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projetos Entregues</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Clientes Satisfeitos</div>
          </div>
        </div>
        <p className="about-text">
          Olá, sou <strong>Willyan Genaro</strong>, desenvolvedor web há <strong>4 anos</strong>. 
          Ajudo empreendedores e empresas a terem presença digital de verdade — com 
          <strong> sites modernos</strong>, <strong>landing pages que convertem</strong>, 
          <strong> lojas virtuais completas</strong> e <strong>sistemas sob medida</strong> para organizar e fazer o negócio crescer.
        </p>
        <p className="about-text">
          Meu trabalho é traduzir suas ideias em soluções digitais funcionais, bonitas e que 
          entregam resultado. Cada projeto é pensado do zero para atender às suas necessidades 
          específicas, com foco em performance, design e usabilidade.
        </p>
      </div>
    </div>
  );
}