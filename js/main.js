/* Renders the page from PORTFOLIO (see data.js). No framework or build step needed. */
(function () {
  "use strict";
  const P = PORTFOLIO;

  /** Tiny DOM helper: el("a", {href: "#", class: "btn"}, "Text", childNode) */
  function el(tag, attrs = {}, ...children) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      if (value !== undefined && value !== null && value !== "") node.setAttribute(key, value);
    }
    for (const child of children) node.append(child);
    return node;
  }
  const $ = (id) => document.getElementById(id);
  const externalLink = (href, label, cls = "btn") =>
    el("a", { href, class: cls, target: "_blank", rel: "noopener noreferrer" }, label);
  const list = (items) => el("ul", {}, ...items.map((t) => el("li", {}, t)));
  const tags = (items) => el("ul", { class: "tags" }, ...items.map((s) => el("li", { class: "tag" }, s)));

  function renderHero() {
    const { profile: p } = P;
    const actions = el("div", { class: "hero__actions" },
      el("a", { href: "#contact", class: "btn btn--primary" }, "Get in touch"),
      externalLink(p.resume, "View resume"),
      externalLink(p.github, "GitHub"),
      externalLink(p.linkedin, "LinkedIn"));
    $("hero").append(el("div", {}, el("h1", {}, p.name), el("p", { class: "hero__role" }, p.role),
      el("p", { class: "muted" }, p.tagline), actions));
    if (p.photo) {
      const img = el("img", { class: "hero__photo", src: p.photo, alt: `Portrait of ${p.name}`, width: 190, height: 190 });
      img.addEventListener("error", () => img.remove()); // hide if the file is missing
      $("hero").append(img);
    }
  }

  function renderAbout() {
    $("about-body").append(...P.about.map((t) => el("p", {}, t)));
  }

  function renderSkills() {
    $("skills-body").append(...P.skills.map((g) => el("div", {}, el("h3", {}, g.group), tags(g.items))));
  }

  function renderExperience() {
    $("experience-body").append(...P.experience.map((j) =>
      el("article", { class: "job" },
        el("h3", {}, `${j.role}, ${j.org}`),
        el("p", { class: "job__meta" }, j.period),
        list(j.points))));
  }

  function renderProjects() {
    $("projects-body").append(...P.projects.map((p) => {
      const media = el("div", { class: "project__media" }, el("span", {}, "Add screenshot in assets/images"));
      if (p.image) {
        const img = el("img", { src: p.image, alt: `${p.title} screenshot`, loading: "lazy" });
        img.addEventListener("load", () => media.replaceChildren(img)); // swap placeholder only if the file exists
      }
      const links = el("div", { class: "project__links" });
      if (p.repo) links.append(externalLink(p.repo, "Source code"));
      if (p.demo) links.append(externalLink(p.demo, "Live demo"));
      return el("article", { class: "project" + (p.featured ? " project--featured" : "") },
        media,
        el("div", { class: "project__body" },
          el("h3", {}, p.title),
          el("p", { class: "muted" }, p.summary),
          list(p.highlights),
          tags(p.stack),
          links));
    }));
  }

  function renderCertificates() {
    $("certificates-body").append(...P.certificates.map((c) => {
      const card = el("div", { class: "cert" }, el("h3", {}, c.title), el("p", {}, `${c.issuer} · ${c.date}`));
      if (c.link) card.append(externalLink(c.link, "View credential", ""));
      return card;
    }));
  }

  function renderContact() {
    const { profile: p } = P;
    $("contact").append(el("div", { class: "contact" },
      el("h2", {}, "Let's work together"),
      el("p", { class: "muted" }, "I'm looking for a backend or software engineering role. Send me a message and I'll reply quickly."),
      el("div", { class: "hero__actions" },
        el("a", { href: `mailto:${p.email}`, class: "btn btn--primary" }, p.email),
        externalLink(p.linkedin, "LinkedIn"),
        externalLink(p.github, "GitHub"))));
  }

  function renderChrome() {
    const { profile: p } = P;
    $("brand").textContent = p.shortName;
    $("footer-text").textContent = `© ${new Date().getFullYear()} ${p.name} · ${p.location}`;
  }

  [renderChrome, renderHero, renderAbout, renderSkills, renderExperience, renderProjects, renderCertificates, renderContact]
    .forEach((fn) => fn());
})();
