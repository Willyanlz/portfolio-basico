export default function Contact() {
  return (
    <div className="card contact-card" id="contato">
      <div className="contact-content">
        <h2><i className="fas fa-envelope"></i> Vamos conversar?</h2>
        <p>Solicite um orçamento gratuito sem compromisso. Respondo em até 24 horas.</p>
        <div className="contact-info">
          <a href="mailto:willyangenaro4321@gmail.com">
            <i className="fas fa-envelope"></i> willyangenaro4321@gmail.com
          </a>
          <a href="tel:+5516997760515">
            <i className="fas fa-phone"></i> (16) 99776-0515
          </a>
        </div>
        <a href="https://wa.me/5516997760515" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
          <i className="fab fa-whatsapp"></i> Fale comigo agora!
        </a>
      </div>
    </div>
  );
}