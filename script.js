const STORAGE_KEY = "jadwal-person";

let currentPerson = localStorage.getItem(STORAGE_KEY) || "zaki";
let currentDay = document.querySelector(".tab-btn.active")?.dataset.day || "senin";

function closeAllDetails() {
  document.querySelectorAll(".schedule-item.open").forEach((i) => {
    i.classList.remove("open");
    i.setAttribute("aria-expanded", "false");
  });
}

function render() {
  document.body.classList.toggle("person-zaki", currentPerson === "zaki");
  document.body.classList.toggle("person-amel", currentPerson === "amel");

  document.querySelectorAll(".person-btn").forEach((btn) => {
    const active = btn.dataset.person === currentPerson;
    btn.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll(".day-schedule").forEach((section) => {
    const match = section.dataset.person === currentPerson && section.dataset.day === currentDay;
    section.classList.toggle("active", match);
  });

  closeAllDetails();
}

document.querySelectorAll(".person-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.person === currentPerson) return;
    currentPerson = btn.dataset.person;
    localStorage.setItem(STORAGE_KEY, currentPerson);
    render();
  });
});

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentDay = btn.dataset.day;
    render();
  });
});

document.querySelectorAll(".schedule-item").forEach((item) => {
  const toggle = () => {
    const isOpen = item.classList.contains("open");
    closeAllDetails();
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
    closeAllDetails();
  }
});

render();
