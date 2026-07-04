(function () {
  const content = window.SITE_CONTENT || {};

  function getValue(path) {
    return path.split(".").reduce((value, key) => {
      if (value && Object.prototype.hasOwnProperty.call(value, key)) {
        return value[key];
      }
      return "";
    }, content);
  }

  document.querySelectorAll("[data-content]").forEach((element) => {
    const value = getValue(element.dataset.content);
    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-list]").forEach((element) => {
    const items = getValue(element.dataset.list);
    if (!Array.isArray(items)) return;

    element.innerHTML = items
      .map((item) => {
        const className = element.dataset.list === "services" ? "service-card" : "feature-item";
        return `
          <article class="${className}">
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.copy)}</p>
          </article>
        `;
      })
      .join("");
  });

  const email = content.agency && content.agency.email;
  const phone = content.agency && content.agency.phone;
  if (email) {
    document.querySelectorAll("[data-email-link]").forEach((emailLink) => {
      emailLink.href = `mailto:${email}`;
      emailLink.textContent = email;
    });
  }

  if (phone) {
    document.querySelectorAll("[data-phone-link]").forEach((phoneLink) => {
      phoneLink.href = "tel:+14043689648";
      phoneLink.textContent = phone;
    });
  }

  const emailCta = document.querySelector("[data-email-cta]");
  if (email && emailCta) {
    emailCta.href = `mailto:${email}`;
  }

  setOptionalLink("[data-linkedin-link]", content.agency && content.agency.linkedin);

  const yearElement = document.querySelector("[data-year]");
  if (yearElement) {
    yearElement.textContent = `© ${new Date().getFullYear()}`;
  }

  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function setOptionalLink(selector, href) {
    document.querySelectorAll(selector).forEach((link) => {
      if (href) {
        link.href = href;
        link.rel = "noreferrer";
        link.target = "_blank";
        return;
      }
      link.remove();
    });
  }
})();
