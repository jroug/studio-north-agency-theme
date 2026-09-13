import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { brand, projects, team, services, articles } from "./data/demo";
import Contact from "./components/Contact";
import "./assets/css/style.css";
function PageTitle({ title, intro, label }) {
  return (
    <div className="page-intro">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      {intro && <p className="lede">{intro}</p>}
    </div>
  );
}
function ProjectArt({ project, large = false }) {
  // Cards and detail pages share artwork driven by each project's palette and slug.
  return (
    <div
      className={`project-art${large ? " project-art-large" : ""}`}
      style={{
        background: project.color,
        color: project.ink,
      }}
    >
      <span className="art-label">Studio North / Concept collection</span>
      <span className={`art-name art-${project.slug}`}>{project.name}</span>
      <span className="art-line">{project.line}</span>
    </div>
  );
}
function ProjectCard({ project }) {
  return (
    <Link
      className="project-card"
      to={`/work/${project.slug}`}
      aria-label={`View ${project.name} project`}
    >
      <ProjectArt project={project} />
      <div className="card-caption">
        <div>
          <span className="small-label">{project.category}</span>
          <h3>{project.name}</h3>
        </div>
        <span className="card-arrow" aria-hidden="true">
          ↗
        </span>
      </div>
    </Link>
  );
}
function Home() {
  return (
    <>
      <section className="home-intro">
        <div>
          <p className="eyebrow">
            <span className="status-dot" /> Independent creative studio
          </p>
          <h1>
            Good ideas.
            <br />
            Made <em>to matter.</em>
          </h1>
        </div>
        <div className="home-description">
          <p>
            We bring strategy, design, and a little curiosity together to help
            brands find their own way forward.
          </p>
          <Link className="text-link" to="/work">
            Explore our work <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <section className="cover" aria-label="Studio North creative direction">
        <img
          src="/images/studio-north-cover.jpg"
          alt="Studio North — Independent ideas. Lasting impact. Cobalt sculptural paper on an ivory background."
          fetchpriority="high"
          width="1536"
          height="1024"
        />
        <div className="cover-caption">
          <span>Different perspectives. One shared direction.</span>
          <span>Est. for the possibilities.</span>
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A few things we’ve imagined</p>
            <h2>
              Selected work<span className="sup"> / 06</span>
            </h2>
          </div>
          <Link className="text-link" to="/work">
            View all projects ↗
          </Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <section className="studio-summary">
        <p className="eyebrow">Small team. Wide perspective.</p>
        <h2>
          Curious minds.
          <br />A common purpose.
        </h2>
        <div>
          <p>
            We’re a fictional team of thinkers, makers, and collaborators. This
            theme is built to give your next agency story a thoughtful place to
            live.
          </p>
          <Link className="text-link" to="/studio">
            Meet the studio ↗
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">From the notebook</p>
            <h2>A little perspective.</h2>
          </div>
          <Link className="text-link" to="/journal">
            Visit the journal ↗
          </Link>
        </div>
        <div className="journal-grid">
          {articles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
function Work() {
  const [filter, setFilter] = useState("All work");
  // Derive categories from the content so new projects automatically update the filters.
  const filters = [
    "All work",
    ...new Set(projects.map((project) => project.category)),
  ];
  const visible = projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );
  return (
    <>
      <PageTitle
        label="Selected projects"
        title="Different briefs. Same curiosity."
        intro="A collection of fictional brands and creative possibilities. Every project is a new way to look at things."
      />
      <div className="filters" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            key={item}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {visible.length} projects shown
      </p>
      <div className="project-grid section-bottom">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
function Project() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project) return <NotFound />;
  // Wrap the last project's next link back to the first project.
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <>
      <PageTitle
        label={`${project.category} / Concept project`}
        title={project.title}
        intro={project.description}
      />
      <ProjectArt project={project} large />
      <section className="case-body">
        <aside>
          <p className="eyebrow">Client</p>
          <h3>{project.name}</h3>
          <p className="eyebrow">What we imagined</p>
          <ul>
            {project.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
          <p className="demo-note">
            Fictional portfolio project. No client affiliation or commercial
            results are claimed.
          </p>
        </aside>
        <div>
          {[
            ["The challenge", project.challenge],
            ["Our approach", project.approach],
            ["The concept", project.result],
          ].map(([title, text]) => (
            <div key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <Link className="next-project" to={`/work/${next.slug}`}>
        <span className="eyebrow">Next project</span>
        <span>{next.name} ↗</span>
      </Link>
    </>
  );
}
function Studio() {
  return (
    <>
      <PageTitle
        label="The studio"
        title="Independent minds. Shared ambition."
        intro="We believe thoughtful work comes from honest conversations, different perspectives, and a willingness to try something new."
      />
      <section className="values">
        <div>
          <span>01 / Stay curious</span>
          <h2>Ask a little more.</h2>
          <p>
            Good questions make space for better ideas. We start by listening,
            then explore what could be.
          </p>
        </div>
        <div>
          <span>02 / Make it clear</span>
          <h2>Find the simple truth.</h2>
          <p>
            We look for the idea at the heart of a brand and give it a clear,
            confident expression.
          </p>
        </div>
        <div>
          <span>03 / Work together</span>
          <h2>Leave room for others.</h2>
          <p>
            The best outcomes happen when people bring their own perspective to
            a shared purpose.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The people behind the possibilities</p>
            <h2>Meet the demo team.</h2>
          </div>
        </div>
        <div className="team-grid">
          {team.map((person) => (
            <article key={person.name}>
              <div
                className="team-monogram"
                style={{
                  background: person.color,
                }}
                aria-hidden="true"
              >
                {person.initials}
                <span>STUDIO NORTH</span>
              </div>
              <h3>{person.name}</h3>
              <p className="small-label">{person.role}</p>
              <p>{person.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
function Services() {
  return (
    <>
      <PageTitle
        label="What we do"
        title="From first thought to final detail."
        intro="A connected set of creative capabilities. Built around the idea, shaped around the people it needs to reach."
      />
      <section className="service-list">
        {services.map((service, index) => (
          <article key={service.name}>
            <span className="eyebrow">0{index + 1}</span>
            <h2>{service.name}</h2>
            <div>
              <h3>{service.text}</h3>
              <p>{service.items}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="section">
        <p className="eyebrow">Our process</p>
        <h2>Discover. Define. Create. Refine.</h2>
        <p className="lede">
          We make room for exploration, then turn the strongest idea into a
          system that works in the real world.
        </p>
      </section>
    </>
  );
}
function ArticleCard({ article, index }) {
  return (
    <Link className="article-card" to={`/journal/${article.slug}`}>
      <div
        className="article-art"
        style={{
          background: article.color,
        }}
      >
        <span>FIELDNOTES</span>
        <span className="issue-number">0{index + 1}</span>
        <span>Ideas from Studio North ↗</span>
      </div>
      <p className="small-label">{article.category} / 3 min read</p>
      <h3>{article.title}</h3>
    </Link>
  );
}
function Journal() {
  return (
    <>
      <PageTitle
        label="The journal"
        title="Notes from a curious studio."
        intro="Thoughts on ideas, design, and making things that matter. Sample stories for your next chapter."
      />
      <div className="journal-grid section-bottom">
        {articles.map((article, index) => (
          <ArticleCard key={article.slug} article={article} index={index} />
        ))}
      </div>
    </>
  );
}
function Article() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  if (!article) return <NotFound />;
  return (
    <article className="reading">
      <Link className="text-link" to="/journal">
        ← Back to the journal
      </Link>
      <PageTitle
        label={`${article.category} / Demo editorial`}
        title={article.title}
        intro={article.excerpt}
      />
      {article.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <p className="demo-note">
        An original sample article for the Studio North theme.
      </p>
    </article>
  );
}
function Privacy() {
  return (
    <div className="reading">
      <PageTitle label="About this demo" title="A simple, local experience." />
      <p>
        Studio North is a fictional agency theme. All project names, people, and
        portfolio descriptions are demo content.
      </p>
      <h2>Your information</h2>
      <p>
        The contact form stays in your browser. It does not send messages, save
        entries, or connect to a backend. This theme includes no analytics,
        advertising trackers, third-party fonts, or cookies.
      </p>
      <h2>Hosting</h2>
      <p>
        The service hosting this site may process standard request information
        to deliver the pages. Its own privacy policy applies to that
        infrastructure.
      </p>
    </div>
  );
}
function NotFound() {
  return (
    <div className="not-found">
      <p className="eyebrow">404 / A different direction</p>
      <h1>
        Nothing here.
        <br />
        Plenty to explore.
      </h1>
      <Link className="button" to="/">
        Back to the studio ↗
      </Link>
    </div>
  );
}
function RouteEffects() {
  const { pathname } = useLocation();
  // Client-side navigation needs explicit document titles and a scroll reset.
  useEffect(() => {
    const project = projects.find((item) => pathname === `/work/${item.slug}`);
    const article = articles.find(
      (item) => pathname === `/journal/${item.slug}`,
    );
    const titles = {
      "/": brand.tagline,
      "/work": "Selected work",
      "/studio": "The studio",
      "/services": "Services",
      "/journal": "Journal",
      "/contact": "Contact",
      "/privacy": "About this demo",
    };
    document.title = `${project?.name || article?.title || titles[pathname] || "Page not found"} | ${brand.name}`;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export function Site() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  // Close mobile navigation on route changes, including browser back/forward navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  const navigation = [
    ["Work", "/work"],
    ["Studio", "/studio"],
    ["Services", "/services"],
    ["Journal", "/journal"],
    ["Let’s talk", "/contact"],
  ];
  return (
    <>
      <RouteEffects />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header wrap">
        <Link className="wordmark" to="/" aria-label="Studio North home">
          studio north<span aria-hidden="true">↗</span>
        </Link>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-controls="navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close −" : "Menu +"}
        </button>
        <nav
          id="navigation"
          aria-label="Main navigation"
          className={menuOpen ? "is-open" : ""}
          onKeyDown={(event) => {
            if (event.key === "Escape") setMenuOpen(false);
          }}
        >
          {navigation.map(([label, url]) => (
            <NavLink key={url} to={url}>
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main id="main" className="wrap" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<Project />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* Preserve older URLs without leaving redirect entries in browser history. */}
          <Route path="/the-team" element={<Navigate to="/studio" replace />} />
          <Route path="/we-deliver" element={<Navigate to="/work" replace />} />
          <Route
            path="/we-are-trusted"
            element={<Navigate to="/studio" replace />}
          />
          <Route
            path="/creative-reviews"
            element={<Navigate to="/journal" replace />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-cta">
            <div>
              <p className="eyebrow">The next good idea starts somewhere.</p>
              <h2>
                Let’s make
                <br />
                something matter.
              </h2>
            </div>
            <Link
              to="/contact"
              aria-label="Start a conversation"
              className="round-link"
            >
              ↗
            </Link>
          </div>
          <div className="footer-bottom">
            <Link className="wordmark" to="/">
              studio north ↗
            </Link>
            <span>
              © {new Date().getFullYear()} Studio North. A fictional agency
              demo.
            </span>
            <Link to="/privacy">About this demo</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
}
