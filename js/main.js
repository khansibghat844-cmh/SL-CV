/* ===== Contact details (change them here and in the HTML links) ===== */
const CONTACT = {
  email: "sl03318138581@gmail.com",
  whatsapp: "923401929013" // country code 92 + number without the leading 0
};

/* ===== Mobile menu ===== */
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

if (toggle && nav) {
  const setOpen = (open) => {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
  };

  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("open")));

  nav.addEventListener("click", (e) => {
    if (e.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      setOpen(false);
      toggle.focus();
    }
  });
}

/* ===== Contact form: builds a WhatsApp or email message ===== */
const form = document.getElementById("contact-form");

if (form) {
  const nameInput = form.querySelector("#name");
  const messageInput = form.querySelector("#message");
  const errorBox = form.querySelector(".form-error");

  const readForm = () => {
    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    if (!name || !message) {
      errorBox.textContent = "Enter your name and message first.";
      (name ? messageInput : nameInput).focus();
      return null;
    }
    errorBox.textContent = "";
    return { name, message };
  };

  form.querySelector("[data-send='whatsapp']").addEventListener("click", () => {
    const data = readForm();
    if (!data) return;
    const text = `Hello Sibghat, my name is ${data.name}.\n\n${data.message}`;
    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
  });

  form.querySelector("[data-send='email']").addEventListener("click", () => {
    const data = readForm();
    if (!data) return;
    const subject = `Message from ${data.name} via your portfolio`;
    const body = `${data.message}\n\nFrom: ${data.name}`;
    window.location.href =
      `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
