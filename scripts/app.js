const { useEffect, useState } = React;

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  const offset = window.scrollY + rect.top - 80;
  window.scrollTo({ top: offset, behavior: "smooth" });
};

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const handleNavClick = (id) => {
    scrollToId(id);
    setMenuOpen(false);
  };

  return (
    <>
      <div className="banner">
        <div className="banner-inner">
          <i className="fa-solid fa-briefcase"></i>
          <span>
            <strong>À la recherche d&apos;une alternance</strong> en développement full stack (2
            semaines école / 3 semaines entreprise).
          </span>
        </div>
      </div>

      <header>
        <div className="container">
          <nav className="nav">
            <div className="nav-left">
              <div className="nav-logo">HB</div>
              <div className="nav-title">
                <span>Hamza Ben Alouane</span>
                <span>Dév. Web & Mobile – Cergy</span>
              </div>
            </div>

            <div className="nav-links">
              <button className="nav-link" onClick={() => handleNavClick("about")}>
                À propos
              </button>
              <button className="nav-link" onClick={() => handleNavClick("skills")}>
                Compétences
              </button>
              <button className="nav-link" onClick={() => handleNavClick("experience")}>
                Expériences
              </button>
              <button className="nav-link" onClick={() => handleNavClick("projects")}>
                Projets
              </button>
              <button className="nav-link" onClick={() => handleNavClick("contact")}>
                Contact
              </button>
            </div>

            <div className="nav-actions">
              <button className="nav-icon-btn" onClick={toggleTheme} aria-label="Changer de thème">
                {theme === "light" ? (
                  <i className="fa-solid fa-moon"></i>
                ) : (
                  <i className="fa-solid fa-sun"></i>
                )}
              </button>
              <button className="nav-cta" onClick={() => handleNavClick("contact")}>
                <i className="fa-solid fa-paper-plane"></i>
                Me contacter
              </button>
              <button
                className="nav-icon-btn burger-btn"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Menu mobile"
              >
                {menuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <div className="mobile-menu-title">Navigation</div>
              <button
                className="nav-icon-btn"
                onClick={() => setMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <button className="nav-link" onClick={() => handleNavClick("about")}>
              À propos
            </button>
            <button className="nav-link" onClick={() => handleNavClick("skills")}>
              Compétences
            </button>
            <button className="nav-link" onClick={() => handleNavClick("experience")}>
              Expériences
            </button>
            <button className="nav-link" onClick={() => handleNavClick("projects")}>
              Projets
            </button>
            <button className="nav-link" onClick={() => handleNavClick("contact")}>
              Contact
            </button>
            <button className="nav-link" onClick={toggleTheme}>
              {theme === "light" ? (
                <>
                  <i className="fa-solid fa-moon"></i> Mode sombre
                </>
              ) : (
                <>
                  <i className="fa-solid fa-sun"></i> Mode clair
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const Hero = () => (
  <section className="hero" id="about">
    <div className="container">
      <div className="hero-grid">
        <div className="fade-in-up">
          <div className="chip">
            <span className="chip-dot"></span>
            <span>Je cherche une alternance en développement full stack.</span>
          </div>
          <h1 className="hero-title">
            Hamza <span className="highlight">Ben Alouane</span>
          </h1>
          <p className="hero-subtitle">
            Je suis en 3ᵉ année à la Coding Factory by ESIEE-IT, à Cergy. Je fais surtout du
            développement web et mobile. J’aime bien partir d’une idée simple et la transformer en
            projet concret, utile, et agréable à utiliser.
          </p>
          <div className="hero-tags">
            <span className="tag-pill accent">Full stack</span>
            <span className="tag-pill">Web & mobile</span>
            <span className="tag-pill">Agile</span>
            <span className="tag-pill">React · Symfony · Flutter</span>
          </div>
          <div className="hero-actions">
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("contact");
              }}
            >
              <i className="fa-solid fa-paper-plane"></i>
              Parler d&apos;une alternance
            </a>
            <a
              className="btn-ghost"
              href="mailto:hbenalouane19@gmail.com?subject=Contact%20alternance%20développeur"
            >
              <i className="fa-regular fa-envelope"></i>
              m&apos;écrire par e-mail
            </a>
          </div>
        </div>

        <div className="hero-side fade-in-up delay-1">
          <div className="hero-card">
            <div className="hero-stat-grid">
              <div className="stat-card">
                <div className="stat-label">Formation</div>
                <div className="stat-value">Dév. Web & Mobile</div>
                <div className="stat-sub">Coding Factory – ESIEE-IT (2022–2026)</div>
                <div className="stat-pill">
                  <i className="fa-solid fa-calendar-week"></i>
                  2 semaines école · 3 semaines entreprise
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Expériences</div>
                <div className="stat-value">3 missions web</div>
                <ul className="card-list">
                  <li>FJVA – site WordPress & communication</li>
                  <li>A.L.E.S – site vitrine HTML/CSS/JS, PHP</li>
                  <li>KB TRANS – développement web</li>
                </ul>
              </div>
            </div>
            <div className="hero-timeline">
              <span>
                Aujourd&apos;hui, je veux continuer à progresser sur du full stack (JS/TS, React,
                PHP/Symfony, bases de données…) dans une équipe où je peux apprendre et être
                utile.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SkillsSection = () => {
  const languages = ["HTML", "CSS", "JavaScript", "TypeScript", "PHP", "Java", "C#", "Dart", "Kotlin", "Node.js"];
  const frameworks = ["React.js", "Vue.js", "Symfony", "Flutter", "Tailwind CSS", "Unity"];
  const strong = ["JavaScript", "TypeScript", "PHP", "React.js", "Symfony", "Flutter", "HTML", "CSS", "Java", "C#", "Unity", "Vue.js", "Kotlin"];
  const db = ["MySQL", "MongoDB", "Firebase"];
  const tools = ["Git", "Linux", "Android Studio", "Canva", "WordPress", "Docker"];
  const methods = ["Agile Scrum", "Architecture MVC", "Algorithmie"];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">
            <span>
              <i className="fa-solid fa-code"></i>
            </span>
            Compétences
          </h2>
          <p className="section-subtitle">
            Ce que j&apos;utilise le plus dans mes projets, à l&apos;école comme en dehors.
          </p>
        </div>
        <div className="grid-2 fade-in-up delay-1">
          <div className="card">
            <div className="card-tagline">Langages & frameworks</div>
            <div className="card-title">Côté code</div>
            <div style={{ marginTop: "0.6rem", marginBottom: "0.4rem" }}>
              <strong style={{ fontSize: "0.8rem" }}>Langages</strong>
            </div>
            <div className="pill-row">
              {languages.map((item) => (
                <span
                  key={item}
                  className={strong.includes(item) ? "skill-pill strong" : "skill-pill"}
                >
                  {item}
                </span>
              ))}
            </div>
            <div style={{ marginTop: "0.7rem", marginBottom: "0.4rem" }}>
              <strong style={{ fontSize: "0.8rem" }}>Frameworks / libs</strong>
            </div>
            <div className="pill-row">
              {frameworks.map((item) => (
                <span
                  key={item}
                  className={strong.includes(item) ? "skill-pill strong" : "skill-pill"}
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="skills-legend">
              <span>⭐</span> signifie que je l&apos;utilise très souvent et que je suis à l&apos;aise
              avec.
            </p>
          </div>

          <div className="card">
            <div className="card-tagline">Bases de données, outils & méthodes</div>
            <div className="card-title">Ce qui m&apos;aide à structurer les projets</div>
            <div style={{ marginTop: "0.6rem", marginBottom: "0.4rem" }}>
              <strong style={{ fontSize: "0.8rem" }}>Bases de données</strong>
            </div>
            <div className="pill-row">
              {db.map((item) => (
                <span key={item} className="skill-pill">
                  {item}
                </span>
              ))}
            </div>
            <div style={{ marginTop: "0.7rem", marginBottom: "0.4rem" }}>
              <strong style={{ fontSize: "0.8rem" }}>Outils</strong>
            </div>
            <div className="pill-row">
              {tools.map((item) => (
                <span key={item} className="skill-pill">
                  {item}
                </span>
              ))}
            </div>
            <div style={{ marginTop: "0.7rem", marginBottom: "0.4rem" }}>
              <strong style={{ fontSize: "0.8rem" }}>Méthodes</strong>
            </div>
            <div className="pill-row">
              {methods.map((item) => (
                <span key={item} className="skill-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      company: "KB TRANS",
      role: "Développeur Web",
      period: "oct. 2024 – juin 2025",
      tasks: ["Participation au développement de solutions web internes."],
      stack: "HTML, CSS, JavaScript, PHP, MySQL",
    },
    {
      company: "A.L.E.S",
      role: "Développeur Web",
      period: "déc. 2023 – juin 2024",
      tasks: [
        "Création d’un site vitrine en HTML/CSS, JavaScript & PHP.",
        "Création de contenus (affiches, posts) avec Canva et Word.",
        "Un peu d’administratif : planning, suivi des adhérents, base de compta.",
      ],
      stack: "HTML, CSS, JavaScript, PHP, Canva, Word",
    },
    {
      company: "FJVA",
      role: "Développeur Web",
      period: "déc. 2022 – oct. 2023",
      tasks: [
        "Mise en place d’un site WordPress pour l’association.",
        "Gestion d’une partie de la communication sur les réseaux.",
      ],
      stack: "WordPress, communication digitale",
    },
  ];

  return (
    <section id="experience">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">
            <span>
              <i className="fa-solid fa-briefcase"></i>
            </span>
            Expériences
          </h2>
          <p className="section-subtitle">
            Des expériences en association et en entreprise, toujours autour du web.
          </p>
        </div>

        <div className="grid-2 fade-in-up delay-1">
          {experiences.map((exp) => (
            <div key={exp.company} className="card">
              <div className="card-tagline">{exp.period}</div>
              <div className="card-title">
                {exp.role} – {exp.company}
              </div>
              <div className="card-meta">{exp.stack}</div>
              <ul className="card-list">
                {exp.tasks.map((t, idx) => (
                  <li key={idx}>{t}</li>
                ))}
              </ul>
              <div className="card-footer-meta">
                <span className="badge accent">Projet réel</span>
                <span className="badge">Autonomie</span>
              </div>
            </div>
          ))}

          <div className="card fade-in-up delay-2">
            <div className="card-tagline">Formation</div>
            <div className="card-title">Coding Factory by ESIEE-IT – Cergy</div>
            <div className="card-meta">Développement Web & Mobile – 2022–2026</div>
            <ul className="card-list">
              <li>Projets full stack : PHP, JavaScript, Vue.js, Symfony, React…</li>
              <li>Travail en équipe en mode agile, avec des sprints courts.</li>
              <li>Projets mobiles et jeux vidéo : Flutter, Android, Unity (C#).</li>
            </ul>
            <div className="card-footer-meta">
              <span className="badge">Bac général (Physique-Chimie, SVT) – 2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      name: "Dex Token",
      label: "Projet full stack – +1 an",
      desc: "Plateforme autour des cryptomonnaies : suivi de tokens, dashboard, intégration d’API, et interface claire pour suivre l’évolution des projets.",
      tech: ["JavaScript", "React", "Node.js", "API REST"],
      link: "https://www.dex-token.com/",
      image: "./assets/dex-token.png",
    },

    {
      name: "Pixeno",
      label: "Web App",
      desc: "Un gestionnaire de tilesets rapide et au style rétro, développé avec React.",
      tech: ["React", "Vite", "JavaScript", "CSS"],
      link: "https://comiccsanss2.github.io/tileset-manager/",
      image: "./assets/pixeno.png",
    },

   {
  name: "Sanic le Lapin Pressé",
  label: "Jeu Meme 2D type speedrunners",
  desc: "Jeu Meme 2D réalisé avec Unity : cartes personnalisées, caméra dynamique, animations et gameplay fluide. Jouable en ligne sur itch.io.",
  tech: ["C#", "Unity"],
  link: "https://noehlm.itch.io/sanic-le-lapin-press",
  image: "./assets/sanic.png",
},

    {
      name: "Scanner Amiibo NFC",
      label: "Application Android",
      desc: "Application Android qui scanne des Amiibo via NFC, lit leurs données et gère une collection locale.",
      tech: ["Kotlin", "Android Studio", "NFC", "JSON"],
      image: "./assets/amiibo.png",
    },

    {
      name: "App Flutter – Passion Licornes",
      label: "Application Flutter",
      desc: "Application mobile légère et fun : fiches, listes, mini-fonctionnalités et système de favoris.",
      tech: ["Flutter", "Firebase"],
    },
  ];


  return (
    <section id="projects">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">
            <span>
              <i className="fa-solid fa-gamepad"></i>
            </span>
            Projets
          </h2>
          <p className="section-subtitle">
            Une partie des projets sur lesquels j&apos;ai pris du plaisir à travailler.
          </p>
        </div>

        <div className="projects-grid fade-in-up delay-1">
          {projects.map((p) => (
            <div key={p.name} className="project-card">
              <div>
            {p.image ? (
  <img
    src={p.image}
    alt={p.name}
    className="project-image"
  />
) : p.placeholder ? (
  <div className="screenshot-placeholder">{p.placeholder}</div>
) : null}

                <div className="project-label">{p.label}</div>
                <div className="project-title">{p.name}</div>
                <div className="project-desc">{p.desc}</div>
              </div>

              <div className="project-tech">
                {p.tech.map((t) => (
                  <span key={t}>#{t}</span>
                ))}
              </div>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", marginTop: "0.4rem", color: "#a5b4fc" }}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Voir le projet
                </a>
              )}
            </div>
          ))}

          <div className="project-card">
            <div>
              <div className="project-label">GitHub</div>
              <div className="project-title">Autres projets & essais</div>
              <div className="project-desc">
                Je fais aussi pas mal de petits projets / tests que je mets sur mon GitHub quand
                ils sont montrables.
              </div>
            </div>
            <div className="project-tech">
              <a
                href="https://github.com/ComiccSanss2"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "#a5b4fc" }}
              >
                <i className="fa-brands fa-github"></i> ComiccSanss2
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact">
    <div className="container">
      <div className="section-header fade-in-up">
        <h2 className="section-title">
          <span>
            <i className="fa-solid fa-message"></i>
          </span>
          Contact
        </h2>
        <p className="section-subtitle">
          Si mon profil vous parle, je serai ravi d&apos;échanger, même pour un simple premier
          contact.
        </p>
      </div>

      <div className="contact-grid fade-in-up delay-1">
        <div className="contact-info">
          <p>
            Je cherche une alternance en développement full stack (web et/ou mobile). Je suis
            autonome, sérieux, mais surtout motivé pour apprendre et contribuer à des projets
            concrets.
          </p>
          <div style={{ marginTop: "0.9rem" }}>
            <div className="contact-line">
              <i className="fa-solid fa-phone"></i>
              <span>07 67 13 21 70</span>
            </div>
            <div className="contact-line">
              <i className="fa-regular fa-envelope"></i>
              <span>hbenalouane19@gmail.com</span>
            </div>
            <div className="contact-line">
              <i className="fa-solid fa-location-dot"></i>
              <span>Saint-Ouen-l&apos;Aumône (95310)</span>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href="mailto:hbenalouane19@gmail.com?subject=Contact%20alternance%20développeur"
              className="contact-social-link"
            >
              <i className="fa-solid fa-paper-plane"></i>
              Envoyer un e-mail
            </a>
            <a
              href="https://github.com/ComiccSanss2"
              target="_blank"
              rel="noreferrer"
              className="contact-social-link"
            >
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </div>

          <div style={{ marginTop: "0.9rem" }}>
            <span className="contact-pill">
              <i className="fa-solid fa-language"></i>
              Français &amp; Italien (natif), Anglais, Arabe
            </span>
          </div>
          <div style={{ marginTop: "0.5rem" }}>
            <span className="contact-pill">
              <i className="fa-solid fa-heart"></i>
              Jeux vidéo, musique (guitare/basse/batterie), volley-ball, salle de sport
            </span>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-note">
            <strong>En résumé :</strong> je ne prétends pas tout savoir, mais je suis sérieux,
            curieux, je code régulièrement et j&apos;apprends vite. J&apos;aime bien quand on me
            fait des retours francs.
          </div>
          <div className="availability">
            <p>
              <strong>Rythme d&apos;alternance :</strong> 2 semaines école / 3 semaines entreprise.
            </p>
            <p>
              <strong>Début :</strong> dès que possible selon votre calendrier.
            </p>
            <p>
              Je suis ouvert aux environnements startup ou plus “classiques”, tant qu&apos;il y a
              une équipe technique avec qui je peux progresser.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} – Hamza Ben Alouane.</span>
        <span>Portfolio fait maison, sans template.</span>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setTheme("light");
      document.body.classList.add("light-mode");
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-root">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
