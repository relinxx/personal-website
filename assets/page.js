(function () {
  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    setupNoticeBanner();
    setupContactModal();
    setupCompanyTextReplacement();
    setFooterYear();
  }

  function setupNoticeBanner() {
    var banner = document.getElementById('notice-banner');
    var dismiss = document.getElementById('dismiss-banner');
    if (banner && dismiss) {
      dismiss.addEventListener('click', function () {
        banner.style.display = 'none';
      });
    }
  }

  function setupContactModal() {
    var modal = document.getElementById('contact-modal');
    if (!modal) return;
    var openBtn = document.getElementById('open-contact');
    var closeBtn = document.getElementById('close-contact');
    var cancelBtn = document.getElementById('cancel-contact');
    var form = document.getElementById('contact-form');
    var lastFocused = null;

    function open() {
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
      if (openBtn) openBtn.setAttribute('aria-expanded', 'true');
      lastFocused = document.activeElement;
      var firstField = form && form.querySelector('input, textarea, button');
      if (firstField) firstField.focus();
    }
    function close() {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
      if (lastFocused && typeof lastFocused.focus === 'function') {
        lastFocused.focus();
      }
    }

    openBtn && openBtn.addEventListener('click', open);
    closeBtn && closeBtn.addEventListener('click', close);
    cancelBtn && cancelBtn.addEventListener('click', close);
    modal.addEventListener('click', function (e) {
      if (e.target === modal) close();
    });
    form && form.addEventListener('submit', function () {
      // Let native submission occur (FormSubmit), then close soon after
      setTimeout(close, 300);
    });
  }

  function setupCompanyTextReplacement() {
    // Replace occurrences of Hamson Inc -> Logic Powered Solutions in SPA-rendered content
    var rootEl = document.getElementById('root') || document.body;
    if (!rootEl) return;

    function replaceCompanyText(root) {
      var walker = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT, null);
      var node;
      while ((node = walker.nextNode())) {
        var t = node.nodeValue;
        if (!t) continue;
        var nt = t
          .replace(/Hamson\s*Inc\.?/gi, 'Logic Powered Solutions')
          .replace(/Hamson/gi, 'Logic Powered Solutions');
        if (nt !== t) node.nodeValue = nt;
      }
    }

    // Initial and delayed runs
    replaceCompanyText(document.body);
    setTimeout(function () {
      replaceCompanyText(rootEl);
    }, 1000);

    try {
      var mo = new MutationObserver(function () {
        replaceCompanyText(rootEl);
      });
      mo.observe(rootEl, { childList: true, subtree: true, characterData: true });
    } catch (err) {
      // no-op for environments without MutationObserver
    }
  }

  function setFooterYear() {
    var y = document.getElementById('y');
    if (y) y.textContent = new Date().getFullYear();
  }
})();
