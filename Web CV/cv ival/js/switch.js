(function () {
  var root = document.documentElement;
  var tombol = document.querySelectorAll(".switch-opsi");

  function terapkan(tema, simpan) {
    root.dataset.tema = tema;
    tombol.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.tema === tema));
    });
    if (simpan) {
      try { localStorage.setItem("cv-tema", tema); } catch (e) {}
    }
  }

  tombol.forEach(function (b) {
    b.addEventListener("click", function () {
      if (b.dataset.tema === root.dataset.tema) return;
      terapkan(b.dataset.tema, true);
      window.scrollTo(0, 0);
    });
  });

  terapkan(root.dataset.tema || "ats", false);
})();
