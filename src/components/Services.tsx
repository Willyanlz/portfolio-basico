export default function Services() {
  const services = [
    {
      icon: "fas fa-globe",
      title: "Criação de Sites",
      desc: "Sites institucionais, portfólios e blogs profissionais. Presença digital completa para seu negócio se destacar online.",
    },
    {
      icon: "fas fa-file-alt",
      title: "Landing Pages",
      desc: "Páginas de alto impacto para campanhas, lançamentos e captura de leads. Feitas para converter visitantes em clientes.",
    },
    {
      icon: "fas fa-shopping-cart",
      title: "E-commerces",
      desc: "Lojas virtuais completas para vender online. Integração com meios de pagamento, gestão de estoque e muito mais.",
    },
    {
      icon: "fas fa-chart-line",
      title: "Sistemas Empresariais",
      desc: "Sistemas de gestão sob medida: controle de clientes, vendas, financeiro, estoque e relatórios gerenciais.",
    },
    {
      icon: "fas fa-paint-brush",
      title: "Web Design",
      desc: "Design moderno e responsivo que transmite profissionalismo. Interface pensada para a melhor experiência do usuário.",
    },
  ];

  return (
    <div className="card" id="servicos">
      <span className="section-tag"><i className="fas fa-bolt"></i> Serviços</span>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.title} className="service-card">
            <div className="service-icon">
              <i className={s.icon}></i>
            </div>
            <div className="service-info">
              <strong>{s.title}</strong>
              <span>{s.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}