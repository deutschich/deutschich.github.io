document.addEventListener("DOMContentLoaded", () => {
  loadLinks();
  handleCookieConsent();
});

function handleCookieConsent() {
  const overlay = document.getElementById("cookie-overlay");
  const acceptBtn = document.getElementById("accept-cookies");
  const manageBtn = document.getElementById("manage-cookies");
  const saveBtn = document.getElementById("save-settings");
  const settingsPanel = document.getElementById("cookie-settings");
  const analyticsCheckbox = document.getElementById("analytics-checkbox");

  const consent = JSON.parse(localStorage.getItem("cookieConsent"));

  if (!consent) {
    overlay.classList.remove("hidden");
  } else if (consent.analytics) {
    loadGoogleAnalytics();
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({ analytics: true })
    );
    overlay.classList.add("hidden");
    loadGoogleAnalytics();
  });

  manageBtn.addEventListener("click", () => {
    settingsPanel.classList.remove("hidden");
  });

  saveBtn.addEventListener("click", () => {
    const consentData = {
      analytics: analyticsCheckbox.checked
    };

    localStorage.setItem(
      "cookieConsent",
      JSON.stringify(consentData)
    );

    overlay.classList.add("hidden");

    if (consentData.analytics) {
      loadGoogleAnalytics();
    }
  });
}

/* Google Analytics (GA4) */
function loadGoogleAnalytics() {
  if (window.gaLoaded) return;
  window.gaLoaded = true;

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
