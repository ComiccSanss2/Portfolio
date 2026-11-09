const { useEffect, useState } = React;

/* ================= DONNÉES ================= */

const PROFILE = {
  name: "Hamza Ben Alouane",
  role: "Développeur Web Full Stack",
  location: "Saint-Ouen-l'Aumône (95)",
  email: "hbenalouane19@gmail.com",
  phone: "07 67 13 21 70",
  github: "https://github.com/ComiccSanss2",
  itch: "https://comiccsanss.itch.io",
  cv: "./assets/CV_Hamza_Ben_Alouane.pdf",
};

const NAV = [
  ["about", "À propos"],
  ["projects", "Projets"],
  ["skills", "Compétences"],
  ["experience", "Parcours"],
  ["contact", "Contact"],
];

const PROJECTS = [
  {
    name: "PelakaVoice",
    label: "Application desktop · temps réel",
    featured: true,
    image: "./assets/pelakavoice.webp",
    desc:
      "Application de chat vocal type Discord, conçue de A à Z : salons vocaux, chat, amis et appels privés, " +
      "plusieurs streams d'écran en 1080p / 60 fps avec le son du jeu (sans les voix de l'appel), soundboard partagée, " +
      "mises à jour automatiques dans l'application et hébergement du serveur en un clic.",
    highlights: [
      "Voix et vidéo en pair-à-pair (WebRTC) avec qualité adaptée au ping et au CPU",
      "Serveur Node.js + Socket.io, accessible partout via un tunnel Cloudflare",
      "Traitement audio en AudioWorklet : noise gate, effets de voix, encodage Opus",
    ],
    tech: ["Electron", "JavaScript", "Node.js", "Socket.io", "WebRTC", "Web Audio"],
    repo: "https://github.com/ComiccSanss2/PelakaVoice",
    live: "https://github.com/ComiccSanss2/PelakaVoice/releases/latest",
    liveLabel: "Télécharger",
  },
  {
    name: "PIXENO",
    label: "Outil web · React",
    image: "./assets/pixeno.webp",
    desc:
      "Outil en ligne pour les développeurs de jeux 2D : découpe de tilesets, éditeur de collisions, " +
      "export PNG, JSON et ZIP pour Unity et Godot. 100 % côté navigateur, sans serveur.",
    tech: ["React", "Vite", "JavaScript", "CSS"],
    repo: "https://github.com/ComiccSanss2/tileset-manager",
    live: "https://comiccsanss2.github.io/tileset-manager/",
  },
  {
    name: "Visual Simulator",
    label: "Expérience WebGL · 3D",
    image: "./assets/visual-simulator.webp",
    desc:
      "Expérience 3D pilotée par le scroll, en huit étapes. Tout est procédural : shaders GLSL écrits à la main, " +
      "post-traitement maison en une seule passe, mode calme pour les personnes sensibles aux animations.",
    tech: ["Three.js", "React Three Fiber", "GLSL", "GSAP", "Vite"],
    repo: "https://github.com/ComiccSanss2/visual-simulator",
    live: "https://comiccsanss2.github.io/visual-simulator/",
  },
  {
    name: "Night Train Zero",
    label: "Jeu vidéo · RPG narratif",
    cover: { icon: "fa-solid fa-train-subway", from: "#0f172a", via: "#7c3aed", to: "#22d3ee", tag: "SUBNET" },
    desc:
      "RPG narratif isométrique inspiré d'Undertale et d'Omori : Leo, un chat nommé Byte et une coursière " +
      "traversent Subnet, la ville sous la ville, où l'on « hacke » les émotions au lieu de combattre. Jeu traduit en anglais, italien et français.",
    tech: ["C#", "Unity 6", "URP", "HLSL"],
    repo: "https://github.com/ComiccSanss2/night-train-zero",
    live: "https://comiccsanss.itch.io/night-train-zero",
    liveLabel: "Jouer sur itch.io",
    liveIcon: "fa-brands fa-itch-io",
  },
  {
    name: "Ashes of the Throne",
    label: "Jeu vidéo · Action-RPG coop",
    cover: { icon: "fa-solid fa-dragon", from: "#1c1917", via: "#b91c1c", to: "#f59e0b", tag: "DARK FANTASY" },
    desc:
      "Action-RPG dark fantasy en coopération, style PS2 / souls-like. Multijoueur en ligne avec lobbies " +
      "(sans ouvrir de ports grâce à Unity Relay) et génération des scènes, matériaux et animations par scripts d'éditeur.",
    tech: ["C#", "Unity 6", "Netcode for GameObjects", "URP"],
    repo: "https://github.com/ComiccSanss2/ASHES-OF-THRONE",
    live: "https://comiccsanss.itch.io/ashes-of-the-throne",
    liveLabel: "Jouer sur itch.io",
    liveIcon: "fa-brands fa-itch-io",
  },
];

const OTHER_PROJECTS = [
  {
    name: "Amstramgram",
    desc: "Réseau social type Instagram : front React + TypeScript, API REST Node.js / Express, authentification JWT (bcrypt), architecture en couches, tests Vitest.",
    tech: "React · Node.js · Express · TypeScript",
  },
  {
    name: "Supermarché en réalité virtuelle",
    desc: "Simulation VR : prise des produits en main, panier, scanner de caisse avec liste et total, téléportation.",
    tech: "C# · Unity · XR Interaction Toolkit",
  },
  {
    name: "Applications mobiles",
    desc: "Scanner NFC Amiibo (lecture des puces et collection locale) et Passion Licornes (fiches, concours, notifications).",
    tech: "Kotlin · Flutter · Firebase",
  },
  {
    name: "Jeux sur itch.io",
    desc: "Plusieurs jeux jouables en ligne, la plupart développés avec Godot, d'autres en cours de développement.",
    tech: "Godot · Unity",
    link: PROFILE.itch,
  },
];

const SKILLS = [
  { title: "Langages", icon: "fa-solid fa-code", items: ["JavaScript", "TypeScript", "HTML", "CSS", "PHP", "Kotlin", "Java", "Dart", "C#", "GDScript"] },
  { title: "Front-end", icon: "fa-solid fa-display", items: ["React", "Vite", "React Router", "Three.js"] },
  { title: "Back-end", icon: "fa-solid fa-server", items: ["Node.js", "Express", "API REST", "Authentification JWT", "Socket.io", "WebRTC"] },
  { title: "Desktop & mobile", icon: "fa-solid fa-mobile-screen", items: ["Electron", "Flutter", "Android natif (Android Studio)"] },
  { title: "Données", icon: "fa-solid fa-database", items: ["MySQL", "Firebase"] },
  { title: "Jeux & 3D", icon: "fa-solid fa-gamepad", items: ["Godot", "Unity", "Réalité virtuelle (XR Toolkit)", "GLSL"] },
  { title: "Outils & méthodes", icon: "fa-solid fa-screwdriver-wrench", items: ["Git / GitHub", "Linux", "Vitest", "WordPress", "Figma", "Agile Scrum", "Architecture MVC"] },
];

const EXPERIENCES = [
  {
    company: "KB TRANS",
    role: "Développeur Web",
    period: "oct. 2024 – oct. 2026",
    tasks: [
      "Conception et développement du site vitrine d'une entreprise familiale de transport routier (poids lourds).",
      "Site non mis en ligne par l'entreprise : démonstration disponible sur demande.",
    ],
    stack: "HTML · CSS · JavaScript",
  },
  {
    company: "A.L.E.S",
    role: "Développeur Web",
    period: "déc. 2023 – juin 2024",
    tasks: ["Conception et développement du site vitrine de l'association."],
    stack: "HTML · CSS · JavaScript · PHP",
  },
  {
    company: "FJVA",
    role: "Développeur Web",
    period: "déc. 2022 – oct. 2023",
    tasks: ["Conception d'un site WordPress pour une association : structure, thème, pages et contenus."],
    stack: "WordPress",
  },
];

const EDUCATION = [
  {
    title: "Développement Web et Mobile — Bac+3",
    school: "ESIEE-IT, Pontoise",
    period: "2022 – 2026 · diplôme validé",
    detail: "Développement full stack et mobile, algorithmique, projets en méthode agile.",
    done: true,
  },
  {
    title: "Baccalauréat général (Physique-Chimie, SVT)",
    school: "Lycée Fernand et Nadia Léger",
    period: "2022",
    done: true,
  },
];

/* ================= UTILITAIRES ================= */

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top - 80, behavior: "smooth" });
};

// Fait apparaître les blocs .reveal quand ils entrent à l'écran
const useReveal = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

const SectionHeader = ({ icon, title, subtitle }) => (
  <div className="section-header reveal">
    <h2 className="section-title">
      <span>
        <i className={icon}></i>
      </span>
      {title}
    </h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </div>
);

/* ================= NAVIGATION ================= */

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const go = (id) => {
    scrollToId(id);
    setMenuOpen(false);
  };

  return (
    <>
      <div className="banner">
        <div className="banner-inner">
          <span className="chip-dot"></span>
          <span>
            <strong>Disponible pour un CDI ou des missions freelance</strong> en développement web full stack · Bac+3
          </span>
        </div>
      </div>

      <header>
        <div className="container">
          <nav className="nav">
            <div className="nav-left" onClick={() => go("about")} style={{ cursor: "pointer" }}>
              <div className="nav-logo">HB</div>
              <div className="nav-title">
                <span>{PROFILE.name}</span>
                <span>Dév. Web Full Stack · Val-d&apos;Oise</span>
              </div>
            </div>

            <div className="nav-links">
              {NAV.map(([id, label]) => (
                <button key={id} className="nav-link" onClick={() => go(id)}>
                  {label}
                </button>
              ))}
            </div>

            <div className="nav-actions">
              <button className="nav-icon-btn" onClick={toggleTheme} aria-label="Changer de thème">
                {theme === "light" ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
              </button>
              <button className="nav-cta" onClick={() => go("contact")}>
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
              <button className="nav-icon-btn" onClick={() => setMenuOpen(false)} aria-label="Fermer le menu">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            {NAV.map(([id, label]) => (
              <button key={id} className="nav-link" onClick={() => go(id)}>
                {label}
              </button>
            ))}
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

/* ================= HERO ================= */

const Hero = () => (
  <section className="hero" id="about">
    <div className="container">
      <div className="hero-grid">
        <div className="fade-in-up">
          <div className="chip">
            <span className="chip-dot"></span>
            <span>Ouvert aux opportunités : CDI ou freelance</span>
          </div>
          <h1 className="hero-title">
            Hamza <span className="highlight">Ben Alouane</span>
          </h1>
          <p className="hero-role">Développeur Web Full Stack · Bac+3</p>
          <p className="hero-subtitle">
            Diplômé d&apos;un Bac+3 en développement web et mobile (ESIEE-IT, 2026), avec 3 expériences en
            développement web. Je conçois aussi mes propres applications de A à Z : une app de chat vocal
            temps réel, un outil React en ligne, des expériences WebGL et des jeux vidéo. Je cherche un poste
            de développeur pour livrer des fonctionnalités utiles dès le début et progresser au sein d&apos;une
            équipe technique.
          </p>
          <div className="hero-tags">
            <span className="tag-pill accent">Full stack</span>
            <span className="tag-pill">React · Node.js · TypeScript</span>
            <span className="tag-pill">Temps réel · WebRTC</span>
            <span className="tag-pill">Jeux & 3D</span>
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
              Me proposer un poste
            </a>
            <a className="btn-ghost" href={PROFILE.cv} download>
              <i className="fa-solid fa-file-arrow-down"></i>
              Télécharger mon CV
            </a>
            <a
              className="btn-ghost"
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("projects");
              }}
            >
              <i className="fa-solid fa-layer-group"></i>
              Voir mes projets
            </a>
          </div>
        </div>

        <div className="hero-side fade-in-up delay-1">
          <div className="hero-card">
            <div className="hero-stat-grid">
              <div className="stat-card">
                <div className="stat-label">Diplôme</div>
                <div className="stat-value">Bac+3</div>
                <div className="stat-sub">Développement Web et Mobile · ESIEE-IT · 2026</div>
                <div className="stat-pill">
                  <i className="fa-solid fa-circle-check"></i>
                  Diplôme validé
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Recherche</div>
                <div className="stat-value">CDI · Freelance</div>
                <ul className="card-list">
                  <li>Développeur web full stack</li>
                  <li>Val-d&apos;Oise / Île-de-France ou à distance</li>
                  <li>Permis B</li>
                </ul>
              </div>
            </div>
            <div className="hero-counters">
              <div>
                <strong>3</strong>
                <span>expériences web</span>
              </div>
              <div>
                <strong>10+</strong>
                <span>projets réalisés</span>
              </div>
              <div>
                <strong>4</strong>
                <span>langues parlées</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ================= PROJETS ================= */

const ProjectVisual = ({ p }) =>
  p.image ? (
    <img src={p.image} alt={`Aperçu de ${p.name}`} className="project-image" loading="lazy" />
  ) : p.cover ? (
    <div
      className="project-cover"
      style={{ background: `linear-gradient(135deg, ${p.cover.from}, ${p.cover.via} 55%, ${p.cover.to})` }}
    >
      <i className={p.cover.icon}></i>
      <span>{p.cover.tag}</span>
    </div>
  ) : null;

const ProjectLinks = ({ p }) => (
  <div className="project-links">
    {p.live && (
      <a href={p.live} target="_blank" rel="noreferrer" className="project-link primary">
        <i className={p.liveIcon || (p.liveLabel ? "fa-solid fa-download" : "fa-solid fa-arrow-up-right-from-square")}></i>
        {p.liveLabel || "Voir en ligne"}
      </a>
    )}
    {p.repo && (
      <a href={p.repo} target="_blank" rel="noreferrer" className="project-link">
        <i className="fa-brands fa-github"></i> Code source
      </a>
    )}
  </div>
);

const ProjectsSection = () => {
  const featured = PROJECTS.find((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects">
      <div className="container">
        <SectionHeader
          icon="fa-solid fa-layer-group"
          title="Projets"
          subtitle="Mes projets mis en avant sur GitHub, du web temps réel au jeu vidéo."
        />

        {featured && (
          <article className="project-featured reveal">
            <div className="project-featured-media">
              <ProjectVisual p={featured} />
              <span className="featured-badge">
                <i className="fa-solid fa-star"></i> Projet phare
              </span>
            </div>
            <div className="project-featured-body">
              <div className="project-label">{featured.label}</div>
              <h3 className="project-title big">{featured.name}</h3>
              <p className="project-desc">{featured.desc}</p>
              <ul className="card-list">
                {featured.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="project-tech">
                {featured.tech.map((t) => (
                  <span key={t}>#{t}</span>
                ))}
              </div>
              <ProjectLinks p={featured} />
            </div>
          </article>
        )}

        <div className="projects-grid four">
          {others.map((p, i) => (
            <article key={p.name} className={`project-card reveal delay-${(i % 3) + 1}`}>
              <div>
                <ProjectVisual p={p} />
                <div className="project-label">{p.label}</div>
                <h3 className="project-title">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
              </div>
              <div>
                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t}>#{t}</span>
                  ))}
                </div>
                <ProjectLinks p={p} />
              </div>
            </article>
          ))}
        </div>

        <h3 className="subsection-title reveal">Autres projets</h3>
        <div className="mini-projects reveal">
          {OTHER_PROJECTS.map((p) => (
            <div key={p.name} className="mini-project">
              <div className="mini-project-head">
                <strong>{p.name}</strong>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" aria-label={`Ouvrir ${p.name}`}>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                )}
              </div>
              <p>{p.desc}</p>
              <span className="mini-tech">{p.tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ================= COMPÉTENCES ================= */

const SkillsSection = () => (
  <section id="skills">
    <div className="container">
      <SectionHeader
        icon="fa-solid fa-code"
        title="Compétences"
        subtitle="Les technologies que j'utilise dans mes projets et mes expériences."
      />
      <div className="skills-grid">
        {SKILLS.map((group, i) => (
          <div key={group.title} className={`card skill-card reveal delay-${(i % 3) + 1}`}>
            <div className="skill-card-head">
              <i className={group.icon}></i>
              <span>{group.title}</span>
            </div>
            <div className="pill-row">
              {group.items.map((item) => (
                <span key={item} className="skill-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ================= PARCOURS ================= */

const ExperienceSection = () => (
  <section id="experience">
    <div className="container">
      <SectionHeader
        icon="fa-solid fa-briefcase"
        title="Parcours"
        subtitle="Expériences professionnelles, formation et engagement associatif."
      />

      <div className="grid-2">
        <div className="timeline reveal">
          <h3 className="timeline-title">
            <i className="fa-solid fa-briefcase"></i> Expérience professionnelle
          </h3>
          {EXPERIENCES.map((exp) => (
            <div key={exp.company} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="card-tagline">{exp.period}</div>
              <div className="card-title">
                {exp.role} · {exp.company}
              </div>
              <ul className="card-list">
                {exp.tasks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="card-meta">{exp.stack}</div>
            </div>
          ))}
        </div>

        <div className="timeline reveal delay-1">
          <h3 className="timeline-title">
            <i className="fa-solid fa-graduation-cap"></i> Formation
          </h3>
          {EDUCATION.map((ed) => (
            <div key={ed.title} className="timeline-item">
              <div className={ed.done ? "timeline-dot done" : "timeline-dot"}></div>
              <div className="card-tagline">{ed.period}</div>
              <div className="card-title">{ed.title}</div>
              <div className="card-meta">{ed.school}</div>
              {ed.detail && <p className="timeline-text">{ed.detail}</p>}
            </div>
          ))}

          <h3 className="timeline-title" style={{ marginTop: "1.4rem" }}>
            <i className="fa-solid fa-people-group"></i> Engagement associatif
          </h3>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="card-tagline">depuis sept. 2023</div>
            <div className="card-title">BDE ESIEE-IT</div>
            <p className="timeline-text">
              Chargé de communication, puis responsable communication, puis vice-président.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ================= CONTACT ================= */

const ContactSection = () => (
  <section id="contact">
    <div className="container">
      <SectionHeader
        icon="fa-solid fa-message"
        title="Contact"
        subtitle="Un poste en CDI, une mission freelance ou simplement un premier échange : écrivez-moi."
      />

      <div className="contact-grid reveal">
        <div className="contact-info">
          <p>
            Je recherche un <strong>CDI</strong> ou des <strong>missions freelance</strong> en tant que
            développeur web full stack. Je réponds rapidement, par e-mail comme par téléphone.
          </p>
          <div style={{ marginTop: "0.9rem" }}>
            <a className="contact-line" href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
              <i className="fa-solid fa-phone"></i>
              <span>{PROFILE.phone}</span>
            </a>
            <a className="contact-line" href={`mailto:${PROFILE.email}`}>
              <i className="fa-regular fa-envelope"></i>
              <span>{PROFILE.email}</span>
            </a>
            <div className="contact-line">
              <i className="fa-solid fa-location-dot"></i>
              <span>{PROFILE.location} · Permis B</span>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href={`mailto:${PROFILE.email}?subject=Proposition%20de%20poste%20d%C3%A9veloppeur`}
              className="contact-social-link"
            >
              <i className="fa-solid fa-paper-plane"></i> Envoyer un e-mail
            </a>
            <a href={PROFILE.cv} download className="contact-social-link">
              <i className="fa-solid fa-file-arrow-down"></i> CV (PDF)
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="contact-social-link">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
            <a href={PROFILE.itch} target="_blank" rel="noreferrer" className="contact-social-link">
              <i className="fa-brands fa-itch-io"></i> itch.io
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="availability-grid">
            <div>
              <span className="availability-label">Type de contrat</span>
              <strong>CDI ou freelance</strong>
            </div>
            <div>
              <span className="availability-label">Niveau</span>
              <strong>Bac+3, diplôme validé</strong>
            </div>
            <div>
              <span className="availability-label">Zone</span>
              <strong>Île-de-France ou à distance</strong>
            </div>
            <div>
              <span className="availability-label">Langues</span>
              <strong>Français, italien, anglais C1, arabe</strong>
            </div>
          </div>
          <div className="contact-note">
            <i className="fa-solid fa-heart"></i> En dehors du code : développement de jeux vidéo, musique
            (guitare, basse, batterie), volley-ball et musculation.
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
        <span>© {new Date().getFullYear()} · {PROFILE.name}</span>
        <span>Portfolio fait maison, sans template.</span>
      </div>
    </div>
  </footer>
);

/* ================= APP ================= */

const App = () => {
  const [theme, setTheme] = useState(() => (localStorage.getItem("theme") === "light" ? "light" : "dark"));
  useReveal();

  useEffect(() => {
    document.body.classList.toggle("light-mode", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="app-root">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
