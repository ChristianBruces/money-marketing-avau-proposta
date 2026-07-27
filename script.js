(() => {
  "use strict";
  const slides = [...document.querySelectorAll(".slide")];
  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");
  const current = document.querySelector("#current");
  const total = document.querySelector("#total");
  const progress = document.querySelector("#progressBar");
  const fullscreen = document.querySelector("#fullscreen");
  let index = Math.max(0, Math.min(slides.length - 1, Number(location.hash.slice(1)) - 1 || 0));
  let touchStartX = 0;

  const pad = value => String(value).padStart(2, "0");

  function render(nextIndex, replaceHash = false) {
    nextIndex = Math.max(0, Math.min(slides.length - 1, nextIndex));
    if (nextIndex === index && slides[index].classList.contains("is-active")) return;
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === nextIndex);
      slide.setAttribute("aria-hidden", i === nextIndex ? "false" : "true");
    });
    index = nextIndex;
    current.textContent = pad(index + 1);
    total.textContent = pad(slides.length);
    progress.style.width = `${((index + 1) / slides.length) * 100}%`;
    prev.disabled = index === 0;
    next.disabled = index === slides.length - 1;
    document.title = `${pad(index + 1)} · ${slides[index].dataset.title} | Projeto Radar Financeiro`;
    const method = replaceHash ? "replaceState" : "pushState";
    history[method](null, "", `#${index + 1}`);
  }

  const go = delta => render(index + delta);
  prev.addEventListener("click", () => go(-1));
  next.addEventListener("click", () => go(1));
  document.addEventListener("keydown", event => {
    if (["ArrowRight", "PageDown", " ", "Enter"].includes(event.key)) { event.preventDefault(); go(1); }
    if (["ArrowLeft", "PageUp", "Backspace"].includes(event.key)) { event.preventDefault(); go(-1); }
    if (event.key === "Home") render(0);
    if (event.key === "End") render(slides.length - 1);
    if (event.key.toLowerCase() === "f") toggleFullscreen();
  });
  window.addEventListener("hashchange", () => render(Number(location.hash.slice(1)) - 1, true));
  document.addEventListener("touchstart", event => { touchStartX = event.changedTouches[0].screenX; }, { passive: true });
  document.addEventListener("touchend", event => {
    const distance = event.changedTouches[0].screenX - touchStartX;
    if (Math.abs(distance) > 55) go(distance < 0 ? 1 : -1);
  }, { passive: true });

  async function toggleFullscreen() {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen?.();
    else await document.exitFullscreen?.();
  }
  fullscreen.addEventListener("click", toggleFullscreen);
  const selectCard = card => {
    const group = card.dataset.selectGroup;
    document.querySelectorAll(`[data-select-group="${group}"]`).forEach(item => {
      const selected = item === card;
      item.classList.toggle("is-selected", selected);
      item.setAttribute("aria-pressed", selected ? "true" : "false");
    });
  };
  document.querySelectorAll("[data-select-group]").forEach(card => {
    card.addEventListener("click", () => selectCard(card));
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectCard(card);
      }
    });
  });
  slides.forEach((slide, i) => {
    slide.setAttribute("role", "group");
    slide.setAttribute("aria-label", `Slide ${i + 1} de ${slides.length}: ${slide.dataset.title}`);
  });
  render(index, true);
})();
