document.addEventListener("DOMContentLoaded", () => {
  handleCookieConsent();
});

/* Cookie consent logic */
function handleCookieConsent() {
  const overlay = document.getElementById("cookie-overlay");
  const acceptBtn = document.getElementById("accept-cookies");
  const manageBtn = document.getElementById("manage-cookies");
  const saveBtn = document.getElementById("save-settings");
  const settingsPanel = document.getElementById("cookie-settings");
  const analyticsCheckbox = document.getElementById("analytics-checkbox");

  if (!overlay) {
    console.error("Cookie overlay not found in HTML");
    return;
  }

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

/* Google Analytics */
function loadGoogleAnalytics() {
  if (window.gaLoaded) return;
  window.gaLoaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=document.addEventListener("DOMContentLoaded", () => {
  handleCookieConsent();
});

/* Cookie consent logic */
function handleCookieConsent() {
  const overlay = document.getElementById("cookie-overlay");
  const acceptBtn = document.getElementById("accept-cookies");
  const manageBtn = document.getElementById("manage-cookies");
  const saveBtn = document.getElementById("save-settings");
  const settingsPanel = document.getElementById("cookie-settings");
  const analyticsCheckbox = document.getElementById("analytics-checkbox");

  if (!overlay) {
    console.error("Cookie overlay not found in HTML");
    return;
  }

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

/* Google Analytics */
function loadGoogleAnalytics() {
  if (window.gaLoaded) return;
  window.gaLoaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
  document.head.appendChild(script);
}
