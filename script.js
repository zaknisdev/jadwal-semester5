document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".day-schedule").forEach((s) => s.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.day).classList.add("active");
  });
});
