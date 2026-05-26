export default function SocialLinks() {
  return (
    <div className="card">
      <div className="social-wrap">
        <span className="section-tag"><i className="fas fa-share-nodes"></i> Redes Sociais</span>
        <div className="social-grid">
          <a href="https://www.linkedin.com/in/willyanlz/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://t.me/willyanlz" target="_blank" rel="noopener noreferrer" className="social-link" title="Telegram">
            <i className="fab fa-telegram"></i>
          </a>
          <a href="https://github.com/Willyanlz" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}