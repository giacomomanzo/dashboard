const cardsList = document.querySelector(".swiper-wrapper");

const loadCards = () => {
  try {
    fetch("http://localhost:3001/initiatives")
      .then((res) => res.json())
      .then((res) => displayProducts(res))
      .then((res) => {
        const swiper = new Swiper(".mySwiper", {
          slidesPerView: 2.5,
          spaceBetween: 20,
          pagination: {
            el: ".slider-pagination",
            clickable: true,
          },
        });
      });
  } catch (err) {
    console.error(err);
  }
};

const displayProducts = (items) => {
  const htmlString = items
    .map((item) => {
      return `
          <div class="swiper-slide blur" role="group">
        <div class="mini-card">
          <p class="duration">12.36 min</p>
          <img src="images/elements-icon-podcast.svg" class="podcast" />
        </div>
        <div class="cards-sub-container">
          <p class="txt-cards1">${item.date}</p>
          <p class="txt-cards2">${item.title}</p>
          <p class="txt-cards1">
            ${item.description}
          </p>
        </div>
      </div>    
      `;
    })
    .join("");
  cardsList.innerHTML = htmlString;
  return true;
};

loadCards();
