for (let i = 0; i < 2; i++) {
  let clone = document.querySelector(".cards").cloneNode(true);
  clone.setAttribute("id", "newId");
  document.querySelector(".slider").appendChild(clone);
}
