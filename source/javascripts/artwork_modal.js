const miniatures = document.querySelectorAll(".miniature");
const body = document.querySelector('body');

miniatures.forEach((miniature) => {
  miniature.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;

    const modalId = 'modal-'.concat(id);
    const modal = document.getElementById(modalId);

    body.style.overflow = "hidden";
    modal.style.display = "flex";

    const btnId = 'return-'.concat(id);
    const btn = document.getElementById(btnId);

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = "none";
      body.style.overflow = "scroll";
    });
  });
});

