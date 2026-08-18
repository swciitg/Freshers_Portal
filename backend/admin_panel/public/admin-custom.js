/**
 * Custom AdminJS UI tweaks. Loaded via the `assets.scripts` option in
 * admin-config.js, so it runs after the React app has mounted.
 *
 * 1. Makes the left navigation sidebar retractable (collapsible) on desktop
 *    widths, in addition to AdminJS's existing mobile drawer behaviour.
 * 2. Lets the record table reclaim the freed space, and keeps it readable
 *    (and scrollable) at every viewport width.
 *
 * `[data-css="sidebar"]`, `[data-css="topbar"]` and `[data-css="app-content"]`
 * are stable hooks that AdminJS itself renders (they are not generated/hashed
 * classnames), so this keeps working across AdminJS UI rebuilds.
 *
 * The stylesheet is injected from here rather than shipped as a separate
 * .css asset, to keep the whole customisation in one file.
 */
(function () {
  var STORAGE_KEY = "adminjs_sidebar_collapsed";
  var BUTTON_ID = "sidebar-toggle-btn";
  var STYLE_ID = "admin-custom-styles";

  var STYLES = `
    [data-css="sidebar"] {
      transition:
        width 0.22s ease-in-out,
        min-width 0.22s ease-in-out,
        padding 0.22s ease-in-out,
        opacity 0.18s ease-in-out;
    }

    body.sidebar-collapsed [data-css="sidebar"] {
      width: 0 !important;
      min-width: 0 !important;
      padding: 0 !important;
      border-right: none !important;
      overflow: hidden !important;
      opacity: 0;
      pointer-events: none;
    }

    /* Toggle button, injected into the top bar below. */
    #sidebar-toggle-btn {
      display: none;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      margin-left: 12px;
      padding: 0;
      border: none;
      border-radius: 6px;
      background: transparent;
      color: inherit;
      cursor: pointer;
      flex-shrink: 0;
    }

    #sidebar-toggle-btn:hover {
      background: rgba(0, 0, 0, 0.06);
    }

    #sidebar-toggle-btn svg {
      width: 20px;
      height: 20px;
      transition: transform 0.22s ease-in-out;
    }

    body.sidebar-collapsed #sidebar-toggle-btn svg {
      transform: rotate(180deg);
    }

    /* Only show the desktop toggle once the sidebar is permanently docked
       in-flow (matches AdminJS's own \`xl\` breakpoint at 1324px). Below that,
       AdminJS's built-in hamburger already handles the mobile drawer. */
    @media (min-width: 1324px) {
      #sidebar-toggle-btn {
        display: inline-flex;
      }
    }

    /* ---------------- Content area / record table ---------------- */

    /* The content column is already \`flex-grow: 1\`, so it reclaims the
       sidebar's space on its own, and follows smoothly because the sidebar's
       own width is what animates.

       \`min-width: 0\` is the load-bearing part: without it this flex child
       refuses to shrink below its content's intrinsic width, which both
       breaks the overflow-x scrolling below and lets a wide table push the
       whole page sideways. */
    [data-css="app-content"] {
      min-width: 0;
    }

    /* Every AdminJS list view renders its table inside a container whose
       data-css ends in \`-table-wrapper\`. Let wide tables scroll horizontally
       inside that container rather than forcing the whole page sideways. */
    [data-css$="table-wrapper"] {
      max-width: 100%;
      overflow-x: auto;
    }

    [data-css$="table-wrapper"] table {
      min-width: 100%;
    }

    /* AdminJS's default cell rule is \`word-break: break-word\`, which shatters
       unbreakable tokens (Mongo ObjectIds, URLs) mid-string the moment a
       column gets squeezed. \`overflow-wrap\` only breaks as a last resort, so
       IDs stay readable and the table scrolls instead.

       The min-width keeps narrow columns from collapsing to a single
       character while long text columns take the extra room. */
    [data-css$="table-wrapper"] td,
    [data-css$="table-wrapper"] th {
      word-break: normal;
      overflow-wrap: break-word;
      min-width: 90px;
    }

    /* The checkbox column (always the first cell) and the trailing actions
       column (always the last cell) stay compact rather than claim a 90px
       share of the freed-up width. */
    [data-css$="table-wrapper"] tr > td:first-child,
    [data-css$="table-wrapper"] tr > th:first-child,
    [data-css$="table-wrapper"] tr > td:last-child,
    [data-css$="table-wrapper"] tr > th:last-child {
      min-width: 0;
      width: 1%;
      white-space: nowrap;
    }

    /* Tighten padding on smaller screens so more columns stay visible before
       the horizontal scroll kicks in. */
    @media (max-width: 1024px) {
      [data-css$="table-wrapper"] td,
      [data-css$="table-wrapper"] th {
        padding: 12px 10px;
        min-width: 80px;
      }
    }
  `;

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = STYLES;
    document.head.appendChild(style);
  }

  function isCollapsed() {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  }

  function applyState(collapsed) {
    document.body.classList.toggle("sidebar-collapsed", collapsed);
    var btn = document.getElementById(BUTTON_ID);
    if (btn) {
      var label = collapsed ? "Expand sidebar" : "Collapse sidebar";
      btn.setAttribute("aria-label", label);
      btn.setAttribute("title", label);
    }
  }

  function toggle() {
    var next = !document.body.classList.contains("sidebar-collapsed");
    window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
    applyState(next);
  }

  function createButton() {
    var btn = document.createElement("button");
    btn.id = BUTTON_ID;
    btn.type = "button";
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round">' +
      '<polyline points="15 18 9 12 15 6"></polyline>' +
      "</svg>";
    btn.addEventListener("click", toggle);
    return btn;
  }

  function ensureButton() {
    if (document.getElementById(BUTTON_ID)) return;
    var topbar = document.querySelector('[data-css="topbar"]');
    if (!topbar) return;

    var btn = createButton();
    // Insert right after AdminJS's own mobile hamburger box (its first
    // child) so ordering stays sensible at every breakpoint.
    var burger = topbar.firstElementChild;
    if (burger) {
      topbar.insertBefore(btn, burger.nextSibling);
    } else {
      topbar.insertBefore(btn, topbar.firstChild);
    }
    applyState(isCollapsed());
  }

  injectStyles();
  // Apply the saved state immediately to avoid a flash of the wrong layout.
  applyState(isCollapsed());
  ensureButton();

  // AdminJS is a client-rendered SPA; keep watching in case the top bar
  // mounts a little later (or gets re-mounted) than this script runs.
  var observer = new MutationObserver(ensureButton);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
