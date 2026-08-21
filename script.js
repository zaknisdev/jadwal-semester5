document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".day-schedule").forEach((s) => s.classList.remove("active"));
    document.querySelectorAll(".schedule-item.open").forEach((i) => {
      i.classList.remove("open");
      i.setAttribute("aria-expanded", "false");
    });

    btn.classList.add("active");
    document.getElementById(btn.dataset.day).classList.add("active");
  });
});

document.querySelectorAll(".schedule-item").forEach((item) => {
  const toggle = () => {
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".schedule-item.open").forEach((i) => {
      i.classList.remove("open");
      i.setAttribute("aria-expanded", "false");
    });
    if (!isOpen) {
      item.classList.add("open");
      item.setAttribute("aria-expanded", "true");
    }
  };

  item.addEventListener("click", toggle);
  item.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".schedule-item")) {
    document.querySelectorAll(".schedule-item.open").forEach((i) => {
      i.classList.remove("open");
      i.setAttribute("aria-expanded", "false");
    });
  }
});
