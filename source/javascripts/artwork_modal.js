const artworks = document.querySelectorAll(".artwork");

  // function showModal() {
  //   e.preventDefault();
  //   this.style.setProperty("" = )

  //   console.log(this);

  // }


artworks.forEach((artwork) => {
  artwork.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.currentTarget.style)
  });
});

// const intro = document.querySelector(".introduction");
// const stats = document.querySelector(".statistics");

// cards.forEach((card) => {
//   card.addEventListener(('click'), (e) => {
//     e.preventDefault();
//     const id = e.currentTarget.id
//     const a = 'modal-'.concat(id)
//     const b = 'close-'.concat(id)
//     const btn = document.getElementById(b);
//     const modal = document.getElementById(a);
//     cards.forEach((card) => {
//       card.style.display = "none";
//     });
//     intro.style.display = "none";
//     stats.classList.remove('d-lg-flex');
//     stats.style.display = "none";

//     modal.style.display = "block";

//     btn.addEventListener(('click'), (ev) => {
//       ev.preventDefault();
//       cards.forEach((card) => {
//         card.style.display = "flex";
//       });
//       intro.style.display = "flex";
//       stats.style.display = "flex";
//       stats.classList.add('d-lg-flex');

//       modal.style.display = "none";
//     });
//   });
// });
