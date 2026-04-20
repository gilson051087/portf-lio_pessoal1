import { useEffect, useState } from "react";

const navigation = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "expertise", label: "Expertise" },
  { id: "jornada", label: "Jornada" },
  { id: "contato", label: "Contato" },
];

const expertise = [
  {
    index: "01",
    title: "Front-end",
    description:
      "Interfaces responsivas com atenção à legibilidade, consistência visual e experiência do usuário.",
    items: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    index: "02",
    title: "Back-end",
    description:
      "Construção de lógica de aplicação, integração entre camadas e fundamentos para APIs e sistemas web.",
    items: ["Java", "Node.js", "Python", "C#"],
  },
  {
    index: "03",
    title: "Ferramentas",
    description:
      "Uso de ferramentas de versionamento, banco de dados e fluxo de desenvolvimento para evolução constante.",
    items: ["Git e GitHub", "SQL", "MongoDB", "AWS"],
  },
];

const timeline = [
  {
    date: "2024 - Atual",
    title: "Tecnologia em Desenvolvimento de Sistemas",
    institution: "Universidade Estácio",
    description:
      "Foco em desenvolvimento de software, arquitetura, requisitos e projetos práticos.",
  },
  {
    date: "2023",
    title: "Especialização em Desenvolvimento Web Full Stack",
    institution: "Digital Innovation One",
    description:
      "Estudos em React, TypeScript, Node.js, APIs REST, MongoDB e PostgreSQL.",
  },
  {
    date: "2024",
    title: "Certificação em Desenvolvimento Java",
    institution: "Alura",
    description:
      "Aprofundamento em POO, Spring, testes e desenvolvimento de APIs.",
  },
  {
    date: "2023",
    title: "Formação Python Developer",
    institution: "Udemy",
    description:
      "Base em automação, desenvolvimento web com Python e fundamentos de análise de dados.",
  },
];

const contacts = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gilson-rodrigo-elias-a74915179",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    label: "GitHub",
    href: "https://github.com/gilson051087",
    icon: "fa-brands fa-github",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5541999642855",
    icon: "fa-brands fa-whatsapp",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "-20% 0px -45% 0px",
      }
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          setVisibleSections((current) => ({
            ...current,
            [entry.target.dataset.revealId]: true,
          }));
        });
      },
      {
        threshold: 0.18,
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));
    document.querySelectorAll("[data-reveal-id]").forEach((element) => {
      revealObserver.observe(element);
    });

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const revealClass = (id) => (visibleSections[id] ? "reveal is-visible" : "reveal");

  return (
    <div className="page-shell">
      <header className="header">
        <nav className="nav-bar">
          <a className="brand" href="#inicio" aria-label="Ir para o início">
            <span className="brand-mark">GE</span>
            <span className="brand-text">Gilson Elias</span>
          </a>

          <button
            className={`menu-btn${menuOpen ? " is-open" : ""}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>

          <ul className={`nav-links${menuOpen ? " is-open" : ""}`} id="nav-links">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className={revealClass("hero-copy")} data-reveal-id="hero-copy">
            <p className="eyebrow">Desenvolvedor Full Stack em formação</p>
            <h1>
              Construo interfaces claras e soluções web com foco em estrutura,
              performance e evolução contínua.
            </h1>
            <p className="hero-text">
              Sou Gilson Elias. Estou desenvolvendo minha carreira em tecnologia com
              foco em aplicações modernas, código organizado e experiências digitais
              que transmitam credibilidade.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contato">
                Falar sobre oportunidades
              </a>
              <a
                className="button button-secondary"
                href="https://github.com/gilson051087"
                target="_blank"
                rel="noreferrer"
              >
                Ver GitHub
              </a>
            </div>
          </div>

          <aside className={revealClass("hero-panel")} data-reveal-id="hero-panel">
            <div className="portrait-frame">
              <img
                className="portrait-image"
                src="/images/eu.png"
                alt="Retrato de Gilson Elias"
              />
            </div>

            <div className="status-card">
              <span className="status-badge">Disponível para estágio e projetos</span>
              <div className="panel-block">
                <p className="panel-label">Foco atual</p>
                <p className="panel-value">Front-end moderno, APIs REST e Java</p>
              </div>
              <div className="panel-grid">
                <div>
                  <p className="panel-label">Base</p>
                  <p className="panel-value">HTML, CSS, JavaScript</p>
                </div>
                <div>
                  <p className="panel-label">Evolução</p>
                  <p className="panel-value">React, Node.js, SQL</p>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section id="sobre" className="section section-grid">
          <div className={revealClass("about-heading")} data-reveal-id="about-heading">
            <p className="eyebrow">Sobre mim</p>
            <div className="section-heading">
              <h2>Um perfil técnico em construção, com direção clara.</h2>
            </div>
          </div>

          <div className={`${revealClass("about-card")} about-card`} data-reveal-id="about-card">
            <p>
              Minha entrada na programação começou pela curiosidade de entender como
              sistemas e sites funcionam por trás da interface. Essa curiosidade virou
              rotina de estudo e prática.
            </p>
            <p>
              Hoje desenvolvo projetos com HTML, CSS, JavaScript e Java, enquanto
              amplio minha base em React, Node.js e bancos de dados. Tenho interesse
              em ambientes que valorizem consistência técnica, aprendizado rápido e
              entrega bem feita.
            </p>
            <p>
              Busco oportunidades em que eu possa crescer como desenvolvedor e
              contribuir com soluções objetivas, bem estruturadas e profissionais.
            </p>
          </div>
        </section>

        <section id="expertise" className="section">
          <div className={`${revealClass("expertise-heading")} section-heading`} data-reveal-id="expertise-heading">
            <p className="eyebrow">Expertise</p>
            <h2>Competências organizadas por área de atuação.</h2>
          </div>

          <div className="expertise-grid">
            {expertise.map((card) => (
              <article
                key={card.title}
                className={`${revealClass(`expertise-${card.index}`)} expertise-card`}
                data-reveal-id={`expertise-${card.index}`}
              >
                <p className="card-index">{card.index}</p>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="jornada" className="section">
          <div className={`${revealClass("timeline-heading")} section-heading`} data-reveal-id="timeline-heading">
            <p className="eyebrow">Jornada</p>
            <h2>Formação e trilha de aprendizado.</h2>
          </div>

          <div className="timeline">
            {timeline.map((item) => (
              <article
                key={`${item.date}-${item.title}`}
                className={`${revealClass(item.title)} timeline-item`}
                data-reveal-id={item.title}
              >
                <span className="timeline-date">{item.date}</span>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.institution}</p>
                  <span>{item.description}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="section contact-section">
          <div className={`${revealClass("contact-panel")} contact-panel`} data-reveal-id="contact-panel">
            <div>
              <p className="eyebrow">Contato</p>
              <h2>Vamos conversar sobre uma oportunidade ou projeto.</h2>
              <p className="contact-text">
                Se você procura alguém comprometido com evolução técnica e entrega
                organizada, estou aberto a novas conexões e conversas profissionais.
              </p>
            </div>

            <div className="contact-links">
              {contacts.map((contact) => (
                <a key={contact.label} href={contact.href} target="_blank" rel="noreferrer">
                  <i className={contact.icon} />
                  <span>{contact.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Gilson Elias. Portfólio pessoal.</p>
      </footer>
    </div>
  );
}

export default App;
