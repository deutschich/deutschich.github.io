document.addEventListener("DOMContentLoaded", () => {
  loadLinks();
  handleCookies();
});

/* Load links from JSON */
function loadLinks() {
  fetch("links.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("link-container");

      data.forEach(link => {
        const card = document.createElement("div");
        card.className = "link-card";

        card.innerHTML = `
          <a href="${link.url}" target="_blank" rel="noopener noreferrer">
            ${link.title}
          </a>
          <p>${link.description}</p>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error loading links:", error);
    });
}

/* Cookie handling */
function handleCookies() {
  const banner = document.getElementById("cookie-banner");
  const button = document.getElementById("accept-cookies");

  if (!localStorage.getItem("cookiesAccepted")) {
    banner.classList.remove("hidden");
  } else {
    loadGoogleAnalytics();
  }

  button.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    banner.classList.add("hidden");
    loadGoogleAnalytics();
  });
}

/* Google Analytics (GA4) */
function loadGoogleAnalytics() {
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = "https://www.googletagmanager.com/gtag/js?id=G-5H07SV662K";
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-5H07SV662K');
  `;
  document.head.appendChild(script2);
}
