export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <i className="fas fa-code"></i> Willyan Genaro
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/willyanlz/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://github.com/Willyanlz" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
          <a href="https://t.me/willyanlz" target="_blank" rel="noopener noreferrer" title="Telegram"><i className="fab fa-telegram"></i></a>
          <a href="mailto:willyangenaro4321@gmail.com" title="Email"><i className="fas fa-envelope"></i></a>
        </div>
        <div className="footer-copy">&copy; {new Date().getFullYear()} &mdash; Todos os direitos reservados</div>
      </div>
    </footer>
  );
}