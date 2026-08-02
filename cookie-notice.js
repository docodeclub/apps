(() => {
  const storageKey = "docodeCookieNoticeSeen";
  let canStorePreference = true;

  try {
    if (localStorage.getItem(storageKey) === "1") return;
  } catch {
    canStorePreference = false;
  }

  const scriptPath = document.currentScript?.getAttribute("src") || "";
  const rootPath = scriptPath.endsWith("cookie-notice.js")
    ? scriptPath.slice(0, -"cookie-notice.js".length)
    : "";

  const notice = document.createElement("section");
  notice.className = "cookie-notice";
  notice.setAttribute("aria-label", "Cookie notice");
  notice.innerHTML = `
    <div class="cookie-notice-inner">
      <p><strong>Privacy notice:</strong> Docode.app does not use analytics, advertising cookies or tracking cookies. We only use essential browser storage to remember that you have seen this message.</p>
      <div class="cookie-notice-actions">
        <a href="${rootPath}privacy/index.html">Privacy</a>
        <button type="button">Got it</button>
      </div>
    </div>
  `;

  notice.querySelector("button").addEventListener("click", () => {
    if (canStorePreference) {
      try {
        localStorage.setItem(storageKey, "1");
      } catch {
        canStorePreference = false;
      }
    }
    notice.remove();
  });

  document.body.append(notice);
})();
