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
  const emailLink = document.querySelector("[data-email-link]");
  if (email && emailLink) {
    emailLink.href = `mailto:${email}`;
    emailLink.textContent = email;
  }

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

  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const recipient = email || "hello@example.com";
      const name = formData.get("name") || "";
      const senderEmail = formData.get("email") || "";
      const type = formData.get("type") || "";
      const message = formData.get("message") || "";
      const subject = encodeURIComponent(`Website inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${senderEmail}\nType: ${type}\n\n${message}`,
      );
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
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
})();
